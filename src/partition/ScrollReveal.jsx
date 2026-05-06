import { useEffect, useRef, useState } from 'react'

const transforms = {
  up: 'translate3d(0, 28px, 0)',
  left: 'translate3d(-32px, 0, 0)',
  right: 'translate3d(32px, 0, 0)',
  soft: 'translate3d(0, 18px, 0) scale(0.98)',
}

const ScrollReveal = ({
  as: Component = 'div',
  children,
  className = '',
  style,
  delay = 0,
  direction = 'up',
  threshold = 0.16,
}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : transforms[direction],
        transitionProperty: 'opacity, transform, box-shadow',
        transitionDuration: '760ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal

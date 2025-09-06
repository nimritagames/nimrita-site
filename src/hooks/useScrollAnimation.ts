import { useEffect, useState } from 'react'

export const useScrollAnimation = () => {
  const [hasAnimated, setHasAnimated] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          const elementId = element.getAttribute('data-animate-id') || element.tagName + Math.random()
          
          if (entry.isIntersecting && !hasAnimated.has(elementId)) {
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            setHasAnimated(prev => new Set(prev).add(elementId))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((element, index) => {
      element.setAttribute('data-animate-id', `animated-${index}`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [hasAnimated])

  return null
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((scrolled / maxHeight) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()
    
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}
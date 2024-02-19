import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

interface LazyImageProps {
  src: string
  alt: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return <Image ref={imgRef} src={isVisible ? src : ''} alt={alt} />
}

const Image = styled.img`
  margin-top: 8px;
  width: 180px;
  height: 180px;
  object-fit: cover;
`
export default LazyImage

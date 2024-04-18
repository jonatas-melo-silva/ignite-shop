import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [windowWidth, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowWidth }
}

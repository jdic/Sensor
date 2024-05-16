import { PlatformType } from '../types/DPlatform'
import { useState, useEffect } from 'react'

export const getPlatformQuery = (): PlatformType =>
{
  const [platform, setPlatform] = useState<PlatformType>('mobile')

  useEffect(() =>
  {
    const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
    const mediaQueryTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')

    const getPlaform = () =>
    {
      if (mediaQueryMobile.matches)
        setPlatform('mobile')

      else if (mediaQueryTablet.matches)
        setPlatform('tablet')

      else
        setPlatform('desktop')
    }

    getPlaform()

    const onScreenResize = () =>
      getPlaform()

    window.addEventListener('resize', onScreenResize)

    return () =>
      window.removeEventListener('resize', onScreenResize)
  }, [])

  return platform
}

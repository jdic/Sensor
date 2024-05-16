import { SunIcon, MoonIcon, ComputerDesktopIcon, DeviceTabletIcon, DevicePhoneMobileIcon } from '@heroicons/react/16/solid'
import { getPlatformQuery } from '../../utils/platform'
import { useTheme } from '../../store/useTheme'
import { Button } from '@headlessui/react'
import { useEffect } from 'react'
import { Theme as Mode } from '../../types/DThemes'

export const Theme = () =>
{
  const { theme, nextTheme } = useTheme()
  const platform = getPlatformQuery()

  useEffect(() =>
  {
    const query = window.matchMedia('(prefers-color-scheme: dark)')

    const updateTheme = () =>
    {
      if (theme === 'system')
        document.documentElement.setAttribute('theme', query.matches ? 'dark' : 'light')

      else
        document.documentElement.setAttribute('theme', theme)
    }

    updateTheme()

    query.addEventListener('change', updateTheme)
  }, [theme])

  const systemIcon = platform === 'desktop'
    ? <ComputerDesktopIcon />
    : platform === 'tablet'
    ? <DeviceTabletIcon />
    : <DevicePhoneMobileIcon />;

  const icons: Record<Mode, JSX.Element> =
  {
    light: <SunIcon />,
    dark: <MoonIcon />,
    system: systemIcon
  } as const

  return (
    <Button
      onClick={nextTheme}
      className='size-5'
    >
      {icons[theme]}
    </Button>
  )
}

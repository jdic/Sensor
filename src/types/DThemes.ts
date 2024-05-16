export type Theme = 'light' | 'dark' | 'system'

export const nextTheme: Record<Theme, Theme> =
{
  light: 'dark',
  dark: 'system',
  system: 'light'
}

export interface IThemeStore
{
  theme: Theme
  setTheme: (theme: Theme) => void
  nextTheme: () => void
}

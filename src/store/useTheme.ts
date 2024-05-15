import { IThemeStore, Theme, nextTheme } from '../types/DThemes'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const next = (theme: Theme) => nextTheme[theme]

const persistentObject = persist<IThemeStore>((set, get) =>
(
  {
    theme: 'system',
    setTheme: (theme: Theme) => set(() => ({ theme: theme })),
    nextTheme: () => set(() => ({ theme: next(get().theme) }))
  }
), { name: 'theme-storage' })

export const useTheme = create(persistentObject)
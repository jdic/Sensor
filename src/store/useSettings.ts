import { ISettings, Temperature } from '../types/DSettings'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const persistentObject = persist<ISettings>((set) =>
(
  {
    interval: '1000',
    setInterval: (interval: string) => set(() => ({ interval })),
    temperature: 'Fahrenheit' as Temperature,
    setTemperature: (temperature) => set(() => ({ temperature })),
    ip: '',
    setIp: (ip: string) => set(() => ({ ip })),
  }
), { name: 'settings-storage' })

export const useSettingsStore = create(persistentObject)
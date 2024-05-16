import { ISettings, Unit } from '../types/DSettings'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const persistentObject = persist<ISettings>((set) =>
(
  {
    interval: '1000',
    ip: '0.0.0.0',
    unit: Unit.Fahrenheit,
    setInterval: (interval) => set({ interval }),
    setIp: (ip) => set({ ip }),
    setUnit: (unit) => set({ unit })
  }
), { name: 'settings-storage' })

export const useSettings = create(persistentObject)

import { ISettings, ShortUnit } from '../types/DSettings'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { speedEngine } from '../api/engine'

const persistentObject = persist<ISettings>((set) =>
(
  {
    interval: '1000',
    ip: '0.0.0.0',
    unit: ShortUnit.Fahrenheit,
    speed: '1000',
    setSpeed: (speed) =>
    {
      set({ speed })

      speedEngine()
    },
    setInterval: (interval) => set({ interval }),
    setIp: (ip) => set({ ip }),
    setUnit: (unit) => set({ unit }),
  }
), { name: 'settings-storage' })

export const useSettings = create(persistentObject)

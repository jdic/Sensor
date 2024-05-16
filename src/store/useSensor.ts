import { ISensor, ISensorsStore } from '../types/DSensor'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const persistentObject = persist<ISensorsStore>((set, get) =>
(
  {
    sensors: [],
    addSensor: (sensor: ISensor) =>
    {
      if (get().getSensor(sensor.id))
        return false

      else
      {
        set((state) => ({ sensors: [...state.sensors, sensor] }))
        return true
      }
    },
    removeSensor: (id: string) => set(() => ({ sensors: get().sensors.filter((sensor) => sensor.id !== id) })),
    getSensor: (id: string) => get().sensors.find((sensor) => sensor.id === id),
  }
), { name: 'sensors-storage' })

export const useSensor = create(persistentObject)

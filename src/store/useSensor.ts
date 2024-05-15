import { ISensor, ISensorsStore } from '../types/DSensor'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const persistentObject = persist<ISensorsStore>((set, get) =>
(
  {
    sensors: [],
    addSensor: (sensor: ISensor) =>
    {
      if (get().findSensorById(sensor.id))
        return { alreadyExists: true }

      else
      {
        set((state) => ({ sensors: [...state.sensors, sensor] }))
        return { sensor }
      }
    },
    removeSensor: (id: string) => set(() => ({ sensors: get().sensors.filter((sensor) => sensor.id !== id) })),
    getSensor: (id: string) => get().sensors.find((sensor) => sensor.id === id),
    findSensorById: (id: string) => get().sensors.find((sensor) => sensor.id === id)
  }
), { name: 'sensors-storage' })

export const useSensor = create(persistentObject)
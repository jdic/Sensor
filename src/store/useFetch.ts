import { IFetchStore } from '../types/IFetch'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const persistentObject = persist<IFetchStore>((set) =>
(
  {
    engineRoute: '/engine',
    sensorRoute: '/sensor?pin=',
    engineOffRoute: '/off',
    engineOnRoute: '/on',
    engineSpeedRoute: '/speed?speed=', 
    setEngineRoute: (route: string) =>
    {
      set({ engineRoute: route })
    },
    setSensorRoute: (route: string) => set({ sensorRoute: route }),
    setEngineOffRoute: (route: string) => set({ engineOffRoute: route }),
    setEngineOnRoute: (route: string) => set({ engineOnRoute: route }),
    setEngineSpeedRoute: (route: string) => set({ engineSpeedRoute: route })
}), { name: 'fetch-storage' })

export const useFetch = create(persistentObject)

import { ITemperatureStore } from '../types/DTemperature'
import { useSettings } from './useSettings'
import { useSensor } from './useSensor'
import { create } from 'zustand'
import { getFromLocalStorage } from '../utils/localStorage'
import axios from 'axios'

const getTempertureURL = (addition: string) =>
{
  const sensorRoute = getFromLocalStorage('sensorRoute', 'fetch-storage')
  const ip = getFromLocalStorage('ip', 'settings-storage')

  return new URL(`${sensorRoute}${addition}`, `http://${ip}`).toString()
}

const fetchTemperature = async (id: string): Promise<string> =>
{
  const response = await (await axios.get(getTempertureURL(id))).data
  console.log(response)
  return response
}

export const useTemperature = create<ITemperatureStore>((set, get) =>
(
  {
    temperatures: {},
    intervalId: undefined,
    fetchTemperature: async (id: string) =>
    {
      try
      {
        const temperature = await fetchTemperature(id)

        set((state) => ({ temperatures: { ...state.temperatures, [id]: temperature } }))
      } catch (error) { console.error(error) }
    },
    startFetch: () =>
    {
      const { interval } = useSettings.getState()
      const { sensors } = useSensor.getState()

      const intervalId = setInterval(() =>
      {
        sensors.forEach((sensor) =>
        {
          get().fetchTemperature(sensor.id)
        })
      }, parseFloat(interval))

      set({ intervalId: intervalId as unknown as number })
    },
    stopFetch: () =>
    {
      clearInterval(get().intervalId)
      set({ intervalId: undefined })
    },
    getTemperatureById: (id: string) => get().temperatures[id]
  }
))

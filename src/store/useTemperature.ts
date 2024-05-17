import { ITemperatureStore } from '../types/DTemperature'
import { useSettings } from './useSettings'
import { useSensor } from './useSensor'
import { create } from 'zustand'

const fetchTemperature = async (id: string, ip: string): Promise<string> =>
{
  const response = await fetch(`http://${ip}/read/temperature/${id}`)
  const data = await response.json()
  return data.temperature
}

export const useTemperature = create<ITemperatureStore>((set, get) =>
(
  {
    temperatures: {},
    intervalId: undefined,
    fetchTemperature: async (id: string) =>
    {
      const { ip } = useSettings.getState()
      try
      {
        const temperature = await fetchTemperature(id, ip)

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

export interface ITemperatureStore
{
  temperatures: { [key: string]: string }
  fetchTemperature: (id: string) => Promise<void>
  startFetch: () => void
  stopFetch: () => void
  intervalId?: number
  getTemperatureById: (id: string) => string
}
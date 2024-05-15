export enum Temperature
{
  Celcius = 'Celcius',
  Fahrenheit = 'Fahrenheit'
}

export interface ISettings
{
  temperature: Temperature
  setTemperature: (temperature: Temperature) => void
  interval: number
  setInterval: (interval: number) => void
  ip: string
  setIp: (ip: string) => void
}
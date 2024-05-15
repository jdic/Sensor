export enum Temperature
{
  Celcius = 'Celcius',
  Fahrenheit = 'Fahrenheit'
}

export interface ISettings
{
  temperature: Temperature
  setTemperature: (temperature: Temperature) => void
  interval: string
  setInterval: (interval: string) => void
  ip: string
  setIp: (ip: string) => void
}
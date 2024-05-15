export enum Unit
{
  Celcius = 'Celcius',
  Fahrenheit = 'Fahrenheit'
}

export interface ISettings
{
  unit: Unit
  setUnit: (unit: Unit) => void
  interval: string
  setInterval: (interval: string) => void
  ip: string
  setIp: (ip: string) => void
}
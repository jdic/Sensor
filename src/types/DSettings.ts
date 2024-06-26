export enum Unit
{
  Celcius = 'Celcius',
  Fahrenheit = 'Fahrenheit',
  Kelvin = 'Kelvin'
}

export enum ShortUnit
{
  Celcius = '°C',
  Fahrenheit = '°F',
  Kelvin = '°K'
}

export interface ISettings
{
  unit: ShortUnit
  setUnit: (unit: ShortUnit) => void
  interval: string
  setInterval: (interval: string) => void
  ip: string
  setIp: (ip: string) => void
  speed: string
  setSpeed: (speed: string) => void
}

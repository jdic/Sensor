export type TemperatureUnit = '°C' | '°F' | '°K'

export interface ISensor
{
  id: string
  unit: TemperatureUnit
  description: string
  api?: string
}
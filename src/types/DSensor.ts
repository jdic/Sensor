export type TemperatureUnit = '°C' | '°F' | '°K'

export interface ISensor
{
  id: string
  unit: TemperatureUnit
  description: string
  api?: string
}

export interface ISensorStoreAddSensor
{
  alreadyExists?: boolean
  sensor?: ISensor
}

export interface ISensorsStore
{
  sensors: ISensor[]
  addSensor: (sensor: ISensor) => ISensorStoreAddSensor
  removeSensor: (id: string) => void
  getSensor: (id: string) => ISensor | undefined
  findSensorById: (id: string) => ISensor | undefined
}
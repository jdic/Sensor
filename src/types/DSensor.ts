import { ShortUnit } from './DSettings'

export interface ISensor
{
  id: string
  unit: ShortUnit
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
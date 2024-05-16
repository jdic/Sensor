import { ShortUnit } from './DSettings'

export interface ISensor
{
  id: string
  unit: ShortUnit
  description: string
  api?: string
}


export interface ISensorsStore
{
  sensors: ISensor[]
  addSensor: (sensor: ISensor) => boolean
  removeSensor: (id: string) => void
  getSensor: (id: string) => ISensor | undefined
}

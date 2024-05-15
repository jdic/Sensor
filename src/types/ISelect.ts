import { IGeneric } from './IGeneric'

export interface ISelect extends IGeneric
{
  title?: string
  description?: string
  onChange?: (value: any) => void
  defaultValue?: string
  options: string[]
}

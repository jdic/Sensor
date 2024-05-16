import { IGeneric } from './IGeneric'

export interface ITextarea extends IGeneric
{
  title?: string
  description?: string
  placeholder?: string
  onChange: (value: string) => void
}
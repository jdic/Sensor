import { IGeneric } from './IGeneric'

export interface IInput extends IGeneric
{
  title?: string
  description?: string
  placeholder?: string
  required?: boolean
  type?: React.HTMLInputTypeAttribute
  children?: React.ReactNode
  onChange?: (text: string) => void
  showWarn?: boolean
  warnText?: string
  initialWarnState?: boolean
  validator?: (value: string) => boolean
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
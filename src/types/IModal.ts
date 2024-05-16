import { IGeneric } from './IGeneric'

export interface IModal extends IGeneric
{
  open: boolean
  onClose?: () => void
  title?: string
  children?: React.ReactNode
  disableCloseButton?: boolean
  description?: string
}

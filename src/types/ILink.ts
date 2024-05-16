import { IGeneric } from './IGeneric'

export interface ILink extends IGeneric
{
  href: string
  children: React.ReactNode
  className?: string
  rel?: string
  target?: React.HTMLAttributeAnchorTarget
  ariaLabel?: string
}

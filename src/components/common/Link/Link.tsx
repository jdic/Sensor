import { ILink } from '../../../types/ILink'

export const Link: React.FC<ILink> = ({ href, children, className, ariaLabel, rel = 'noopener noreferrer', target = '_blank' }) =>
{
  return (
    <a
      className={className}
      href={href}
      rel={rel}
      target={target}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

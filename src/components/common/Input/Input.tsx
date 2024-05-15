import { Field, Input as InputBase, Label, Description } from '@headlessui/react'
import { IInput } from '../../../types/IInput'
import React, { useState } from 'react'
import clsx from 'clsx'

export const Input: React.FC<IInput> = ({ title, description, validator, children, type, onKeyPress, className, placeholder, onChange, showWarn, warnText, required }) =>
{
  const [showWarning, setShowWaring] = useState(false)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (validator)
      setShowWaring(!validator(event.target.value))

    if (onChange && !showWarning)
      onChange(event.target.value)
  }

  return (
    <Field>
      <Label className='text-sm font-medium'>{title}</Label>
      <Description>{description}</Description>
      <InputBase
        onChange={handleInput}
        className={clsx(
          'mt-1 block w-full rounded-lg border-none dark:bg-white/5 bg-light-text/10 py-1.5 px-3 text-sm/6 text-black dark:text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25 dark:data-[focus]:outline-white/25',
          className,
        )}
        placeholder={placeholder}
        required={required}
        onKeyDown={onKeyPress}
        type={type}
      />
      {(showWarning || showWarn) && warnText &&
        (
          <p className='text-global-warning'>{warnText}</p>
        )
      }
      {children}
    </Field>
  )
}
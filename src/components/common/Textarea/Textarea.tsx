import { Description, Field, Label, Textarea as TextareaBase } from '@headlessui/react'
import { ITextarea } from '../../../types/ITextarea'
import React from 'react'
import clsx from 'clsx'

export const Textarea: React.FC<ITextarea> = ({ title, description, placeholder, onChange, className }) =>
{
  return (
    <Field>
      <Label className='text-sm font-medium'>{title}</Label>
      <Description>{description}</Description>
      <TextareaBase
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={clsx(
          'mt-1 block w-full rounded-lg border-none dark:bg-white/5 bg-light-text/10 py-1.5 px-3 text-sm/6 text-black dark:text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25 dark:data-[focus]:outline-white/25',
          className
        )}
      />
    </Field>
  )
}
import { Description, Field, Label, Select as SelectBase } from '@headlessui/react'
import { ISelect } from '../../../types/ISelect'
import React from 'react'
import clsx from 'clsx'

export const Select: React.FC<ISelect> = ({ className, title, description, options, defaultValue, onChange }) => {
  return (
    <Field>
      <Label className='text-sm font-medium'>{title}</Label>
      <Description>{description}</Description>
      <SelectBase
        defaultValue={defaultValue}
        onChange={onChange}
        className={clsx(
          'mt-1 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          className
        )}
      >
        {options && options.map((option, index) => (<option key={index}>{option}</option>))}
      </SelectBase>
    </Field >
  )
}

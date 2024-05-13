import { Field, Label, Description, Button, Fieldset } from '@headlessui/react'
import { TrashIcon, PencilIcon } from '@heroicons/react/16/solid'
import { ISensor } from '../../types/DSensor'
import { useEffect, useState } from 'react'

export const Sensor: React.FC<ISensor> = ({ description, id, unit, api }) =>
{
  const [temperature, setTemperature] = useState<number>(0)

  useEffect(() =>
  {
    setTemperature(5)
  }, [])

  return (
    <div className='w-1/2 md:w-1/4 lg:w-1/6 px-2 py-2'>
      <Fieldset className='dark:bg-dark-primary w-full rounded-md p-4'>
        <Field className='flex items-center justify-between'>
          <Label className='font-semibold dark:text-white'>PIN: <span className='font-medium'>{id}</span></Label>
          <div className='flex items-center gap-1'>
            <Button className='size-5 p-[1px] rounded-md dark:bg-dark-accent' aria-description='Edit Sensor'>
              <PencilIcon />
            </Button>
            <Button className='size-5 p-[1px] rounded-md dark:bg-dark-accent' aria-description='Delete Sensor'>
              <TrashIcon />
            </Button>
          </div>
        </Field>
        <Field className='mt-2'>
          <div className='flex'>
            <Label className='text-3xl font-medium dark:text-dark-secondary'>{temperature > 0 ? temperature : '~0'}</Label>
            <Label className=''>{unit}</Label>
          </div>
        </Field>
        <Field className='mt-2'>
          <Description className=''>{description}</Description>
          {api && <Label className='text-xs dark:text-white/65'>{api}</Label>}
        </Field>
      </Fieldset>
    </div>
  )
}

import { Field, Label, Description, Button, Fieldset } from '@headlessui/react'
import { useTemperature } from '../../store/useTemperature'
import { TrashIcon } from '@heroicons/react/16/solid'
import { useSensor } from '../../store/useSensor'
import { ISensor } from '../../types/DSensor'

export const Sensor: React.FC<ISensor> = ({ description, id, unit, api }) =>
{
  const { temperatures } = useTemperature()
  const { removeSensor } = useSensor()

  return (
    <div className='w-1/2 md:w-1/4 lg:w-1/6 px-2 py-2'>
      <Fieldset className='dark:bg-dark-primary w-full rounded-md p-4'>
        <Field className='flex items-center justify-between'>
          <Label className='font-semibold dark:text-white'>PIN: <span className='font-medium'>{id ? id : '0'}</span></Label>
          <div className='flex items-center gap-1'>
            <Button className='size-5 p-[1px] rounded-md dark:bg-dark-accent' aria-description='Delete Sensor' onClick={() => removeSensor(id)}>
              <TrashIcon />
            </Button>
          </div>
        </Field>
        <Field className='mt-2'>
          <div className='flex'>
            <Label className='text-3xl font-medium dark:text-dark-secondary'>{temperatures[id] || '~0'}</Label>
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

import { PlusCircleIcon } from '@heroicons/react/16/solid'
import { Textarea } from '../common/Textarea/Textarea'
import { ShortUnit } from '../../types/DSettings'
import { useSensor } from '../../store/useSensor'
import { Select } from '../common/Select/Select'
import { Modal } from '../common/Modal/Modal'
import { Input } from '../common/Input/Input'
import { ISensor } from '../../types/DSensor'
import { Button } from '@headlessui/react'
import { useState } from 'react'
import clsx from 'clsx'

export const Create = () =>
{
  const [data, setData] = useState<ISensor>({ id: '', description: '', unit: ShortUnit.Fahrenheit, api: '' })
  const [showModal, setShowModal] = useState(false)
  const [showWarn, setShowWarn] = useState(false)
  const { addSensor, getSensor } = useSensor()

  const handleModal = () => setShowModal((prev) => !prev)

  const handleSensor = (key: keyof ISensor, value: any) =>
    setData((prev) => ({ ...prev, [key]: value }))

  const handleChange = (value: string) =>
    setShowWarn(value.length === 0 || !!getSensor(value))

  const handleCreate = () =>
  {
    if (showWarn) return

    handleModal()
    addSensor(data)
  }

  return (
    <>
      <div className='fixed flex items-center justify-center rounded-md right-5 bottom-5 w-7 h-7 dark:bg-dark-secondary'>
        <Button className='size-5 dark:text-black' onClick={handleModal}>
          <PlusCircleIcon />
        </Button>
      </div>
      <Modal title='Create Sensor' open={showModal} onClose={handleModal} className='w-[60%] md:w-[30%]'>
        <div className='mt-2'>
          <Input
            type='number'
            title='ID'
            onChange={(value) => { handleChange(value); handleSensor('id', value) }}
            showWarn={showWarn}
            warnText='ID already exists.'
          />
        </div>
        <div className='mt-2'>
          <Select
            title='Unit'
            options={Object.values(ShortUnit)}
            onChange={(event) => handleSensor('unit', event.target.value as ShortUnit)}
            defaultValue={data.unit}
          />
        </div>
        <div className='mt-2'>
          <Textarea
            title='Description'
            onChange={(value) => handleSensor('description', value)}
          />
        </div>
        <div className='mt-2'>
          <Button
            onClick={handleCreate}
            className={clsx(
              `text-center w-full rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white`,
              showWarn ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            )}
          >
            Create
          </Button>
        </div>
      </Modal> 
    </>
  )
}

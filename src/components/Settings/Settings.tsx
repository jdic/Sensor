import { Cog6ToothIcon } from '@heroicons/react/16/solid'
import { useSettings } from '../../store/useSettings'
import { isIPValid } from '../../utils/validators'
import { Button, Field } from '@headlessui/react'
import { Select } from '../common/Select/Select'
import { Modal } from '../common/Modal/Modal'
import { Input } from '../common/Input/Input'
import { Unit } from '../../types/DSettings'
import { useState } from 'react'

export const Settings = () =>
{
  const { interval, ip, setInterval, setIp, setUnit, unit } = useSettings()
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => setShowModal((prev) => !prev)

  return (
    <>
      <Button className='size-5' onClick={handleModal}>
        <Cog6ToothIcon />
      </Button>
      <Modal title='Settings' open={showModal} onClose={handleModal} className='w-[60%] md:w-[30%]'>
        <Field className='mt-2'>
          <Input title='IP Address' validator={isIPValid} warnText='Invalid IP Address.' onChange={setIp} placeholder={ip} initialWarnState />
        </Field>
        <Field className='mt-2'>
          <Input title='Interval' type='number' onChange={setInterval} placeholder={interval}  />
        </Field>
        <Field className='mt-2'>
          <Select title='Unit' options={Object.keys(Unit)} onChange={(event) => setUnit(event.target.value as Unit)} defaultValue={unit} />
        </Field>
      </Modal>
    </>
  )
}

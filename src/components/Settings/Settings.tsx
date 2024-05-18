import { Cog6ToothIcon } from '@heroicons/react/16/solid'
import { ShortUnit, Unit } from '../../types/DSettings'
import { useSettings } from '../../store/useSettings'
import { isIPValid } from '../../utils/validators'
import { Button, Field } from '@headlessui/react'
import { Select } from '../common/Select/Select'
import { useFetch } from '../../store/useFetch'
import { Modal } from '../common/Modal/Modal'
import { Input } from '../common/Input/Input'
import { useEffect, useState } from 'react'
import { speedEngine } from '../../api/engine'

export const Settings = () =>
{
  const { engineRoute, sensorRoute, engineSpeedRoute, setEngineSpeedRoute, setEngineRoute, setSensorRoute, engineOffRoute, engineOnRoute, setEngineOffRoute, setEngineOnRoute } = useFetch()
  const { interval, ip, setInterval, setIp, setUnit, unit, speed, setSpeed } = useSettings()
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => setShowModal((prev) => !prev)

  useEffect(() =>
  {
    speedEngine()

    return () => {}
  }, [speed])

  return (
    <>
      <Button className='size-5' onClick={handleModal}>
        <Cog6ToothIcon />
      </Button>
      <Modal title='Settings' open={showModal} onClose={handleModal} className='w-[80%] md:w-[30%]'>
        <Field className='mt-2'>
          <Input title='IP Address' validator={isIPValid} warnText='Invalid IP Address.' onChange={setIp} placeholder={ip} initialWarnState />
        </Field>
        <Field className='mt-2'>
          <Input title='Fetch Interval' type='number' onChange={setInterval} placeholder={interval}  />
        </Field>
        <Field className='mt-2'>
          <Select title='Temperature Unit' options={Object.keys(Unit)} onChange={(event) => setUnit(event.target.value as ShortUnit)} defaultValue={unit} />
        </Field>
        <Field className='mt-2'>
          <Input title='Speed RPM' placeholder={speed} onChange={setSpeed} />
        </Field>
        <Field className='mt-2'>
          <Input title='Engine Route' placeholder={engineRoute} onChange={setEngineRoute} />
          <div className='flex gap-2 text-xs mt-2'>
            <Input description='Start' placeholder={engineOnRoute} onChange={setEngineOnRoute} />
            <Input description='Stop' placeholder={engineOffRoute} onChange={setEngineOffRoute} />
          </div>
          <div className='text-xs mt-2'>
            <Input description='Speed' placeholder={engineSpeedRoute} onChange={setEngineSpeedRoute} />
          </div>
        </Field>
        <Field className='mt-2'>
          <Input title='Sensor Route' placeholder={sensorRoute} onChange={setSensorRoute} />
        </Field>
      </Modal>
    </>
  )
}

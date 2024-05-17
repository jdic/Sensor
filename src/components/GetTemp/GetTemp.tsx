import { InboxArrowDownIcon, InboxIcon } from '@heroicons/react/16/solid'
import { useTemperature } from '../../store/useTemperature'
import { Button } from '@headlessui/react'
import { useEffect, useState } from 'react'

export const GetTemp = () =>
{
  const [enabled, setEnabled] = useState(false)
  const { startFetch, stopFetch } = useTemperature()

  const hadleClick = () => setEnabled((prev) => !prev)

  useEffect(() =>
  {
    if (enabled) startFetch()
    else stopFetch()

    return () => stopFetch()
  }, [enabled, startFetch, stopFetch])

  return (
    <Button className='size-5' onClick={hadleClick}>
      {enabled ? <InboxArrowDownIcon /> : <InboxIcon />}
    </Button>
  )
}
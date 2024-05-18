import { PlayCircleIcon, ArrowPathIcon } from '@heroicons/react/16/solid'
import { Button } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { startEngine, stopEngine } from '../../api/engine'

export const Engine = () =>
{
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => setIsActive((prev) => !prev)

  useEffect(() =>
  {
    if (isActive)
      startEngine()

    else
      stopEngine()
  }, [isActive])

  return (
    <>
      <div className='flex items-center justify-center rounded-md w-7 h-7 dark:bg-dark-secondary'>
        <Button className='size-5 dark:text-black' onClick={handleClick}>
          <div className={isActive ? 'animate-spin' : ''}>
            {isActive ? <ArrowPathIcon /> : <PlayCircleIcon />}
          </div>
        </Button>
      </div>
    </>
  )
}
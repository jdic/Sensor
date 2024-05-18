import { Settings } from '../../components/Settings/Settings'
import { GetTemp } from '../../components/GetTemp/GetTemp'
import { Link } from '../../components/common/Link/Link'
import { Theme } from '../../components/Theme/Theme'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'

const emojis = ['🤠', '😀', '🍆', '🤓', '🧐', '👻', '😺', '👽', '🤑', '🥵', '🥶', '🚀']

export const Header = () =>
{ 
  const [emoji, setEmoji] = useState('🤠')

  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className='w-full py-2 px-4 flex justify-between items-center'>
      <span className='text-2xl animate-spin-slow'>{emoji}</span>
      <div className='flex items-center gap-2'>
        <GetTemp />
        <Settings />
        <Theme />
        <Link href='https://github.com/jdic' className='text-lg'>
          <FaGithub />
        </Link>
      </div>
    </header>
  )
}

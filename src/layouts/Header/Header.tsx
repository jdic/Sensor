import { Settings } from '../../components/Settings/Settings'
import { Link } from '../../components/common/Link/Link'
import { FaGithub } from 'react-icons/fa6'

export const Header = () =>
{
  return (
    <header className='w-full py-2 px-4 flex justify-between items-center'>
      <span className='text-2xl'>🤠</span>
      <div className='flex items-center gap-2'>
        <Settings />
        <Link href='https://github.com/jdic' className='text-lg'>
          <FaGithub />
        </Link>
      </div>
    </header>
  )
}

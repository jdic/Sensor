import { Engine } from './components/Engine/Engine'
import { Create } from './components/Sensor/Create'
import { Sensor } from './components/Sensor/Sensor'
import { Header } from './layouts/Header/Header'
import { useSensor } from './store/useSensor'

export const App = () =>
{
  const { sensors } = useSensor()

  return (
    <>
      <Header />
      <div className='flex flex-wrap'>
        {sensors.map((sensor) => <Sensor key={sensor.id} {...sensor} />)}
      </div>
      <div className='fixed bottom-5 right-5'>
        <div className='flex flex-col gap-2'>
          <Engine />
          <Create />
        </div>
      </div>
    </>
  )
}
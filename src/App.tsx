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
    </>
  )
}
import { useFetch } from '../store/useFetch'
import { useSettings } from '../store/useSettings'
import { POST } from './post'

const getEngineURL = (addition: string) =>
{
  const { engineRoute } = useFetch()
  const { ip } = useSettings()

  return new URL(`${engineRoute}${addition}`, `http://${ip}`).toString()
}

export const startEngine = async () =>
{
  const { engineOnRoute } = useFetch()

  try
  {
    await POST(getEngineURL(engineOnRoute || '/start'))
  }

  catch (error) { console.error(error) }
}

export const stopEngine = async () =>
{
  const { engineOffRoute } = useFetch()

  try
  {
    await POST(getEngineURL(engineOffRoute || '/stop'))
  }

  catch (error) { console.error(error) }
}

export const speedEngine = async () =>
{
  const { engineOffRoute } = useFetch()
  const { speed } = useSettings()

  try
  {
    await POST(getEngineURL(engineOffRoute || `/speed?speed=${speed}`))
  }

  catch (error) { console.error(error) }
}
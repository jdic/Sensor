import { ILocalStorageFetch } from '../types/ILocalStorage'
import { getFromLocalStorage } from '../utils/localStorage'
import { POST } from './post'

const getEngineURL = (addition: string) =>
{
  const engineRoute = getFromLocalStorage('engineRoute', 'fetch-storage') as ILocalStorageFetch
  const ip = getFromLocalStorage('ip', 'settings-storage')

  return new URL(`${engineRoute}${addition}`, `http://${ip}`).toString()
}

export const startEngine = async () =>
{
  const engineOnRoute = getFromLocalStorage('engineOnRoute', 'fetch-storage')

  try
  {
    await POST(getEngineURL(engineOnRoute || '/on'))
  }

  catch (error) { console.error(error) }
}

export const stopEngine = async () =>
{
  const engineOffRoute = getFromLocalStorage('engineOffRoute', 'fetch-storage')

  try
  {
    await POST(getEngineURL(engineOffRoute || '/off'))
  }

  catch (error) { console.error(error) }
}

export const speedEngine = async () =>
{
  const engineSpeedRoute = getFromLocalStorage('engineSpeedRoute', 'fetch-storage')
  const speed = getFromLocalStorage('speed', 'settings-storage')

  try
  {
    await POST(getEngineURL(engineSpeedRoute + speed || `/speed?speed=${speed}`))
  }

  catch (error) { console.error(error) }
}
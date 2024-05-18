export interface IFetchStore
{
  engineRoute: string
  sensorRoute: string
  engineOnRoute: string
  engineOffRoute: string
  engineSpeedRoute: string
  setEngineRoute: (route: string) => void
  setSensorRoute: (route: string) => void
  setEngineOnRoute: (route: string) => void
  setEngineOffRoute: (route: string) => void
  setEngineSpeedRoute: (route: string) => void
}

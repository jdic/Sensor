export const getFromLocalStorage = (query: string, storage: string) =>
{
  const item = JSON.parse(localStorage.getItem(storage) || '{}')
  if (!item.state) return

  return item.state[query]
}
  
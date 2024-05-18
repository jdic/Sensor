export const POST = async (url: string) =>
  await fetch(url, { method: 'POST' })
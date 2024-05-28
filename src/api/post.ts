import axios from 'axios'

export const POST = async (url: string) =>
{
  const response = await (await axios.post(url)).data
  console.log(response)
 
  return response
}
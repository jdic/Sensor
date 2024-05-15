export const isIPValid = (ip: string): boolean =>
  /^([0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip)
export function getUniqueArrayObjectKeys(arr: any[]): string[] {
  const knownKeys: string[] = []
  arr.forEach(obj => {
    const keys = Object.keys(obj)
    keys.forEach((key: string) => {
      const isKnown = knownKeys.includes(key)
      if (!isKnown) {
        knownKeys.push(key)
      }
    })
  })
  return knownKeys
}

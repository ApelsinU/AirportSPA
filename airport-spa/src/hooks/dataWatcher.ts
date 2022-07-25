import { useEffect, useState } from 'react'

export function useDataWatcher(value: string, delay = 500) {
  const [dataWatcher, setDataWatcher] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDataWatcher(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return dataWatcher
}

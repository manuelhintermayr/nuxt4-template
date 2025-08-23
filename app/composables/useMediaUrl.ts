import { useRuntimeConfig } from '#imports'

export function useMediaUrl(path: string) {
  const config = useRuntimeConfig()
  const base = typeof config.public.baseURL === 'string' ? config.public.baseURL : '/'
  return `${base.replace(/\/$/, '')}/media/${path.replace(/^\//, '')}`
}

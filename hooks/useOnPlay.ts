import { Song } from '@/types'
import { useUser } from './useUser'
import usePlayer from './usePlayer'

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer()
}

'use client'

import useSongById from '@/hooks/useGetSongById'
import useLoadSong from '@/hooks/useLoadSong'
import usePlayer from '@/hooks/usePlayer'

const Player = () => {
  const player = usePlayer()
  const { song } = useSongById(player.activeId)

  const songUrl = useLoadSong(song!)

  if (!song || !songUrl || !player.activeId) {
    return null
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      Player
      {/* <PlayerContent key={songUrl} song={song} songUrl={songUrl}/>  */}
    </div>
  )
}

export default Player

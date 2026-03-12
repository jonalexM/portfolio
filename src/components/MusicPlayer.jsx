import { useState, useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [showVolume, setShowVolume] = useState(false)
  const [started, setStarted] = useState(false)

  // Try to autoplay on mount; if browser blocks it, fall back to first interaction
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.play().then(() => {
      setPlaying(true)
      setStarted(true)
    }).catch(() => {
      // Browser blocked autoplay — start on first interaction instead
      const start = () => {
        audio.play().then(() => { setPlaying(true); setStarted(true) }).catch(() => {})
      }
      window.addEventListener('click', start, { once: true })
      window.addEventListener('scroll', start, { once: true })
    })
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = (e) => {
    e.stopPropagation()
    if (playing) {
      audioRef.current?.pause()
      setPlaying(false)
    } else {
      audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})
      setStarted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="https://res.cloudinary.com/dy5th0iv4/video/upload/v1773323759/uzi_umxnpn.mp3" loop preload="none" />
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
      >
        {showVolume && (
          <div className="flex flex-col items-center gap-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-2 py-3 shadow-md">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-20 cursor-pointer accent-gray-600 dark:accent-gray-300"
              style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
            />
          </div>
        )}
        {!started && (
          <span className="text-xs text-gray-400 dark:text-gray-500 animate-pulse whitespace-nowrap">
            interact to play ♪
          </span>
        )}
        <button
          onClick={toggle}
          aria-label={playing ? 'Pause music' : 'Play music'}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-sm transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={playing ? 'animate-spin' : ''}
            style={playing ? { animationDuration: '3s' } : {}}
          >
            <path d="M9 3v11.5a3.5 3.5 0 1 0 1 0V8h5V3H9zm-1.5 14a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
        </button>
      </div>
    </>
  )
}

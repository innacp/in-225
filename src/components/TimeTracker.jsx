import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

export default function TimeTracker() {
  const [currentTime, setCurrentTime] = useState(0);
  const [toggleTimer, setToggleTimer] = useState(false);

  useEffect(() => {
    let interval = null;                       // mount, unmount, watcher
    if (toggleTimer) {
      interval = setInterval(() => {
        setCurrentTime(currentTime + 1)      // ++ reassigns new value
      }, 1000) 
    }
    return () => clearInterval(interval);
  }, [currentTime, toggleTimer])              // dependency array (vid chogo zalezhyt useEffect)

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`

  }

  return (

    <div className="tracker">
      <Button
        variant="outlined"
        onClick={() => setToggleTimer(!toggleTimer)}
        className="start"
      >
        {toggleTimer ? 'pause' : 'start'}
      </Button>
      <div className="timePassed">{formatTime(currentTime)}</div>
    </div>
  )
}
// damashka

// 1. save time to localStorage (check in useEffect)
//   - put currentTime into setLocalStorage
//   - get currentTime from localStorage
//   - check if it's not undefined in useEffect
// 2. add hours formatting

import React, {useState} from 'react';

function LiveClock() {
  const [timer, setTimer] = useState(new Date());

  function tick() {
    setTimer(new Date)
  }

  React.useEffect(() => {
    let timerID = setInterval(() => {
      tick()
    }, 1000)
    return() => {
      clearInterval(timerID)
    }
  })

  return (
    <div>
      Melbourne: { timer.toLocaleTimeString() }
    </div>
  );
}

export default LiveClock;
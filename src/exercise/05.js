// useRef et useEffect
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import ConfettiGenerator from 'confetti-js'

function Confetti() {
  const confettiRef = React.useRef()
  const refSetting = React.useRef({
    clock: 100,
    animate: true,
    max: 200,
  })
  React.useEffect(() => {
    if (!confettiRef.current) {
      return
    }
    const confettiSettings = {...refSetting.current, target: confettiRef.current }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  })

  return <canvas ref={confettiRef} />
}

function App() {
  return <Confetti />
}
export default App

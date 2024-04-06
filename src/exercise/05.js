// useRef et useEffect
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import ConfettiGenerator from 'confetti-js'

function Confetti() {
  // 🐶 utilise useRef pour créer un référence 'confettiRef' vers le canvas de confetti
   const confettiRef = React.useRef()

  // 🐶 utilise useEffect pour initiliser le générateur de confetti avec les bons paramètres
  // 🤖 Initialisation :
  React.useEffect(() => {
    if(!confettiRef.current){
      return
    }
    const confettiSettings = { target: confettiRef.current}
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()
    
    return () => confetti.clear()
  })

  return <canvas  ref={confettiRef} />
}

function App() {
  return <Confetti />
}
export default App

// Lifting state
// http://localhost:3000/alone/exercise/03.js

import * as React from 'react'

// 👨‍✈️ Nous voulons afficher dans le composant Content, l'ordinateur préféré

function MyBestComputer({computer, onComputerChange}) {
  return (
    <div>
      <label>Mon ordinateur préféré : </label>
      <input
        value={computer}
        onChange={event => onComputerChange(event.target.value)}
      />
    </div>
  )
}

function UserName() {
  const [userName, setUserName] = React.useState('')
  return (
    <div>
      <label>Nom d'utilisateur : </label>
      <input
        value={userName}
        onChange={event => setUserName(event.target.value)}
      />
    </div>
  )
}

// 🐶 accepte `computer` en props
function Content({computer}) {
  return (
    <div>
      Ton ordinateur préféré est <b>{computer}</b> 
    </div>
  )
}
function App() {
  const [computer, setComputer] = React.useState('Macbook Pro')
  return (
    <div>
      <MyBestComputer computer={computer} onComputerChange={setComputer} />
      <UserName  /> 
      <Content computer={computer} />
    </div>
  )
}
export default App

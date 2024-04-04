// Hook useEffect
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'

// 🐶 Corrige l'erreur grâce à useEffect

function Login({initialEmail = ''}) {
  const [email, setEmail] = React.useState(window.localStorage.getItem('email') || initialEmail)
  const [password, setPassword] = React.useState()
  const handlePasswordChange = async event =>  setPassword(event.target.value)

  const handleChange = async event => setEmail(event.target.value)

  // 🐶 Créé un Hook useEffect
  React.useEffect(() => {
    window.localStorage.setItem('email', email)
    console.log('useEffect email a changé')
  }, [email])
  React.useEffect(() => {
    window.localStorage.setItem('email', initialEmail)
    console.log('useEffect initialEmail a changé')
  }, [initialEmail])

  return (
    <div>
      <form>
        <label>Entrez votre email : </label>
        <input id="email" value={email} onChange={handleChange} />
        <input value={password} onChange={handlePasswordChange} />
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <Login initialEmail={`example-${count}@example.com`} />
}

export default App

// Hook useState
// http://localhost:3000/alone/exercise/01.js


import  {useState} from 'react'

// 🐶 Rend ce composant statefull en ajoutant un state email
const longFunction = () => {
  
  console.log('🚀 ~ longFunction ~ localStorage:', localStorage)
  return window.localStorage.getItem('email')
}
function Login({initialEmail}) {
  // ⛏️ supprime la variable email et replace par un hook useState.
  const [email,setEmail] = useState(longFunction)
  const [error,setError] = useState(null)

  const handleChange = event => {
    // 🐶 Récupère la valeur du champ input avec event.target.value et met à jour l'email
    const email = event.target.value
    setEmail(email)
    email.includes('@')? setError(false):setError(true)
    window.localStorage.setItem('email',email)
    
  }

  return (
    <div>
      <div>
        <label>Entrez votre email : </label>
        <input value={email} placeholder={initialEmail} onChange={handleChange} />
      </div>
      <div>Votre {email}</div>
      {error
      ?<div style={{color:'red'}}>Votre email est non valide</div>
      :<div>Votre email est valide</div>
      }
    </div>
  )
}

function App() {
  return <Login initialEmail="example@example.com" />
}

export default App

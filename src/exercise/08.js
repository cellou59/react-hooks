// useEffect HTTP Avancée
// http://localhost:3000/alone/exercise/08.js

import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {fetchMarvel, MarvelPersoView, MarvelSearchForm} from '../marvel'
import '../08-styles.css'

function MarvelDetails({marvelName}) {
  const [marvel, setMarvel] = React.useState()
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    console.log('React.useEffect', marvelName)
    if (!marvelName) {
      return
    }
    setMarvel(null)
    fetchMarvel(marvelName)
      .then(marvel => setMarvel(marvel))
      .catch(error => setError(error))
  }, [marvelName])

  if (error) {
    // this will be handled by an error boundary
    throw error
  }
  if (!marvelName) {
    return 'Entrer un nom de personnage Marvel'
  }
  if (!marvel) {
    return 'chargement ...'
  }
  return (
    <div>
      <MarvelPersoView marvel={marvel} />
    </div>
  )
}

function ErrorDisplay({error}) {
  return (
    <div style={{color: 'red'}}>
      Une erreur est survenue lors de la recherche de Marvel detail :{' '}
      <pre style={{color: 'grey'}}> Détail : {error.message}</pre>
    </div>
  )
}

function App() {
  const [marvelName, setMarvelName] = React.useState('')
  const handleSearch = name => {
    setMarvelName(name)
  }
  return (
    <div className="marvel-app">
      <MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />
      <div className="marvel-detail">
        <ErrorBoundary key={marvelName} FallbackComponent={ErrorDisplay}>
          <MarvelDetails marvelName={marvelName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}
export default App

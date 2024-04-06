// useRef et useEffect
// http://localhost:3000/alone/exercise/06.js

import React from 'react'
import calculate from '../logic/calculate'
import '../06-styles.css'

function Display({value}) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}
function Button({name, orange, wide, clickHandler}) {
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]
  return (
    <div className={className.join(' ').trim()}>
      <button onClick={() => clickHandler(name)}>{name}</button>
    </div>
  )
}

function ButtonPanel({clickHandler}) {
  const handleClick = buttonName => {
    clickHandler(buttonName)
  }

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  )
}

function App() {
  const [total, setTotal] = React.useState(null)
  const [next, setNext] = React.useState(null)
  const [operation, setOperation] = React.useState(null)

  const handleClick = buttonName => {
    const calculObject = calculate({total, next, operation}, buttonName)
    if(calculObject.next !== undefined){
      setNext(calculObject.next)
    }
    if(calculObject.operation !== undefined){
      setOperation(calculObject.operation)
    }

    if (calculObject.total !== undefined) {
      setTotal(calculObject.total)
    }
  }

  return (
    <div className="component-app">
      <Display value={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}
export default App

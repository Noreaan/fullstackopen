import { useState } from 'react'

const Display = ({ counter }) => <div>The current value is: {counter}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before', counter)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='Plus'
      />
      <Button
        handleClick={setToZero}
        text='Set to Zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />         
    </div>
  )
}

export default App
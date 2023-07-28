import { useState } from 'react'

const Title = ({ name }) => <h1>{ name }</h1>

const Button = ({handleClick, name}) => <button onClick={handleClick}>{ name }</button>

const Score = ({name, score}) => <div>{ name }: { score }</div>

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const percentage = all > 0 ? (good / all) * 100 : 0

  if (all > 0) {
    return (
      <div>
        <Title name="statistics"></Title>
  
        <Score name="Good" score={good}></Score>
        <Score name="Neutral" score={neutral}></Score>
        <Score name="Bad" score={bad}></Score>
        <Score name="All" score={all}></Score>
        <Score name="Avarage" score={average}></Score>
        <Score name="Positive" score={percentage + ' %'}></Score>
      </div>
    )
  }
  
  return (
    <p>
      No feedback given
    </p>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title name="give feedback"></Title>

      <Button name="good" handleClick={increaseGood}></Button>
      <Button name="neutral" handleClick={increaseNeutral}></Button>
      <Button name="bad" handleClick={increaseBad}></Button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App
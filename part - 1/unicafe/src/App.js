import { useState } from 'react'

const Header = ({ text }) => <h1>{ text }</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{ text }</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const total = good + neutral + bad
  const average = total > 0 ? (good - bad) / total : 0
  const percentage = total > 0 ? (good / total) * 100 : 0

  if (total === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  
  return (
    <div>
      <Header text="statistics"></Header>

      <table>
        <tbody>
          <StatisticLine text="Good" value={good}></StatisticLine>
          <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          <StatisticLine text="Bad" value={bad}></StatisticLine>
          <StatisticLine text="All" value={total}></StatisticLine>
          <StatisticLine text="Avarage" value={average}></StatisticLine>
          <StatisticLine text="Positive" value={percentage + ' %'}></StatisticLine>
        </tbody>
      </table>
    </div>
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
      <Header text="give feedback"></Header>

      <Button text="good" handleClick={increaseGood}></Button>
      <Button text="neutral" handleClick={increaseNeutral}></Button>
      <Button text="bad" handleClick={increaseBad}></Button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App
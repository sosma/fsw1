import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const data = [
      {
        name: 'hyvä',
         value: good
      },
      {
        name: 'neutraali',
         value: neutral
      },
      {
        name: 'huono',
         value: bad
      },
      {
        name: 'yhteensä',
         value: good + neutral + bad
      },
      {
        name: 'keskiarvo',
         value: (good - bad)/(good + neutral +  bad)
      },
      {
        name: 'positiivisia',
         value: 100*good/(good + neutral + bad) + "%"
      },
  ]

  return (
    <div>
    <h1> anna palautetta </h1>
    <Button function={setGood} unit={good} name={'hyvä'}/>
    <Button function={setNeutral} unit={neutral} name={'neutraali'}/>
    <Button function={setBad} unit={bad} name={'huono'}/>
    <h1> statistiikka </h1>
    <Statistics data = {data}/>
    </div>
  )
}

const Button = (props) => {
    return (
        <button onClick={() => props.function(props.unit + 1)}> {props.name} </button>
    )
}

const Statistics = (props) => {
  if (props.data[3].value === 0){
      return(
          <p> ei yhtään palautetta annettu </p>
      )
  }
  return (
      <table>
      <tbody>
      <Statistic name = {props.data[0].name} value = {props.data[0].value}/>
      <Statistic name = {props.data[1].name} value = {props.data[1].value}/>
      <Statistic name = {props.data[2].name} value = {props.data[2].value}/>
      <Statistic name = {props.data[3].name} value = {props.data[3].value}/>
      <Statistic name = {props.data[4].name} value = {props.data[4].value}/>
      <Statistic name = {props.data[5].name} value = {props.data[5].value}/>
      </tbody>
      </table>
  )
}

const Statistic = (props) => {
    return (
        <tr>
            <td>
            {props.name}
            </td>
            <td>
            {props.value}
            </td>
        </tr>
    )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name : 'Half Stack -sovelluskehitys',
        parts : [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
    }

  return (
    <div>
      <Header course = {course}/>
      <Content data = {course} />
      <Total data = {course}/>
    </div>
  )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    const data = props.data.parts
    return (
    <div>
           <Part data = {data[0]}/>
           <Part data = {data[1]}/>
           <Part data = {data[2]}/>
    </div>
  )
}

const Part = (props) => {
    return (
        <p>{props.data.name} {props.data.exercises}</p>
    )
}

const Total = (props) => {
    const data = props.data.parts
    return (
        <div>
            <p>yhteensä {data[0].exercises + data[1].exercises + data[2].exercises} tehtävää</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

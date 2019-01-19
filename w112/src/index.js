import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
    const vote = (number) => {
    var newPoints = null
        if (number===0){
            newPoints = {
                ...points,
                0: points[0] + 1
            }
        } else if (number===1){
            newPoints = {
                ...points,
                1: points[1] + 1
            }
        } else if (number===2){
            newPoints = {
                ...points,
                2: points[2] + 1
            }
        } else if (number===3){
            newPoints = {
                ...points,
                3: points[3] + 1
            }
        } else if (number===4){
            newPoints = {
                ...points,
                4: points[4] + 1
            }
        } else if (number===5){
            newPoints = {
                ...points,
                5: points[5] + 1
            }
        }
        setPoints(newPoints)

    }
    const [selected, setSelected] = useState(0)
    return (
    <div>
        <h1> Anecdote of the day </h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={() => vote(selected)}>vote</button>
        <button onClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))}> next anecdote </button>
        <MostVoted data = {points} anecdotes = {anecdotes}/>
    </div>
  )
}

const MostVoted = (props) => {
    var max = 0
    var point = 0
    for (var i = 0; i < 6; i++) {
        if (props.data[i] > max){
            max = props.data[i]
            point = i
        }
    }
    return (
        <div>
        <h1>Most voted anecdote</h1>
        <p>{anecdotes[point]}</p>
        <p>has {props.data[point]} votes</p>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

import React from 'react'
import {useEffect, useState} from 'react'

const App = () => {
  const [scores, setScores] = useState([]) // [15, 200, 150, ...]

  // Make a GET request for the things.
  useEffect(() => {
    fetch('/scores')
      .then(response => response.json())
      .then(obj => {
        // obj = {scores: [15, 200, 150, ...]}

        // Grab the array of scores from the object and set it in our local state.
        setScores(obj.scores)
      })
  }, [])


  return (
    <>
      <header className="pv5 bg-gold black-80">
        <h1 className="mt0 mb1 tc">Scores</h1>
      </header>
      <section>
        {scores.map((score, i) => {
          return <div key={i}>{score}</div>
        })}
      </section>
    </>
  )
}

export default App

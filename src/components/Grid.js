import React from 'react'
import Row from './Row'

export default function Grid({currentGuess, guesses, turn}) {
  // create a grid of 6 rows and 5 columns
  return (
   <div>
    {guesses.map((g, i) => {
        if(i === turn) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} />
        })}
   </div>
  )
}

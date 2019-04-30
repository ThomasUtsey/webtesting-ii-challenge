import React from 'react'

const Display = (props)=> {
  console.log(props.counts)
  return(
    
  <>
    <div>Strike:{props.counts.strike === 3 ?<h1>'OUT!!'</h1>:props.counts.strike}</div>
    <div>Balls{props.counts.ball === 4 ?<h1>'Walk!!'</h1>:props.counts.ball}</div>
    <div>Fouls{props.counts.foul}</div>

  </>

  )
}
export default Display;
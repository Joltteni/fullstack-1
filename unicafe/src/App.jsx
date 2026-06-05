import React, { useState } from 'react' 

  const Statistics = (props) => {
  if (props.clicks.good>0 || props.clicks.bad>0 || props.clicks.neutral>0){
  let totalClicks=props.clicks.good+props.clicks.bad+props.clicks.neutral
  return (
    <div>
      <h1>statistics</h1>
       <table>
       <tbody> 
       <StatisticLine text="good" value={props.clicks.good} />
       <StatisticLine text="neutral" value={props.clicks.neutral} />
       <StatisticLine text="bad" value={props.clicks.bad} />
       <StatisticLine text="all" value={totalClicks} />
       <StatisticLine text="average" value={(props.clicks.bad*-1+props.clicks.neutral*0+props.clicks.good)/totalClicks} />
       <StatisticLine text="positive" value={(props.clicks.good/totalClicks)*100+ " %"} />
       </tbody>
       </table>
    </div>
  )
  }
  else{
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

  const StatisticLine = (props) => {

     return (
        <tr><td>{props.text} {props.value}</td></tr>
    )
  }


 const Button = (props) => {
  if (props.feedback=="good")
  {
   return (
      <button onClick={props.func}>good</button>
    )
  }
    if (props.feedback=="neutral")
  {
   return (
      <button onClick={props.func}>neutral</button>
    )
  }
    if (props.feedback=="bad")
  {
   return (
      <button onClick={props.func}>bad</button>
    )
  }
 }
const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = { 
      good: clicks.good + 1, 
      neutral: clicks.neutral, 
      bad: clicks.bad,
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral + 1,
      bad: clicks.bad,
    }
    setClicks(newClicks)
  }
    const handleBadClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral,
      bad: clicks.bad + 1,
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button func={handleGoodClick} feedback="good"/>
        <Button func={handleNeutralClick} feedback="neutral"/>
        <Button func={handleBadClick} feedback="bad"/>
        <Statistics clicks={clicks}/>
      </div>
    </div>
  )
}

export default App
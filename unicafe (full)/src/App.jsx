import React, { useState } from 'react' 

  const Statistics = (props) => {
  if (props.clicks.total>0){
  return (
    <div>
       <h1>statistics</h1>
        <p>good {props.clicks.good}<br></br>
        neutral {props.clicks.neutral}<br></br>
        bad {props.clicks.bad}<br></br>
        all {props.clicks.total}<br></br>
        average {(props.clicks.bad*-1+props.clicks.neutral*0+props.clicks.good)/props.clicks.total}<br></br>
        positive {(props.clicks.good/props.clicks.total)*100} %<br></br></p>
    </div>
  )
  }
  else{
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}



const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, total:0
  })

  const handleGoodClick = () => {
    const newClicks = { 
      good: clicks.good + 1, 
      neutral: clicks.neutral, 
      bad: clicks.bad,
      total: clicks.total+1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral + 1,
      bad: clicks.bad,
      total: clicks.total+1
    }
    setClicks(newClicks)
  }
    const handleBadClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral,
      bad: clicks.bad + 1,
      total: clicks.total+1
    }
    setClicks(newClicks)
  }
    const Feedback = (props) => {
      //väliaikasesti tääl ehk
  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
    </div>
  )
  }

  return (
    <div>
      <div>
        <Feedback/>
        <Statistics clicks={clicks}/>
      </div>
    </div>
  )
}

export default App
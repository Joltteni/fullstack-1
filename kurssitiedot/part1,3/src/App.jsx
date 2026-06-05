const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
  <p>{props.part} {props.exercises}</p>
  )
}
const Content = (props) => {
  /*const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */
  return (
    <div>
    <Part part={props.name} exercises={props.exercise}/>

    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.amount}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} exercise={part1.exercises}/>
      <Content name={part2.name} exercise={part2.exercises}/>
      <Content name={part3.name} exercise={part3.exercises}/>
      <Total amount={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
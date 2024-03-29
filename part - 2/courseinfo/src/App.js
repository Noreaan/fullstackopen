import Course from "./components/Course"

const App = ({courses}) => {
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course}></Course>)}
    </div>
  )
}

export default App
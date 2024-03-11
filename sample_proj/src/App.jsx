
import Student from './components/Student'


function App() {

  return (
    <>
      <Student name="Nizy" age={30} isStudent={true}/>
      <Student name="Nandu" age={42} isStudent={false}/>
      <Student name="Ramana" age={50} isStudent={false}/>
      <Student name="Sudheer" age={27} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App

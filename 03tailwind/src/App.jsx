import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-500 rounded-md p-3">
      Hello world!
      </h1>
      <Card username='Ram'/>
      <Card username='Shyam' post='Senior web dev'/>
      <Card photu ="https://i1.sndcdn.com/artworks-gqOwbOYkipDd-0-t500x500.jpg" post='Janitor'/>
    </>
  )
}

export default App

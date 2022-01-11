import { hot } from 'react-hot-loader/root'
import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <h1 className='heading'>My React App</h1>
      <Button>Click Here</Button>
    </>
  )
}

export default hot(App)

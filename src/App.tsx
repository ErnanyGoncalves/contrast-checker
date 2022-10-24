import './App.scss'
import Button from './Components/Button/Button'
import Divider from './Components/Divider/Divider'
import EmptyMessage from './Components/EmptyMessage/EmptyMessage'
import Textarea from './Components/Textarea/Textarea'

const App = () => {
  const handleSubmit = () => {
    
  }
  return (
    <div className='app'>
      <h1>Contrast checker</h1>
      <form>
        <label htmlFor="colors">Colors</label>
        <Textarea />
        <Button />
      </form>
    <Divider />
    <EmptyMessage />
    </div>
  )
}

export default App

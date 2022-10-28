import { FormEvent, useState } from 'react'
import './App.scss'
import Button from './Components/Button/Button'
import Divider from './Components/Divider/Divider'
import Results from './Components/Results/Results'
import EmptyMessage from './Components/EmptyMessage/EmptyMessage'
import Textarea from './Components/Textarea/Textarea'
import { createPairsOfColors, getResults, prepareArrayOfColors } from './contrastFunctions'

const App = () => {
  const [textareaValue,setTextareaValue] = useState("");
  const [listOfResults,setListOfResults] = useState([{}]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const colors = prepareArrayOfColors(textareaValue);
    const pairs = createPairsOfColors(colors);
    const results = getResults(pairs);
    setListOfResults(results)
    setTextareaValue("");
  }

  return (
    <div className='app'>
      <h1>Contrast checker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colors">Colors</label>
        <Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue} />
        <Button isDisabled={textareaValue===""} />
      </form>
    <Divider />
    {listOfResults.length === 1 &&<EmptyMessage />}
    {listOfResults.length > 1 && <Results results={listOfResults} />}
    </div>
  )
}

export default App

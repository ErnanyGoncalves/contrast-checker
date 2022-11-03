import { FormEvent, useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Divider from "./Components/Divider/Divider";
import Results from "./Components/Results/Results";
import Textarea from "./Components/Textarea/Textarea";
import {
  createPairsOfColors,
  getResults,
  prepareArrayOfColors,
} from "./contrastFunctions";
import Message from "./Components/Message/Message";

const App = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [results, setResults] = useState([{}]);
  const [isInputCorrect, setIsInputCorrect] = useState(true);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const taValue = textareaValue.replace(/(\t|\s|\n)*/g, "");

    if (taValue.match(/^(#[A-Fa-f0-9]{6},?)*$/g)) {
      setIsInputCorrect(true);
      const colors = prepareArrayOfColors(taValue);
      const pairs = createPairsOfColors(colors);
      setResults(getResults(pairs));
      setTextareaValue("");
    } else {
      setIsInputCorrect(false);
    }
  };

  return (
    <div className="app">
      <h1>Contrast checker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colors">Colors</label>
        <Textarea
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
        />
        <Button isDisabled={textareaValue === ""} />
      </form>
      {!isInputCorrect && (
        <Message error={"Something is not right at the input."} />
      )}
      <Divider />
      {(Object.keys(results[0]).length === 0 || results.length === 0) && (
        <Message msg={"No colors checked at the moment."} />
      )}

      {Object.keys(results[0]).length !== 0 && results.length > 0 && (
        <Results results={results} />
      )}
    </div>
  );
};

export default App;

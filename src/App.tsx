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
  const [listOfResults, setListOfResults] = useState([{ empty: true }]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const colors = prepareArrayOfColors(
      textareaValue.replace(/(\t|\s|\n)*/g, "")
    );
    const pairs = createPairsOfColors(colors);
    const results = getResults(pairs).filter(
      ({ tests }: any) => tests.aaNormal && tests.aaLarge
    );
    console.log(results);
    setListOfResults(results);
    setTextareaValue("");
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
      <Divider />
      {listOfResults.length === 1 && listOfResults[0].hasOwnProperty("empty") && (
        <Message msg={"No colors checked at the moment."} />
      )}
      {listOfResults.length === 0  && (
        <Message
          msg={"None of its colors met the specified accessibility criteria."}
        />
      )}

      {listOfResults.length > 0 && !listOfResults[0].hasOwnProperty("empty") && <Results results={listOfResults} />}
    </div>
  );
};

export default App;

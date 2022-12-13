import { FormEvent, useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Divider from "./Components/Divider/Divider";
import Results from "./Components/Results/Results";
import Textarea from "./Components/Textarea/Textarea";
import Message from "./Components/Message/Message";
import useContrastStore from "./hooks/useContrastStore";

const App = () => {
  const [textareaValue, setTextareaValue] = useState("");

  const results = useContrastStore((state: { results: any }) => state.results);
  const setResults = useContrastStore(
    (state: { setResults: any }) => state.setResults
  );

  const [isInputCorrect, setIsInputCorrect] = useState(true);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const taValue = textareaValue
      .trim()
      .replace(/[\n|;|,]/g, " ")
      .replace(/(\s\s+)/g, " ");

    if (taValue.match(/^(#[A-Fa-f0-9]{6}\s)(#[A-Fa-f0-9]{6}\s?)+$/g)) {
      setIsInputCorrect(true);
      setResults(taValue);
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
      {results.length === 0 && (
        <Message msg={"No colors checked at the moment."} />
      )}

      {results.length > 0 && <Results results={results} />}
    </div>
  );
};

export default App;

import React, { ChangeEvent } from 'react'
import "./Textarea.scss"

const Textarea = ({textareaValue,setTextareaValue}:any) => {
  const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(ev.target.value);
  };

  return (
    <textarea placeholder='#FFFFFF, #000000...' name="colors" id="colors" value={textareaValue} onChange={handleChange} />
  )
}

export default Textarea
import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  function handleTextChange(event){
    setText(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if (text.trim() === '') {
      return;
    }
    const newThought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(newThought);
    setText('');
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

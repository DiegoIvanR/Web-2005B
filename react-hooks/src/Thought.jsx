import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };
  const timeRemaining = thought.expiresAt - Date.now();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => clearTimeout(timer);
  }, [thought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}

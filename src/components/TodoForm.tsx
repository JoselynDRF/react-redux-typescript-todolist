import React, { FormEvent, useRef } from 'react';

interface TodoFormProps {
  addItem(text: string): void,
}

export default ({ addItem }: TodoFormProps) => {
  const inputText = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (inputText && inputText.current && inputText.current.value !== '') {
      addItem(inputText.current.value);
      inputText.current.value = '';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={inputText} placeholder="What needs to be done?" />
      <button type="submit">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

import React, { useRef } from 'react';
import { Item } from '../types';

interface TodoItemProps {
  item: Item,
  toggleItem(id: number): void,
  toggleEditItem(id: number): void,
  updateItem(id: number, text: string): void,
  removeItem(id: number): void
}

export default ({
  item: {
    id, text, editing, complete,
  },
  toggleItem,
  toggleEditItem,
  updateItem,
  removeItem,
}: TodoItemProps) => {
  const inputText = useRef<HTMLInputElement>(null);

  const acceptEdit = (itemID: number) => {
    if (inputText && inputText.current) {
      updateItem(itemID, inputText.current.value);
      toggleEditItem(itemID);
    }
  };

  return (
    <li>
      {editing
        ? (
          <>
            <input
              className="edit-item"
              ref={inputText}
              defaultValue={text}
            />
            <div>
              <span className="icon" role="presentation" onClick={() => acceptEdit(id)}>
                <i className="fas fa-save" />
              </span>
              <span className="icon" role="presentation" onClick={() => toggleEditItem(id)}>
                <i className="fas fa-ban" />
              </span>
            </div>
          </>
        )
        : (
          <>
            <div className="check-item-container">
              <div
                onClick={() => toggleItem(id)}
                role="presentation"
                className={complete ? 'checkbox-item checked' : 'checkbox-item'}
              />
              <span>{complete ? <s>{text}</s> : text}</span>
            </div>
            <div>
              <span className="icon" role="presentation" onClick={() => toggleEditItem(id)}>
                <i className="fas fa-pencil-alt" />
              </span>
              <span className="icon" role="presentation" onClick={() => removeItem(id)}>
                <i className="fas fa-trash-alt" />
              </span>
            </div>
          </>
        )}
    </li>
  );
};

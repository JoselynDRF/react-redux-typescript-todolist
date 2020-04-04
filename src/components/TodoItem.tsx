import React from 'react';
import { Item } from '../types';

interface TodoItemProps {
  item: Item,
  toggleItem(id: number): void,
  removeItem(id: number): void
}

export default ({ item: { id, text, complete }, toggleItem, removeItem }: TodoItemProps) => (
  <li key={id}>
    <div className="check-item-container">
      <div
        onClick={() => toggleItem(id)}
        role="presentation"
        className={complete ? 'checkbox-item checked' : 'checkbox-item'}
      />
      <span>{complete ? <s>{text}</s> : text}</span>
    </div>

    <div>
      <span className="icon" role="presentation" onClick={() => toggleItem(id)}>
        <i className="fas fa-pencil-alt" />
      </span>
      <span className="icon" role="presentation" onClick={() => removeItem(id)}>
        <i className="fas fa-trash-alt" />
      </span>
    </div>
  </li>
);

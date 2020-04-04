import React from 'react';
import { Item } from '../types';

interface TodoItemProps {
  item: Item,
  toggleItem(id: number): void,
  removeItem(id: number): void
}

export default ({ item, toggleItem, removeItem }: TodoItemProps) => (
  <li key={item.id}>
    <div className="check-item-container">
      <div
        onClick={() => toggleItem(item.id)}
        role="presentation"
        className={item.complete ? 'checkbox-item checked' : 'checkbox-item'}
      />
      <span>{item.complete ? <s>{item.text}</s> : item.text}</span>
    </div>

    <div>
      <span className="icon" role="presentation" onClick={() => toggleItem(item.id)}>
        <i className="fas fa-pencil-alt" />
      </span>
      <span className="icon" role="presentation" onClick={() => removeItem(item.id)}>
        <i className="fas fa-trash-alt" />
      </span>
    </div>
  </li>
);

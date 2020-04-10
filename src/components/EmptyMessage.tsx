import React from 'react';

interface EmptyMessageProps {
  message: string
}

export default ({ message }: EmptyMessageProps) => (
  <div className="empty-list">
    <i className="fas fa-clipboard-list empty-icon" />
    <span>{message}</span>
  </div>
);

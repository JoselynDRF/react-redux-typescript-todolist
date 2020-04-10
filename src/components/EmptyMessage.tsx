import React from 'react';

interface MessageProps {
  message: string
}

export default ({ message }: MessageProps) => (
  <div className="empty-list">
    <i className="fas fa-clipboard-list empty-icon" />
    <span>{message}</span>
  </div>
);

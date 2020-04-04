import React from 'react';

interface HeaderProps {
  title: string,
}

export default ({ title }: HeaderProps) => (
  <div className="header">
    {title}
  </div>
);

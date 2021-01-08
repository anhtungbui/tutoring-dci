import React from 'react';
import Fun from './Fun';

export default function Header(props) {
  const { name, age } = props;
  return (
    <header>
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>
      <Fun />
    </header>
  );
}

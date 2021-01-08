import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Fun from './components/Fun';

export default function App() {
  return (
    <>
      <Fun />
      <Header name="Nisha" age="36" />
      <Header name="Glenn" />
      <Header name="Samuel" />
      <Main />
    </>
  );
}

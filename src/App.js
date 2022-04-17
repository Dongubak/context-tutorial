import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox';
import ColorContext from './color';
import React from 'react';
import { ColorProvider } from './color';
import SelectColors from './SelectColors';
import DataContext from './Data';
import Naming from './Naming';
function App() {
  const value = {
    state: {
      name: 'kim',
      age: 22,
    },
    actions: {
      setName() {

      },
      setAge() {

      }
    }
  };
  return (
    <div className="App">
      <DataContext.Provider value={value}>
        <Naming></Naming>
      </DataContext.Provider>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Person name="Max" age="29" />
       <Person name="Manu" age="27">My hobbies: racing</Person>
       <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;

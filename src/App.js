import React, { Component } from 'react';
import logo from './logo.svg';
import user from './user.svg';
import './App.css';
import * as Nav from './Components'

const dropdownItems = [
  {name: 'My profile', countable: false},
  {name: 'My projects', count: 23, countable: true},
  {name: 'notifications', count: 23, countable: true},
  {name: 'tasks', count: 23, countable: true},
  {name: 'help', countable: false},
  {name: 'logout', countable: false},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav.Bar>
          <Nav.Title>Company Name</Nav.Title>
          <Nav.List>
            <Nav.ListItem>Dashboard</Nav.ListItem>
            <Nav.ListItem>Projects</Nav.ListItem>
            <Nav.ListItem>Team</Nav.ListItem>
            <Nav.ListItem>Company</Nav.ListItem>
          </Nav.List>
          <Nav.Profile>
            <Nav.DropdownMenu items={dropdownItems}>
              <img src={user} alt="profile" />
            </Nav.DropdownMenu>
          </Nav.Profile>
        </Nav.Bar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

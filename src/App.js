import React, { Component } from 'react';
import UsersList from './components/UsersList';
import './App.css';
import AddUserForm from "./components/AddUserForm";
import UserFilter from "./components/UserFilter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList/>
        <UserFilter />
        <AddUserForm />
      </div>
    );
  }
}

export default App;

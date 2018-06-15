import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import { JokesList, Login, Register } from "./components";

class App extends Component {

  handleSignout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem('jwt') ? (
          <div>
            <button onClick={this.handleSignout}>Sign Out</button>
          </div>
        ):(null)}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route pate="/jokes" component={JokesList}/>
      </div>
    );
  }
}

export default withRouter(App);

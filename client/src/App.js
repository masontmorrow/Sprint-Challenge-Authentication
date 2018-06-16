import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import { JokesList, Login, Register, Navigation } from "./components";

class App extends Component {

  handleSignout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Navigation handleSignout={this.handleSignout}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/jokes" component={JokesList}/>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Redirect } from "react-router-dom";
import { JokesList, Login, Register, Navigation } from "./components";

class App extends Component {

  handleSignout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        {localStorage.getItem('jwt') ? (
          <div>
            <button onClick={this.handleSignout}>Sign Out</button>
          </div>
        ):(
          <Route exact path="/" render={() => <Redirect to="/login"/>}/>
        )}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/jokes" component={JokesList}/>
      </div>
    );
  }
}

export default withRouter(App);

import React from "react";
import { Route, Redirect } from "react-router-dom";

const Navigation = props => {
    return(
        <div className="nav-container">
            {localStorage.getItem('jwt') ? (
                <nav className="nav-main">
                  <h3>Dad Jokes Generator</h3>
                  <button className="signout" onClick={props.handleSignout}>Sign Out</button>
                </nav>
            ):(
                <Route exact path="/" render={() => <Redirect to="/login"/>}/>
            )}
        </div>
    );
}

export default Navigation;
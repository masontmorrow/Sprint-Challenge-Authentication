import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Register extends React.Component {
    state = {
        username: "",
        password: "",
        message: false,
        usernameError: false,
        passwordError: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.username) this.setState({usernameError: false});
        axios.post('http://localhost:5000/api/users', this.state)
            .then(response => {
                if (response.data.error) {
                    if (response.data.error.includes('username')) this.setState({ usernameError: response.data.error});
                    if (response.data.error.includes('Password')) this.setState({ passwordError: response.data.error});
                } else {
                    this.setState({ 
                        message: `Success! Redirecting...`,
                        passwordError: false
                    });
                    setTimeout(() => {
                        this.props.history.push('/login');
                    }, 2000);
                }
            })
            .catch(err => {
                this.setState({ message: err.message });
            });
    }

    render() {
        const { username, password, message, usernameError, passwordError } = this.state;
        return (
            <div>
                <h3>Welcome to Dad Jokes</h3>
                <div className="form-container">
                    <form>
                        {message ? (<div className="message success"><p>{message}</p></div>) : (null)}
                        <h3>Register</h3>
                        <input type="text" name="username" value={username} placeholder="username" onChange=    {this.handleChange}/>
                        {usernameError ? (<div className="message"><p>{usernameError}</p></div>) : (null)}
                        <input type="password" name="password" value={password} placeholder="password" onChange=    {this.handleChange}/>
                        {passwordError ? (<div className="message"><p>{passwordError}</p></div>) : (null)}
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                        <Link to="/login" className="login-link">Log In</Link>
                </div>
            </div>
        );
    }
}

export default Register;
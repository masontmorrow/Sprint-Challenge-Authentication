import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
    state = {
        username: "me1",
        password: "1234",
        message: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/jokes');
            })
            .catch(err => { 
                if (err.message.includes('422')) err.message = 'Invalid credentials. Please try again.'
                this.setState({ message: err.message })
            });
    }

    render() {
        const { username, password, message } = this.state;
        return (
            <div>
                <h3>Welcome to Dad Jokes</h3>
                <div className="form-container">
                    <form>
                        {message ? (<div className="message"><p>{message}</p></div>) : (null)}
                    <h3>Login</h3>
                        <input type="text" name="username" value={username} placeholder="username" onChange=    {this.handleChange}/>
                        <input type="password" name="password" value={password} placeholder="password" onChange=    {this.handleChange}/>
                        <button onClick={this.handleSubmit}>Log In</button>
                    </form>
                    <Link to="/register" className="register-link">Register</Link>
                </div>
            </div>
        );
    }
}

export default Login;
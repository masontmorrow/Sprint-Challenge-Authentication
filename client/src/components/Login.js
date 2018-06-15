import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        username: "me1",
        password: "1234",
        error: false
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
                this.setState({ error: err.message })
            });
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <div>
                <form>
                    <input type="text" name="username" value={username} placeholder="username" onChange={this.handleChange}/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                {error ? (
                    <div>
                        <p>Please Log In</p>
                    </div>
                ):(null)}
            </div>
        );
    }
}

export default Login;
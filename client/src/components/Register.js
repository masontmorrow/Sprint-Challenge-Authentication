import React from "react";
import axios from "axios";

class Register extends React.Component {
    state = {
        username: "",
        password: "",
        error: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', this.state)
            .then(response => {
                this.props.history.push('/login');
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <div>
                <form>
                    <input type="text" name="username" value={username} placeholder="username" onChange={this.handleChange}/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                {error ? (
                    <div>
                        <h4>{error}</h4>
                    </div>
                ):(null)}
            </div>
        );
    }
}

export default Register;
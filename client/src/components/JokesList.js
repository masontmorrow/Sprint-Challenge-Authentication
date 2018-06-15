import React from "react";
import axios from "axios";

class JokesList extends React.Component {
    state = {
        jokes: [],
        error: false
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            this.setState({ error: `Please log in. Redirecting...`});
            setTimeout(() => {
                this.props.history.push('/login');
            }, 2400);
        } else {
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.get('http://localhost:5000/api/jokes', requestOptions)
            .then(response => this.setState({ jokes: response.data }))
            .catch(err => this.setState({ error: err.message }));
        }      
    }

    render() {
        const { error } = this.state;
        return (
            <div className="joke-list">
                {this.state.jokes.map(joke => {
                    return (
                        <div key={joke.id} className="joke-card">
                            <h5>{joke.setup}</h5>
                            <h3>{joke.punchline}</h3>
                        </div>
                    );
                })}
                {error ? (
                    <div>
                        <h4>{error}</h4>
                    </div>
                ):(null)}
            </div>
        );
    }
}

export default JokesList;
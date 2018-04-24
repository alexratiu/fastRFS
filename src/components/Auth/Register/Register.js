import React, { Component } from 'react';
import styles from './Register.scss';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    setEmail = (email) => {
        this.setState({ email: email.target.value });
    };

    setPassword = (password) => {
        this.setState({ password: password.target.value });
    };

    register = () => {
        this.props.registerUser({
            email: this.state.email,
            password: this.state.password,
            updatedAt: new Date(),
            createdAt: new Date(),
        })
    }

    render() {
        return (
            <div className={styles.Register_wrapper}>
                <h1>Register</h1>
                <input type="email" onChange={this.setEmail} />
                <input type="email" onChange={this.setPassword} />
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
};

export default Register;

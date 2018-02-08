import React from 'react';
import PropTypes from 'prop-types';

import AuthApi from '../../../api/authApi';

export default class ForgotPasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        AuthApi.forgotPassword(this.state.email).then( response => {
            window.location.href = this.props.redirectUrl;
        }).catch( response => {
            console.log(response);
        });
    }

    renderInputs() {
        return (
            <div>
                Email:&nbsp;<input type="email" name="email" onChange={this.handleChange.bind(this)} />
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderInputs()}
                <input type="submit" style={{visibility: 'hidden'}} /><br />

                <button type="submit" onClick={this.handleSubmit.bind(this)}>Reset Password</button>
            </form>
        );
    }
}

ForgotPasswordForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
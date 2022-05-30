import React from 'react';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input type='text'
                            required
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type='text'
                            required
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Create User'
                            className='btn btn-primary'
                            />
                    </div>
                </form>
            </div>
        )
    }
}
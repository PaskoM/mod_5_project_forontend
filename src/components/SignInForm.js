import React from 'react'
import API from "../API"

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signIn(this.state)
            .then(json => { console.log(json); this.props.signIn(json.username, json.token, json.user, json.id)})
        // this.props.history.push('/home')
    }

    render() {
        return (
            <div class="content-wrap">
    <div class="login-section">
        <form onSubmit={this.handleSubmit} class="form" id="setting">
            <div class="text-heading"><h1 class="thick">Account Login</h1></div>
            <div class="stt-form">
                <div class="form-group">
                    <div class="col-xs-12">
                        <label for="email">Username</label>
                        <input type="text" class="form-control" name="username" onChange={this.handleChange} id="email" placeholder="Username"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12">
                        <label for="new_password">Password</label>
                         <input onChange={this.handleChange} type="password" class="form-control" name="password" id="password" placeholder="Password" title="enter your password."/> 
                    </div>
                </div>
            </div>
                                
            <div class="submit-btn">
                <div class="col-12">
                    <input class="btn btn-success" type="submit" value="Sign In"/>
                </div>
            </div>
                                    
        </form>
                                
        <div class="row-forgot">
            <a class="forgotr" href="/sign-up">Don't have an Account ? Sign Up</a>
                                </div>
                                
    </div>
</div>
        )
    }
}

export default SignInForm
import React from 'react'
import API from "../API"
import {Link} from "react-router-dom"

class SignUpForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
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
        API.signUp(this.state)
            .then(json => { console.log(json); this.props.signIn(json.user.username, json.token, json.user, json.user.id)})
        this.props.history.push('/fridge-items')
    }

    render() {
                 return (
            <div class="content-wrap">
    <div class="login-section">
        <form onSubmit={this.handleSubmit} class="form" id="setting">
            < div class = "text-heading" > <h1 class = "thick"> Sign Up </h1></div>
            <div class="stt-form">
                <div class="form-group">
                    <div class="col-xs-12">
                        <label for="email">Username</label>
                        <input type="text" class="form-control" name="username" onChange={this.handleChange} id="email" placeholder="Username"/>
                    </div>
                </div>
                                <div class="form-group">
                    <div class="col-xs-12">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" onChange={this.handleChange} id="email" placeholder="Email"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12">
                        <label for="new_password">Password</label>
                         <input onChange={this.handleChange} type="password" class="form-control" name="password" id="password" placeholder="Password" title="enter your password."/> 
                    </div>
                </div>
            </div>
                                
            < div class = "submit-btn" >
                 <div class="col-12">
                    <input class="btn btn-success" type="submit" value="Sign Up"/>
                </div>
</div>
                                    
                                    
        </form>
                                
        <div class="row-forgot">
            <Link to="/sign-in">Already registered? Sign In</Link>
            </div>
                                
    </div>
</div>
        )
    }
} 

export default SignUpForm
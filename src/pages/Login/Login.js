import React, { Component } from 'react'
import NormalLoginForm from '../../components/LoginForm/Login-form.js'
import './Login.css'

export default class Login extends Component {
    constructor(params){
        super(params);
    }
    
    render() {
        return (
            <div className='login-box'>
                <NormalLoginForm></NormalLoginForm>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { HashRouter as Router} from 'react-router-dom'
import './LoginChoice.css'

export default class LoginChoice extends Component {
    render() {
        var ack = 0;
        var div;
        if(!ack){
            div = <div className='choices-box'>
                <Router>
                    <Button type='primary'> 
                        <Link to='/Login'>学生登陆</Link>
                    </Button>
                    <Button type='primary'>
                        <Link to='/Login'>教师登录</Link>
                    </Button>
                    <Button type='primary'>
                        <Link to='/Login'>教务员登录</Link>
                    </Button>
                </Router>
                </div>
        }else{
            div = <div>
                <Button>slidjfiej</Button>
            </div>
        }
        return (
            div
        )
    }
}

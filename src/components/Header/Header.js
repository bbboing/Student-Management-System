import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './Header.css'
import formatDate from './../../utils/formatDate'
import current from './../../current.js'

export default class Header extends Component {
    constructor(params){
        super(params);
        this.state={
            timer:'',
        }
    }

    componentWillMount(){
        setInterval( ()=>{
            let now = new Date();
            let timer = formatDate(now);
            this.setState({
                timer
            })
        },1000)
    }

    logout = ()=>{
        localStorage.setItem('ID','')
        localStorage.setItem('name','')
        localStorage.setItem('Identity','')
    }

    render() {
        return (
            <div>
                <Row className = 'header-top'>
                    <span className='header-time'>
                        {this.state.timer}
                    </span>
                    <span className='header-name'>
                        欢迎，{localStorage.getItem('name')}
                        <a  className='logout' href='/#/Login' onClick={()=>{
                            this.logout()
                        }}>退出</a>
                    </span>
                </Row>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'
import './Homepage.css'
import NavLeft from '../../components/NavLeft/NavLeft.js'
import Header from '../../components/Header/Header.js'

export default class StudenPage extends Component {
    constructor(params){
        super(params)
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={4} className='navLeft'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={20} className='navRight'>
                        <Header></Header>
                        <div className='content'>
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

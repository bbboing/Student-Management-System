import React, { Component } from 'react'
import './PoorApply.css'
import NormalApplyForm from './../../components/ApplyForm1/ApplyForm1'

export default class PoorApply extends Component {
   
    render() {
        return (
            <div className='poor-content'>
                <NormalApplyForm></NormalApplyForm>            
            </div>
        )
    }
}

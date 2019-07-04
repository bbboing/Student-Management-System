import React, { Component } from 'react'
import './LeaveApply.css'
import LeaveApplyForm from './../../components/LeaveApplyForm/LeaveApplyForm'

export default class LeaveApply extends Component {
   
    render() {
        return (
            <div className='leave-content'>    
                <LeaveApplyForm></LeaveApplyForm>     
            </div>
        )
    }
}

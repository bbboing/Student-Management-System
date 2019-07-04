import React, { Component } from 'react'
import './HolidayApply.css'
import HolidayApplyForm from './../../components/HolidayApplyForm/HolidayApplyForm'

export default class HolidayApply extends Component {
    render() {
        return (
            <div className='holiday-content'>   
                <HolidayApplyForm></HolidayApplyForm>      
            </div>
        )
    }
}

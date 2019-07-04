import React, { Component } from 'react'
import './ReissueApply.css'
import ReissueApplyForm from './../../components/ReissueApplyForm/ReissueApplyForm'

export default class ReissueApply extends Component {
   
    render() {
        return (
            <div className='reissue-content'>  
                <ReissueApplyForm></ReissueApplyForm>      
            </div>
        )
    }
}

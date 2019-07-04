import React, { Component } from 'react'
import axios from 'axios'
import { Table, Card } from 'antd'

export default class Notice extends Component {
    constructor(params){
        super(params);
        this.state={
            FailNum:0,
            Exam:[]
        }
    }
    createExam = ()=>{
        
    }
    componentWillMount = ()=>{
        var data = {
            ID: localStorage.getItem('ID')
        }
        axios.post('http://127.0.0.1:8081/searchFailedSubject',data)
        .then(res=>{
            if(res.data.result=='succeed'){
                this.setState({
                    FailNum: res.data.Info.length
                })
            }
        })
        axios.post('http://127.0.0.1:8081/search_examInfo',data)
        .then(res=>{
            if(res.data.result=='succeed'){
                this.setState({
                    Exam:res.data.Info
                })
            }
        })
    }

    render() {
        var identity = localStorage.getItem('Identity')
        if(identity=='1'){
            if(this.state.FailNum>3){
                var div = (<div>
                    <Card title="学业预警" extra={<a href="/searchForStu/gradeInfo">More</a>} style={{ width: 300 }}>
                        <p>同学你好，</p>
                        <p>你的挂科数目已超三科，请留意</p>
                        <p>详情请看具体成绩页面</p>
                    </Card>
                </div>)
            }else{
                var div = (<div>
                    <Card></Card>
                </div>)
            }
            
        }else{
            var div=(<div></div>)
        }
        return div 
    }
}

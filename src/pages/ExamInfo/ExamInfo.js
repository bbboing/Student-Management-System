import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class ExamInfo extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[]
        }
    }
    componentWillMount = ()=>{
        var userId = localStorage.getItem('ID')
        var data = {
            ID: userId
        }
        axios.post('http://127.0.0.1:8081/search_examInfo',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无考试信息！')
            }
        })
    }

    createTHead = ()=>{
        const colums = [{
            title:'课程',
            dataIndex: 'Subject',
            key: 'Subject'
        },{
            title:'考试时间',
            dataIndex:'ExamTime',
            key:'ExamTime'
        },{
            title:'监考老师',
            dataIndex:'ExamTeacher',
            key:'ExamTeacher'
        },{
            title:'教室',
            dataIndex:'ExamClass',
            key:'Classroom'
        },{
            title:'考试状态',
            dataIndex:'Flag',
            key:'Flag'
        }];
        return colums;
    }
    render() {
        let columns = this.createTHead();
        let dataSource = this.state.Info;
        return (
            <div>
                <Table dataSource={dataSource} columns={columns}></Table>
            </div>
        )
    }
}

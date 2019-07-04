import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class PersonalInfo extends Component {
    constructor(params){
        super(params);
        this.state={
            users:[]
        }
    }
    componentWillMount = ()=>{
        var userId = localStorage.getItem('ID')
        var data = {
            ID: userId
        }
        axios.post('http://127.0.0.1:8081/personalInfo',data)
        .then(res=>{
            console.log(res.data.Info)
            this.setState({
                users: res.data.Info
            })
        })
    }

    createTHead1 = ()=>{
        const colums = [{
            title:'账号',
            dataIndex: 'ID',
            key: 'ID'
        },{
            title:'姓名',
            dataIndex:'Name',
            key:'NAME'
        },{
            title:'性别',
            dataIndex:'Sex',
            key:'SEX'
        },{
            title:'住址',
            dataIndex:'Address',
            key:'ADDRESS'
        },{
            title:'联系电话',
            dataIndex:'Tel',
            key:'TEL'
        },{
            title:'学籍所在地',
            dataIndex:'StudyAddress',
            key:'StudyAddress'
        }];
        return colums;
    }
    
    createTHead2= ()=>{
        const colums=[
            {
                title:'学院',
                dataIndex:'Institute',
                key:'INSTITUTE'
            },{
                title:'专业',
                dataIndex:'Major',
                key:'MAJOR'
            },{
                title:'年级',
                dataIndex:'Grade',
                key:'GRADE'
            },,{
                title:'健康状况',
                dataIndex:'Healthy',
                key:'HEALTHY'
            },{
                title:'获奖情况',
                dataIndex:'Reward',
                key:'REWARD'
            },{
                title:'处分情况',
                dataIndex:'Punishment',
                key:'Punishment'
            }
        ]
        return colums;
    }
    render() {
        let columns1 = this.createTHead1();
        let columns2 = this.createTHead2();
        let dataSource = this.state.users;
        return (
            <div>
                <Table dataSource={dataSource} columns={columns1}></Table>
                <Table dataSource={dataSource} columns={columns2}></Table>
            </div>
        )
    }
}

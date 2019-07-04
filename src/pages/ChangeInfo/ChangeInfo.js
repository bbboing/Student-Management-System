import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'
import ChangeInfoForm from './../../components/ChangeInfoForm/ChangeInfoForm'

export default class ChangeInfo extends Component {
    constructor(params){
        super(params);
        this.state={
            users:[],
            grant:''
        }
    }
    componentWillMount = ()=>{
        var data = {
            ID: localStorage.getItem('ID')
        }
        console.log(data)
        axios.post('http://127.0.0.1:8081/personalInfo',data)
        .then(res=>{
            this.setState({
                users: res.data.Info
            })
        })
        axios.post('http://127.0.0.1:8081/checkPower',data)
        .then(res=>{
            this.setState(()=>{
                this.setState({
                    grant: res.data.result
                })
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
        // var power = 'ungranted'
        // console.log(this.state.grant)
        var div=<div></div>
        if(this.state.grant=='granted'){
            div = (<div>
                <Table dataSource={dataSource} columns={columns1}></Table>
                <Table dataSource={dataSource} columns={columns2}></Table>
                <ChangeInfoForm></ChangeInfoForm>
            </div>)
        }else if(this.state.grant=='ungranted'){
            div=(<div>无法访问</div>)
        }
        return div 
    }
}

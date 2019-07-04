import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class StuInfo extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[]
        }
    }
    componentWillMount = ()=>{
        var stuID = localStorage.getItem('stuID')
        localStorage.setItem('stuID','')
        if(stuID!='undefined'){
            var data={
                ID:stuID
            }
            axios.post('http://127.0.0.1:8081/personalInfo',data)
            .then(res=>{
                console.log(res.data)
                this.setState({
                    Info: res.data.Info
                })
                if(res.data.result == 'failed'){
                    alert('暂无学生信息！')
                }
            })
        }else{
            axios.get('http://127.0.0.1:8081/stuInfo')
            .then(res=>{
                this.setState({
                    Info: res.data.Info
                })
                if(res.data.result == 'failed'){
                    alert('暂无成绩记录！')
                }
            })
        }
    }

    createTHead = ()=>{
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

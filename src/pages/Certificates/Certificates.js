import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'antd'

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
        axios.post('http://127.0.0.1:8081/personalInfo',data)
        .then(res=>{

            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无考试信息！')
            }
        })
    }

    print = ()=>{
        alert('无连接设备！')
    }
    createTHead = ()=>{
        const colums = [{
            title:'学号',
            dataIndex:'ID',
            key:'ID'
        },{
            title:'姓名',
            dataIndex:'Name',
            key:'Name'
        },{
            title:'性别',
            dataIndex:'Sex',
            key:'Sex'
        },{
            title:'学院',
            dataIndex:'Institute',
            key:'Institute'
        },{
            title:'打印',
            key: 'print',
            render: (text, record) => (
              <span>
                <Button type='primary' onClick={()=>{
                    this.print()
                }}>打印</Button>
              </span>
            )
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

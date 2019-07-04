import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class ApplyHistory extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
        }
    }
    componentWillMount = ()=>{
        var userId = localStorage.getItem('ID')
        var data = {
            ID: userId
        }
        axios.post('http://127.0.0.1:8081/applyHistory',data)
        .then(res=>{
            if(res.data.result =='succeed'){
                this.setState({
                Info: res.data.Info
                })
            }else{
                alert('无审核信息！')
            }
            
        })
    }

    createTHead = ()=>{
        const colums = [{
            title:'申请人',
            dataIndex: 'Name',
            key: 'Name'
        },{
            title:'申请类型',
            dataIndex:'Type',
            key:'Type'
        },{
            title:'申请时间',
            dataIndex:'Time',
            key:'Time'
        },{
            title:'申请结果',
            dataIndex:'Result',
            key:'Result'
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

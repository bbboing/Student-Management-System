import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'antd'

export default class Detail extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
            ID:''
        }
    }
    componentWillMount = ()=>{
        var data = {
            ID: localStorage.getItem('ID')
        }
        axios.post('http://127.0.0.1:8081/get_applyDetail',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无申请记录！')
            }
        })
    }

    approve = (record,option)=>{
        var data={
            Type: record.Type,
            ID:record.ID,
            option:option
        }
        console.log(data.Type)
        axios.post('http://127.0.0.1:8081/approveApply',data)
        .then(res=>{
            if(res.data.result == 'failed'){
                alert("审核失败！")
            }else if(res.data.result == 'succeed'){
                alert('审核成功')
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
        },{
            title: '同意',
            key: 'operation',
            render: (text, record) => (
              <span>
                <Button type='primary' onClick={()=>{
                    this.approve(record,'审核通过')
                }}>通过</Button>
              </span>
            )
          },{
            title: '驳回',
            key: 'operation',
            render: (text, record) => (
              <span>
                <Button type='primary' onClick={()=>{
                    
                    this.approve(record,'审核未通过')
                }}>驳回</Button>
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

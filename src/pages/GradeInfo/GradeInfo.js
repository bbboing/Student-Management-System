import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class SelectSubInfo extends Component {
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
        axios.post('http://127.0.0.1:8081/search_gradeInfo',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无成绩记录！')
            }
        })
    }

    createTHead = ()=>{
        const colums = [{
            title:'课程',
            dataIndex: 'Subject',
            key: 'Subject'
        },{
            title:'成绩',
            dataIndex:'Grade',
            key:'Grade'
        },{
            title:'结果',
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

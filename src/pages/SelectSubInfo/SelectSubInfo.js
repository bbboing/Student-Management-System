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
        var data = {
            ID: localStorage.getItem('ID')
        }
        axios.post('http://127.0.0.1:8081/search_selectSub',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无课程信息！')
            }
        })
    }

    createTHead = ()=>{
        const colums = [{
            title:'课程',
            dataIndex: 'Subject',
            key: 'Subject'
        },{
            title:'上课时间',
            dataIndex:'Time',
            key:'Time'
        },{
            title:'任课老师',
            dataIndex:'Teacher',
            key:'Teacher'
        },{
            title:'教室',
            dataIndex:'Classroom',
            key:'Classroom'
        },{
            title:'学分',
            dataIndex:'Credit',
            key:'Credit'
        }];
        return colums;
    }
    render() {
        let columns = this.createTHead();
        let dataSource = this.state.Info;
        console.log(dataSource)
        return (
            <div>
                <Table dataSource={dataSource} columns={columns}></Table>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class WriteGradeFirst extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
        }
    }
    componentWillMount = ()=>{
        var data = {
            name: localStorage.getItem('name')
        }
        axios.post('http://127.0.0.1:8081/writeGradeFirst',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无授课记录！')
            }
        })
    }

    choose = (record)=>{
        localStorage.setItem('subject',record.Subject)
        var data={
            Subject: record.Subject
        }
        axios.post('http://127.0.0.1:8081/checkExamFlag',data)
        .then(res=>{
            console.log(res.data.Info)
            if(res.data.Info[0]=='未开始'){
                alert('考试未开始！')
                return 0
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
            title: '选择',
            key: 'operation',
            render: (text, record) => (
              <span>
                <Button type='primary' onClick={()=>{
                    this.choose(record)
                }}>
                    <Link to='/WriteGradeSecond'>录入</Link>
                </Button>
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

import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import { Table } from 'antd'
import formatDate from './../../utils/formatDate'

export default class WriteGradeSecond extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[]
        }
    }
    componentWillMount = ()=>{
        var data={
            subject: localStorage.getItem('subject')
        }
        axios.post('http://127.0.0.1:8081/searchWriteGrade',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
        })
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
            title:'课程',
            dataIndex:'Subject',
            key:'Subject'
        },{
            title: '成绩',
            key: 'Grade',
            render: (text, record) => (
              <span>
                <Input className='grade'></Input>
              </span>
            )
          },{
            title: '录入',
            key: 'operation',
            render: (text, record,rowkey) => (
              <span>
                <Button type='primary' onClick={()=>{
                    this.write(record,text,rowkey)
                }}>录入
                </Button>
              </span>
            )
          }];
        return colums;
    }
    write = (record,text,rowkey)=>{
        console.log(document.getElementsByClassName('grade'))
        var list = document.getElementsByClassName('grade')
        var Grade = list[rowkey].value
        var Flag = Grade<60 ? '不及格': '及格'
        let now = new Date();
        let timer = formatDate(now);
        if(!Grade){
            alert('成绩不能为空！')
            return 0
        }
        if(!(0<=Grade&&Grade<=100)){
            alert('请输入0-100以内的数字！')
            return 0
        }
        var data={
            ID: record.ID,
            Subject: record.Subject,
            Grade: Grade,
            Flag: Flag,
            RecordPerson: localStorage.getItem('ID'),
            Timer: timer
        }
        axios.post('http://127.0.0.1:8081/writeGrade',data)
        .then(res=>{
            if(res.data.result=='repeat'){
                alert('该数据已存在')
            }else{
                alert('录入成功')
            }
        })
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

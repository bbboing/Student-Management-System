import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import { Table } from 'antd'
import formatDate from './../../utils/formatDate'

export default class ChangeStuGrade extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
            result:''
        }
    }
    componentWillMount = ()=>{
        var data={
            ID:localStorage.getItem('searchID'),
            subject: localStorage.getItem('searchSubject')
        }
        var check={
            Name: localStorage.getItem('name'),
            Subject: localStorage.getItem('searchSubject')
        }
        axios.post('http://127.0.0.1:8081/searchStuGradeBySub',data)
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
        })
        axios.post('http://127.0.0.1:8081/checkTeacherSubject',check)
        .then(res=>{
            this.setState({
                result:res.data.result
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
            title:'成绩',
            dataIndex:'Grade',
            key:'Grade'
        },{
            title: '修改成绩',
            key: 'newGrade',
            render: (text, record) => (
              <span>
                <Input className='newGrade'></Input>
              </span>
            )
          },{
            title: '修改',
            key: 'operation',
            render: (text, record,rowkey) => (
              <span>
                <Button type='primary' onClick={()=>{
                    this.write(record,text,rowkey)
                }}>修改
                </Button>
              </span>
            )
          }];
        return colums;
    }
    write = (record,text,rowkey)=>{
        if(this.state.result=='failed'){
            alert('无权限修改该课程成绩！')
            return 0
        }
        var list = document.getElementsByClassName('newGrade')
        var Grade = list[rowkey].value
        var Flag = Grade<60 ? '不及格':'及格'
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
        axios.post('http://127.0.0.1:8081/changeGrade',data)
        .then(res=>{
            alert('修改成功')
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

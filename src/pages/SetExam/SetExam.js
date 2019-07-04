import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import { Table } from 'antd'

export default class SetExam extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[{}]
        }
    }

    createTHead = ()=>{

        const colums = [{
            title: '课程',
            key: 'subject',
            render: (text, record) => (
              <span>
                <Input id='subject'></Input>
              </span>
            )
          },{
            title: '教室',
            key: 'classroom',
            render: (text, record,rowkey) => (
              <span>
                <Input id='class'></Input>
              </span>
            )
          },{
            title: '时间',
            key: 'time',
            render: (text, record,rowkey) => (
              <span>
                <Input id='time'></Input> 
              </span>
            )
          },{
            title: '监考老师',
            key: 'teacher',
            render: (text, record,rowkey) => (
              <span>
                <Input id='teacher'></Input> 
              </span>
            )
          },{
            title: '安排',
            key: 'arrange',
            render: (text, record,rowkey) => (
              <span>
                <Button type='primary' className='write' onClick={()=>{
                    this.write(record,text,rowkey)
                }}>录入
                </Button>
              </span>
            )
          }];
        return colums;
    }
    write = (record,text,rowkey)=>{
      var ExamSubject = document.getElementById('subject').value
      var ExamClass = document.getElementById('class').value
      var ExamTime = document.getElementById('time').value
      var ExamTeacher = document.getElementById('teacher').value
      if(!ExamSubject||!ExamClass||!ExamTime||!ExamTeacher){
        alert('信息不能为空')
        return 0
      }
      var check = {
        Class: ExamClass,
        Time: ExamTime
      }
      axios.post('http://127.0.0.1:8081/checkRepeatExam',check)
      .then(res=>{
        if(res.data.result=='failed'){
          alert('考试地点与时间重复')
          return 0
        }
      })
      var data = {
          ExamSubject: ExamSubject,
          ExamClass: ExamClass,
          ExamTime: ExamTime,
          ExamTeacher: ExamTeacher,
          Flag: '未开始'
      }
      axios.post('http://127.0.0.1:8081/setExam',data)
      .then(res=>{
          if(res.data.result=='succeed'){
              alert('考试信息安排成功')
          }else if(res.data.result=='repeat'){
              alert('考试信息已存在')
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

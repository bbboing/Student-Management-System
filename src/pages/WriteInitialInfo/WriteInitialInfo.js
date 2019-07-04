import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import { Table } from 'antd'
import './WriteInitialInfo.css'

export default class WriteInitialInfo extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[{}]
        }
    }

    createTHead = ()=>{

        const colums = [{
            title: '学号',
            key: 'ID',
            render: (text, record) => (
              <span>
                <Input id='ID'></Input>
              </span>
            )
          },{
            title: '姓名',
            key: 'name',
            render: (text, record,rowkey) => (
              <span>
                <Input id='name'></Input>
              </span>
            )
          },{
            title: '性别',
            key: 'sex',
            render: (text, record,rowkey) => (
              <span>
                <Input id='sex'></Input> 
              </span>
            )
          },{
            title: '学院',
            key: 'institute',
            render: (text, record,rowkey) => (
              <span>
                <Input id='institute'></Input>
              </span>
            )
          },{
            title: '专业',
            key: 'major',
            render: (text, record,rowkey) => (
              <span>
                <Input id='major'></Input>
              </span>
            )
          },{
            title: '年级',
            key: 'grade',
            render: (text, record,rowkey) => (
              <span>
                <Input id='grade'></Input>
              </span>
            )
          },{
            title: '宿舍',
            key: 'address',
            render: (text, record,rowkey) => (
              <span>
                <Input id='address'></Input> 
              </span>
            )
          },{
            title: '录入',
            key: 'write',
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
        var ID = document.getElementById('ID').value
        var Name=document.getElementById('name').value
        var Institute=document.getElementById('institute').value
        var Major=document.getElementById('major').value
        var Address=document.getElementById('address').value
        var Sex=document.getElementById('sex').value
        var Grade=document.getElementById('grade').value
        let now = new Date();
        var year = now.getFullYear()+'级'
        if(!ID||!Name||!Institute||!Major||!Address||!Sex||!Grade){
          alert('信息不能为空')
          return 0
        }
        if(Grade!=year){
          alert('请输入正确学年')
          return 0
        }
        if(Sex!='男'&&Sex!='女'){
          alert('性别只能为男或女')
          return 0
        }
        var data = {
            ID: ID,
            Name: Name,
            Institute: Institute,
            Major: Major,
            Address: Address,
            Sex: Sex,
            Grade: Grade,
            Password: ID,
            Identity: '1'
        }
        axios.post('http://127.0.0.1:8081/writeInitialInfo',data)
        .then(res=>{
            if(res.data.result=='succeed'){
                alert('录入成功')
            }else if(res.data.result=='repeat'){
                alert('信息已存在')
            }
        })

        // axios.post('http://127.0.0.1:8081/changeGrade',data)
        // .then(res=>{
        //     alert('修改成功')
        // })
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

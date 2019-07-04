import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import { Table } from 'antd'

export default class WriteRPInfo extends Component {
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
            title: '获奖情况',
            key: 'Reward',
            render: (text, record,rowkey) => (
              <span>
                <Input id='reward'></Input> 
              </span>
            )
          },{
            title: '处分情况',
            key: 'Punishment',
            render: (text, record,rowkey) => (
              <span>
                <Input id='punishment'></Input> 
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
      var Name = document.getElementById('name').value
      var Reward = document.getElementById('reward').value
      var Punishment = document.getElementById('punishment').value
      if(!ID||!Name||!Reward||!Punishment){
        alert('信息不能为空')
        return 0
      }
      var data = {
          ID: ID,
          Name: Name,
          Reward: Reward,
          Punishment: Punishment
      }
      axios.post('http://127.0.0.1:8081/writeRPInfo',data)
      .then(res=>{
          if(res.data.result=='succeed'){
              alert('录入成功')
          }else if(res.data.result=='repeat'){
              alert('信息已存在')
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

import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'antd'
import current from './../../current.js'
import './ChooseSubject.css'

export default class ChooseSubject extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
            ID:''
        }
    }
    componentWillMount = ()=>{
        var currentUser = current('')
        this.setState({
            ID:localStorage.getItem('ID')
        })
        axios.get('http://127.0.0.1:8081/search_chooseSubject')
        .then(res=>{
            this.setState({
                Info: res.data.Info
            })
            if(res.data.result == 'failed'){
                alert('暂无课程记录！')
            }
        })
    }

    chooseSub = (record)=>{
        var data={
            Info:record,
            ID:this.state.ID
        }
        axios.post('http://127.0.0.1:8081/chooseSubject',data)
        .then(res=>{
            if(res.data.result == 'subject repeat'){
                alert("已选过该课程！")
            }else if(res.data.result == 'succeed'){
                alert('选课成功')
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
            dataIndex:'Class',
            key:'Class'
        },{
            title: '操作',
            key: 'operation',
            render: (text, record) => (
              <span>
                <Button type='primary' className='choose' onClick={()=>{
                    this.chooseSub(record)
                }}>选课</Button>
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
                <Table dataSource={dataSource} columns={columns} ></Table>
            </div>
        )
    }
}

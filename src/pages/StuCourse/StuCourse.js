import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class StuCourse extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[]
        }
    }
    componentWillMount = ()=>{
        var stuID = localStorage.getItem('stuID')
        localStorage.setItem('stuID','')
        if(stuID!='undefined'){
            var data={
                ID:stuID
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
        }else{
            axios.get('http://127.0.0.1:8081/stuCourse')
            .then(res=>{
                this.setState({
                    Info: res.data.Info
                })
                if(res.data.result == 'failed'){
                    alert('查询失败！')
                }
            })
        }
    }

    createTHead = ()=>{
        const colums = [{
            title:'选课学生',
            dataIndex: 'ID',
            key: 'ID'
        },{
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

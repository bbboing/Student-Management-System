import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'antd'

export default class ApplyResult extends Component {
    constructor(params){
        super(params);
        this.state={
            Info:[],
            holidayInfo:[],
            leaveInfo:[],
            reissueInfo:[],
            changeInfo:[],
        }
    }
    componentWillMount = ()=>{
        var userId = localStorage.getItem('ID')
        console.log(userId)
        var data = {
            ID: userId
        }
        axios.post('http://127.0.0.1:8081/applyResult',data)
        .then(res=>{
            if(res.data.result =='succeed'){
                this.setState({
                Info: res.data.Info
                })
            }else{
                alert('无申请信息！')
            }
            
        })
        // axios.post('http://127.0.0.1:8081/poorapplyResult',data)
        // .then(res=>{
        //     if(res.data.result =='succeed'){
        //         this.setState({
        //         poorInfo: res.data.Info
        //         })
        //     }else{
        //         alert('无贫困生申请信息！')
        //     }
            
        // })
        // axios.post('http://127.0.0.1:8081/holidayapplyResult',data)
        // .then(res=>{
        //     if(res.data.result =='succeed'){
        //         this.setState({
        //         holidayInfo: res.data.Info
        //         })
        //     }else{
        //         alert('无寒暑假留校申请信息！')
        //     }
            
        // })
        // axios.post('http://127.0.0.1:8081/leaveapplyResult',data)
        // .then(res=>{
        //     if(res.data.result =='succeed'){
        //         this.setState({
        //         leaveInfo: res.data.Info
        //         })
        //     }else{
        //         alert('无请假申请信息！')
        //     }
            
        // })
        // axios.post('http://127.0.0.1:8081/reissueapplyResult',data)
        // .then(res=>{
        //     if(res.data.result =='succeed'){
        //         this.setState({
        //         reissueInfo: res.data.Info
        //         })
        //     }else{
        //         alert('无学生证补办申请信息！')
        //     }
            
        // })
        // axios.post('http://127.0.0.1:8081/changeapplyResult',data)
        // .then(res=>{
        //     if(res.data.result =='succeed'){
        //         this.setState({
        //         changeInfo: res.data.Info
        //         })
        //     }else{
        //         alert('无修改信息申请信息！')
        //     }
            
        // })
    }

    createTHead = ()=>{
        const colums = [{
            title:'申请人',
            dataIndex: 'Name',
            key: 'Name'
        },{
            title:'申请类型',
            dataIndex:'Type',
            key:'Type'
        },{
            title:'申请时间',
            dataIndex:'Time',
            key:'Time'
        },{
            title:'申请结果',
            dataIndex:'Result',
            key:'Result'
        }];
        return colums;
    }
    render() {
        let columns = this.createTHead();
        // let poordataSource = this.state.poorInfo;
        // let holidaydataSource = this.state.holidayInfo;
        // let leavedataSource = this.state.leaveInfo;
        // let reissuedataSource = this.state.reissueInfo;
        // let changedataSource = this.state.changeInfo;
        let dataSource = this.state.Info;
        return (
            <div>
            <Table dataSource={dataSource} columns={columns}></Table>
                {/* <Table dataSource={poordataSource} columns={columns}></Table>
                <Table dataSource={holidaydataSource} columns={columns}></Table>
                <Table dataSource={leavedataSource} columns={columns}></Table>
                <Table dataSource={reissuedataSource} columns={columns}></Table>
                <Table dataSource={changedataSource} columns={columns}></Table> */}
            </div>
        )
    }
}

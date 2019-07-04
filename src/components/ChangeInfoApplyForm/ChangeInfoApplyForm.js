import { Form, Input, Button, Select, Row, Col } from 'antd';
import React,{ Component } from 'react'
import axios from 'axios'
import current from '../../current.js'
import formatDate from '../../utils/formatDate'
const { Option } = Select;

class ChangeInfoApplyForm1 extends Component {
    constructor(props){ //构造函数
    super(props);
    this.state = {
      curUser:{},
      result : '',
      list:'',
      timer:''

    }
   }
    createOption = (managerList) => {
        let list = managerList.map((elem)=>{
            return(
                <Option key={elem.Name} value={elem.ID}>{elem.Name}</Option>
            )
        })
        return list;
    }

    componentWillMount = ()=>{
        axios.get('http://127.0.0.1:8081/managerList')
        .then(res => {
            this.setState({
                list: this.createOption(res.data.Info)
            })
        })
        var curUser = current('');
        current(curUser)
        let now = new Date();
        let timer = formatDate(now);
        this.setState((state)=>{
            return {
                curUser: curUser,
                timer: timer,
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        var power = this.props.form.getFieldsValue().power
        var destination= this.props.form.getFieldsValue().destination
        if(!power||!destination){
            alert('消息不能为空')
            return 0;
        }
        var data = {
            ID: localStorage.getItem('ID'),
            name: localStorage.getItem('name'),
            power: power,
            destination:destination,
            time:this.state.timer,
            type:'修改信息申请'
        }
        axios.post("http://127.0.0.1:8081/changeInfoApply",data)
        .then(res=>{
            if(res.data.result=='repeat'){
                alert('请勿重复申请')
              }else
                alert('申请发送成功')
        })
    };

  render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 3 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="apply-form" >
            <Row>
                <Col span={6}>
                    <span>申请人：</span>
                    <span>{localStorage.getItem('name')}</span>
                </Col>
                <Col span={6}>
                    <span>学号：</span>
                    <span>{localStorage.getItem('ID')}</span>
                </Col>
                <Col span={10}>
                    <span>时间：</span>
                    <span>{this.state.timer}</span>
                </Col>
            </Row><br/>
          <Form.Item label='申请权限'>
            {getFieldDecorator('power')(
              <Select placeholder="请选择" size='large'>
                <Option value='修改信息'>修改信息</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label='提交至：'>
            {getFieldDecorator('destination')(
                    <Select placeholder="请选择" size='large'>
                        {this.state.list}
                    </Select>
            )}
          </Form.Item> 
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
            </Button>
          </Form.Item>
        </Form>
      );
  }
}
const ChangeInfoApplyForm = Form.create({ name: 'normal_poor' })(ChangeInfoApplyForm1);
export default ChangeInfoApplyForm;
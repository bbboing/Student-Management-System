import { Form, Input, Button, Select, Row, Col } from 'antd';
import React,{ Component } from 'react'
import axios from 'axios'
import current from '../../current.js'
import formatDate from '../../utils/formatDate'
const { Option } = Select;
const { TextArea } = Input

class holidayApplyForm extends Component {
    constructor(props){ //构造函数
    super(props);
    this.state = {
      curUser:{},
      result : '',
      list:'',
      timer:''

    }
   }
    createOption = (teacherList) => {
        let list = teacherList.map((elem)=>{
            return(
                <Option key={elem.Name} value={elem.ID}>{elem.Name}</Option>
            )
        })
        return list;
    }

    componentWillMount = ()=>{
        axios.get('http://127.0.0.1:8081/teacherList')
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
        var reason = this.props.form.getFieldsValue().reason
        var destination= this.props.form.getFieldsValue().destination
        var during = this.props.form.getFieldsValue().during
        if(!reason||!destination||!during){
          alert('消息不能为空')
          return 0
        }
        var data = {
            ID: localStorage.getItem('ID'),
            name: localStorage.getItem('name'),
            reason: reason,
            during: during,
            destination:destination,
            time:this.state.timer,
            type:'寒暑假留校申请'
        }
        console.log(data)
        axios.post("http://127.0.0.1:8081/holidayApply",data)
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
          <Form.Item label='申请理由'>
            {getFieldDecorator('reason', {
              rules: [{ required: true, message: 'Please input your reason!' }],
            })(
              <TextArea
                span={10}
                placeholder="请输入..."
              />,
            )}
          </Form.Item>
          <Form.Item label='留校时间'>
            {getFieldDecorator('during')(
              <Select placeholder="请选择" size='large'>
                  <Option value='寒假'>寒假</Option>
                  <Option value='暑假'>暑假</Option>
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
const HolidayApplyForm = Form.create({ name: 'normal_ressiue' })(holidayApplyForm);
export default HolidayApplyForm;
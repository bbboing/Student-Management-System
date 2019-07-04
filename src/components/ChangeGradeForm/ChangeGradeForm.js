import { Form, Input, Button, Select, Row, Col } from 'antd';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import current from '../../current.js'
import formatDate from '../../utils/formatDate'
class ChangeGradeForm extends Component {
    constructor(props){ //构造函数
    super(props);
    this.state = {
      curUser:{},
      result : '',
      list:'',
      timer:''

    }
   }

    componentWillMount = ()=>{
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
        localStorage.setItem('searchID',this.props.form.getFieldsValue().id)
        localStorage.setItem('searchSubject',this.props.form.getFieldsValue().subject)
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
            <Form.Item label='学号'>
            {getFieldDecorator('id', {
              rules: [{ required: true, message: 'Please input your information!' }],
            })(
              <Input
                placeholder="请输入..."
              />,
            )}
          </Form.Item>
          <Form.Item label='课程'>
            {getFieldDecorator('subject', {
              rules: [{ required: true, message: 'Please input your reason!' }],
            })(
              <Input
                placeholder="请输入..."
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
              <Link to='/changeGrade'>查询</Link>
            </Button>
          </Form.Item>
        </Form>
      );
  }
}
const ChangeGradeForm1 = Form.create({ name: 'normal_poor' })(ChangeGradeForm);
export default ChangeGradeForm1;
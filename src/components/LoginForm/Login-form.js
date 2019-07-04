import { Form, Icon, Input, Button} from 'antd';
import './Login-form.css';
import React,{ Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import current from './../../current.js'

class LoginForm extends Component {
  constructor(props){ //构造函数
    super(props);
    this.state = {
      user:{
      },
      result : '',
    }
    }
  getData(){ //请求数据函数
    var name = this.props.form.getFieldsValue().username;
    var psw = this.props.form.getFieldsValue().password;
    if(!name||!psw){
      alert('用户名或密码不能为空！')
      return 0
    }
    if(psw.length<6||psw.length>16){
      alert('密码长度不符合规范！')
      return 0
    }
    var data = {
      "name": name,
      "password":psw
    }
    axios.post('http://127.0.0.1:8081/',data)
    .then(res=>{
      console.log(res.data)
      if(res.data.result =='succeed'){
        localStorage.setItem('name',res.data.Info.Name)
        localStorage.setItem('ID', res.data.Info.ID)
        localStorage.setItem('Identity', res.data.Info.Identity)
        this.setState({
          user: res.data.Info,
          result: res.data.result
        });
      }else{
        this.setState({
          result: res.data.result
        })
      }            
    })
    
  }
    
  handleSubmit = e => {
    e.preventDefault();
    this.getData();
  };
  render() {
    if(this.state.result == '' || this.state.result == 'failed')
    {
      if(this.state.result == 'failed'){
        alert('用户名或密码错误！')
        this.setState({
          result: ''
        })
      };
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }else if(this.state.result == 'succeed'){
      current(this.state.user)
      return(
        <Redirect to='/HomePage'/>
      )
    }
  }
}
const NormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default NormalLoginForm;
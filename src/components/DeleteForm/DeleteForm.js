import { Form, Input, Button, Select } from 'antd';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class DeleteForm1 extends Component {
    constructor(props){ //构造函数
    super(props);
    this.state = {
      curUser:{},
      result : '',
      list:'',
      timer:''

    }
   }
    handleSubmit = e => {
        e.preventDefault();
    };
    Delete = ()=>{
        var data={
            ID: this.props.form.getFieldsValue().stuID
        }
        axios.post('http://127.0.0.1:8081/deleteStuInfo',data)
        .then(res=>{
            if(res.data.result=='succeed'){
                alert('删除成功')
            }
        })
    }

  render() {
      const { getFieldDecorator } = this.props.form;
      
      return (
        <Form onSubmit={this.handleSubmit} className="apply-form" >
            <Form.Item >
            {getFieldDecorator('stuID', {
              rules: [{ required: true, message: 'Please input your information!' }],
            })(
              <Input className='IDInput'
                placeholder="请输入学号..."
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>{
                this.Delete()
            }}>按学号删除
            </Button>
          </Form.Item>
        </Form>
      );
  }
}
const DeleteForm = Form.create({ name: 'normal_poor' })(DeleteForm1);
export default DeleteForm;
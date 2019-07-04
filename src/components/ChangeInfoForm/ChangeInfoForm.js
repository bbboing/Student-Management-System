import { Form, Input, Button, Select, Row, Col } from 'antd';
import React,{ Component } from 'react'
import axios from 'axios'
const { Option } = Select;
const { TextArea } = Input

class ChangeInfoForm1 extends Component {
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
        var newInfo = this.props.form.getFieldsValue().newInfo
        var option = this.props.form.getFieldsValue().option
        console.log(newInfo)
        console.log(option)
        if(!newInfo||!option){
          alert('消息不能为空')
          return 0
        }
        var data = {
            ID: localStorage.getItem('ID'),
            newInfo: newInfo,
        }
        if(option='Tel'){
          axios.post("http://127.0.0.1:8081/changeTelInfo",data)
          .then(res=>{
            if(res.data.result=='succeed'){
              alert('修改成功')
            }
          })
        }else if(option='StudyAddress'){
          axios.post("http://127.0.0.1:8081/changeStatusInfo",data)
          .then(res=>{
            if(res.data.result=='succeed'){
              alert('修改成功')
            }
          })
        }
        
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
          <Form.Item label='修改项'>
            {getFieldDecorator('option')(
                    <Select placeholder="请选择" size='large'>
                        <Option value='Tel'>联系电话</Option>
                        <Option value='StudyAddress'>学籍所在地</Option>
                    </Select>
            )}
          </Form.Item> 
          <Form.Item label='信息'>
            {getFieldDecorator('newInfo', {
              rules: [{ required: true, message: 'Please input your reason!' }],
            })(
              <TextArea
                span={5}
                placeholder="请输入..."
              />,
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
const ChangeInfoForm = Form.create({ name: 'normal_poor' })(ChangeInfoForm1);
export default ChangeInfoForm;
import { Form, Input, Button, Select } from 'antd';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
const { Option } = Select;

class SearchStuGradeForm1 extends Component {
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

    handleSubmit = e => {
        e.preventDefault();
    };
    search = ()=>{
      localStorage.setItem('stuID',this.props.form.getFieldsValue().stuID)
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
                this.search()
            }}>
                <Link to='/teacher/StuGrade'>按学号查询</Link>
            </Button>
          </Form.Item>
        </Form>
      );
  }
}
const SearchStuGradeForm = Form.create({ name: 'normal_poor' })(SearchStuGradeForm1);
export default SearchStuGradeForm;
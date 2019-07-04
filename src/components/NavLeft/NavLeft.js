import React, { Component } from 'react'
import './NavLeft.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import stuMenu from './../../StudentMenuConfig.js'
import teaMenu from './../../TeacherMenuConfig.js'
import manMenu from '../../ManagerMenuConfig.js'
const {SubMenu} = Menu

export default class NavLeft extends Component {
    createMenu = (menuList) => {
        let list = menuList.map((elem) =>{
            if(elem.children){
                return(
                    <SubMenu key={elem.value} title={<span>{elem.value}</span>}>
                        {this.createMenu(elem.children)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={elem.value}>
                        <Link to={elem.path}>
                            {elem.value}
                        </Link>
                    </Menu.Item>
            )
            }
        })
        return list;
    }
    constructor(params){
        super(params)
    }
    componentWillMount = ()=>{
            var type = localStorage.getItem('Identity')
            console.log(type)
            var menuList;
            if(type == "1"){
                menuList = stuMenu;
            }else if(type == "2"){
                menuList = teaMenu;
            }else{
                menuList = manMenu;
            }
            this.setState({
                list: this.createMenu(menuList)
            })
    }
    render() {
        
        return (
            <div>
                <div className='logo-box'>
                    <img src='./../../../public/imgs/sign.jpg'/>
                </div>
                <Menu theme='dark' mode="inline">
                    {this.state.list}
                </Menu>
            </div>
        )
    }
}

const stutMenu = [
    {
        value: '申请',
        path: '/request',
        children: [
            {
                value: '贫困生申请',
                path: '/request/poorApply'
            },{
                value: '寒暑假留校申请',
                path: '/request/stayApply'
            },{
                value: '请假申请',
                path: '/request/leaveApply'
            },{
                value: '学生证补办申请',
                path: '/request/reissueApply'
            },{
                value: '权限申请',
                path: '/request/changeInfoApply'
            },{
                value: '查看申请结果',
                path: '/request/result'
            },
        ]
    },
    {
        value: '查看信息',
        path: '/searchForStu',
        children: [
            {
                value:'查看个人信息',
                path: '/searchForStu/personalInfo'
            },{
                value:'查看课程信息',
                path: '/searchForStu/subjectInfo'
            },{
                value:'查看考试信息',
                path: '/searchForStu/examInfo'
            },{
                value:'查看成绩信息',
                path: '/searchForStu/gradeInfo'
            },{
                value:'查看在校证明',
                path: '/searchForStu/certificates'
            },
        ]
    },{
        value: '修改个人信息',
        path:'/changeInfo'
    },{
        value: '选课',
        path: '/chooseCourse',
        children: [
            {
                value: '查看已选课程',
                path: '/chooseCourse/selected'
            },
            {
                value: '选课列表',
                path: '/chooseCourse/chooseSubject'
            }
        ]
    }
]

export default stutMenu;
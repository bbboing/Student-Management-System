const teaMenu=[
    {
        value: '查询信息',
        path: '/searchForTeacher',
        children: [
            {
                value: '学生信息',
                path: '/searchForTeacher/stuInfo'
            },
            {
                value: '学生课程',
                path: '/searchForTeacher/stuCourse',
            },
            {
                value: '学生考试',
                path: '/searchForTeacher/stuExam'
            }
        ]
    },
    {
        value: '审批',
        path: '/approve',
        children: [
            {
                value: '申请详情',
                path: '/approve/detail'
            },
            {
                value: '审批记录',
                path: '/approve/history'
            }
        ]
    },
    {
        value: '学生成绩',
        path: '/stuMarks',
        children: [
            {
                value: '录入成绩',
                path: '/stuMarks/writestuGrade'
            },
            {
                value: '修改成绩',
                path: '/stuMarks/changeStuGrade'
            },
            {
                value: '查询成绩',
                path: '/stuMarks/searchStuGrade'
            }
        ]
    }
]

export default teaMenu;
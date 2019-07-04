const manMenu = [
    {
        value: '授权',
        path: '/grant'
    },
    {
        value: '录入信息',
        path: '/writeInfo',
        children: [
            {
                value: '录入初始信息',
                path: '/writeInfo/writeInitialInfo'
            },
            {
                value: '录入健康信息',
                path: '/writeInfo/writeHealthInfo'
            },
            {
                value: '录入奖惩状况',
                path: '/writeInfo/writeRewardAndPunishment'
            },
            {
                value: '删除学生信息',
                path: '/deleteStuInfo'
            }
        ]
    },
    {
        value: '安排考试',
        path: '/setExam'
    }
]

export default manMenu;
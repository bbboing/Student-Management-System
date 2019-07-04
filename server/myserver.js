var express = require('express');
var app = express();
var cors = require('cors')
const bodyparser = require('body-parser')
var cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session');
const expressSession = require('express-session')
var User = require('./controllers/User.js')
//跨域配置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Context-Type", "application/json;charset=utf-8")
    res.header('Access-Control-Allow-Credentials', 'true'); 
    if(req.method=="OPTIONS") res.send(200);
    else  next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//session配置
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['aaabbbb'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))


var corsOptions = {
    orgin:'http://127.0.0.1:3000',
    optionSuccessStuaus: 200
}
app.post('/', cors(corsOptions),User.do_login)
app.post('/personalInfo', cors(corsOptions),User.search_Info)
app.post('/search_selectSub', cors(corsOptions),User.search_selectSub)
app.post('/search_examInfo', cors(corsOptions),User.search_examInfo)
app.post('/search_gradeInfo', cors(corsOptions),User.search_gradeInfo)
app.get('/search_chooseSubject', cors(corsOptions),User.search_chooseSubject)
app.post('/chooseSubject', cors(corsOptions),User.chooseSubject)
app.get('/teacherList', cors(corsOptions),User.teacherList)
app.get('/managerList', cors(corsOptions),User.managerList)
app.post('/poorApply', cors(corsOptions), User.poorApply)
app.post('/ressiueApply',cors(corsOptions),User.ressiueApply)
app.post('/holidayApply',cors(corsOptions),User.holidayApply)
app.post('/leaveApply',cors(corsOptions),User.leaveApply)
app.get('/stuInfo', cors(corsOptions),User.stuInfo)
app.get('/stuCourse', cors(corsOptions),User.stuCourse)
app.get('/stuExam', cors(corsOptions),User.stuExam)
app.get('/searchStuGrade', cors(corsOptions),User.searchStuGrade)
// app.post('/poorapplyResult',cors(corsOptions),User.poorapplyResult)
// app.post('/holidayapplyResult',cors(corsOptions),User.holidayapplyResult)
// app.post('/leaveapplyResult',cors(corsOptions),User.leaveapplyResult)
// app.post('/reissueapplyResult',cors(corsOptions),User.reissueapplyResult)
app.post('/applyResult',cors(corsOptions),User.applyResult)
app.post('/get_applyDetail',cors(corsOptions),User.get_applyDetail)
app.post('/approveApply',cors(corsOptions),User.approveApply)
app.post('/applyHistory',cors(corsOptions),User.applyHistory)
app.post('/writeGradeFirst',cors(corsOptions),User.writeGradeFirst)
app.post('/searchWriteGrade',cors(corsOptions),User.searchWriteGrade)
app.post('/writeGrade',cors(corsOptions),User.writeGrade)
app.post('/searchStuGradeBySub',cors(corsOptions),User.searchStuGradeBySub)
app.post('/changeGrade',cors(corsOptions),User.changeGrade)
app.post('/writeInitialInfo', cors(corsOptions), User.writeInitialInfo)
app.post('/writeHealthInfo', cors(corsOptions), User.writeHealthInfo)
app.post('/writeRPInfo', cors(corsOptions), User.writeRPInfo)
app.post('/setExam', cors(corsOptions), User.setExam)
app.post('/get_changeApply',cors(corsOptions),User.get_changeApply)
app.post('/grant',cors(corsOptions),User.grant)
app.post('/changeInfoApply',cors(corsOptions),User.changeInfoApply)
app.post('/checkPower',cors(corsOptions),User.checkPower)
app.post('/changeTelInfo',cors(corsOptions),User.changeTelInfo)
app.post('/changeStatusInfo',cors(corsOptions),User.changeStatusInfo)
app.post('/searchFailedSubject',cors(corsOptions),User.searchFailedSubject)
app.post('/checkTeacherSubject',cors(corsOptions),User.checkTeacherSubject)
app.post('/checkRepeatExam',cors(corsOptions),User.checkRepeatExam)
app.post('/checkExamFlag',cors(corsOptions),User.checkExamFlag)
app.post('/deleteStuInfo',cors(corsOptions),User.deleteStuInfo)



//监听端口
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host+':'+port);
})
var db = require('./db.js');

exports.check_login = function(name,pass, callback){
    var sql = 'select * from UserFile where ID=? and Password=?';
    db.query(sql,[name,pass],callback);
}

exports.do_search_oneStuInfo = function(ID,callback){
    // var sql = 'select userfile.ID,userfile.Name,stufile.Institute,stufile.Major,stufile.Grade,stufile.Address,stufile.Tel,statusfile.StudyAddress,rpfile.Reward,rpfile.Punishment,healthfile.Healthy from userfile,healthfile,rpfile,statusfile,stufile where user.ID=? and user.ID=stufile.ID and user.ID=rpfile.ID and user.ID=healthfile.ID and user.ID = statusfile.ID'
    // var sql = 'select * from userfile,healthfile where userfile.ID=? and userfile.ID=healthfile.ID '
    var sql = 'select * from userfile,healthfile,rpfile,statusfile,stufile where userfile.ID=? and userfile.ID=stufile.ID and userfile.ID=rpfile.ID and userfile.ID=healthfile.ID and userfile.ID = statusfile.ID'
    db.query(sql,[ID],callback)
}

exports.do_search_selectSub = function(ID,callback){
    var sql = 'select * from selectsubfile,subjectfile where selectSubfile.ID=? and selectSubfile.Subject=subjectfile.Subject'
    db.query(sql,[ID],callback)
}

exports.do_search_examInfo = function(ID,callback){
    var sql = 'select * from examfile,selectSubfile where selectSubfile.ID=? and selectSubfile.Subject=examfile.ExamSubject'
    db.query(sql,[ID],callback)
}

exports.do_search_gradeInfo = function(ID,callback){
    var sql = 'select * from gradefile where ID=?'
    db.query(sql,[ID],callback)
}

exports.do_search_chooseSubject = function(callback){
    var sql = 'select * from subjectfile'
    db.query(sql,callback)
}
exports.check_repeatSubject = function(ID,Subject,callback){
    var sql = 'select * from selectSubfile where ID=? and Subject=?'
    db.query(sql,[ID,Subject],callback)
}
exports.insert_chooseSubject = function(ID,Info,callback){
    var sql = 'insert into selectSubfile(ID,Subject,Time,Teacher,Classroom) values(?,?,?,?,?)';
    db.query(sql,[ID,Info.Subject,Info.Time,Info.Teacher,Info.Class],callback)
}
exports.search_teacherList = function(callback){
    var sql = 'select ID,Name from userfile where Identity=?'
    db.query(sql,[2],callback)
}
exports.search_managerList = function(callback){
    var sql = 'select ID,Name from userfile where Identity=?'
    db.query(sql,[3],callback)
}
exports.do_poorApply1 = function(ID,Reason,Family,Type,callback){
    var sql = 'insert into poorfile(ID,Family,Reason,Type) values (?,?,?,?)'
    db.query(sql,[ID,Family,Reason,Type],callback)
}
exports.do_poorApply2 = function(ID,Name,Time,Type,Destination,callback){
    var sql = 'insert into applyfile(ID,Name,Destination,Type,Time,Result) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Name,Destination,Type,Time,'待审核'],callback)
}
exports.do_ressiueApply1 = function(ID,Reason,Type,callback){
    var sql = 'insert into idcardfile(ID,Reason,Type) values (?,?,?)'
    db.query(sql,[ID,Reason,Type],callback)
}
exports.do_ressiueApply2 = function(ID,Name,Time,Type,Destination,callback){
    var sql = 'insert into applyfile(ID,Name,Destination,Type,Time,Result) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Name,Destination,Type,Time,'待审核'],callback)
}

exports.do_holidayApply1 = function(ID,Reason,During,Type,callback){
    var sql = 'insert into holidayfile(ID,Reason,During,Type) values (?,?,?,?)'
    db.query(sql,[ID,Reason,During,Type],callback)
}
exports.do_holidayApply2 = function(ID,Name,Time,Type,Destination,callback){
    var sql = 'insert into applyfile(ID,Name,Destination,Type,Time,Result) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Name,Destination,Type,Time,'待审核'],callback)
}
exports.do_leaveApply1 = function(ID,Reason,During,Type,callback){
    var sql = 'insert into leavefile(ID,Reason,During,Type) values (?,?,?,?)'
    db.query(sql,[ID,Reason,During,Type],callback)
}
exports.do_leaveApply2 = function(ID,Name,Time,Type,Destination,callback){
    var sql = 'insert into applyfile(ID,Name,Destination,Type,Time,Result) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Name,Destination,Type,Time,'待审核'],callback)
}
exports.do_stuInfo = function(callback){
    var sql = 'select * from userfile,healthfile,rpfile,statusfile,stufile where userfile.Identity=? and userfile.ID=stufile.ID and userfile.ID=rpfile.ID and userfile.ID=healthfile.ID and userfile.ID = statusfile.ID'
    db.query(sql,['1'],callback)
}
exports.do_stuCourse = function(callback){
    var sql = 'select * from selectsubfile'
    db.query(sql,callback)
}
exports.do_stuExam = function(callback){
    var sql = 'select * from userfile,selectsubfile,examfile where userfile.ID=selectsubfile.ID and selectsubfile.Subject=examfile.ExamSubject'
    db.query(sql,callback)
}
exports.do_searchStuGrade = function(callback){
    var sql = 'select * from userfile,gradefile where userfile.ID=gradefile.ID'
    db.query(sql,callback)
}
exports.do_poorapplyResult = function(ID,callback){
    var sql = 'select * from applyfile,poorfile where applyfile.ID=? and applyfile.ID=poorfile.ID'
    db.query(sql,[ID],callback)
}
exports.do_holidayapplyResult = function(ID,callback){
    var sql = 'select * from applyfile,holidayfile where applyfile.ID=? and applyfile.ID=holidayfile.ID'
    db.query(sql,[ID],callback)
}
exports.do_leaveapplyResult = function(ID,callback){
    var sql = 'select * from applyfile,leavefile where applyfile.ID=? and applyfile.ID=leavefile.ID'
    db.query(sql,[ID],callback)
}
exports.do_reissueapplyResult = function(ID,callback){
    var sql = 'select * from applyfile,reissuefile where applyfile.ID=? and applyfile.ID=reissuefile.ID'
    db.query(sql,[ID],callback)
}
exports.do_applyResult = function(ID,callback){
    var sql = 'select * from applyfile,userfile where applyfile.ID=? and applyfile.ID=userfile.ID'
    db.query(sql,[ID],callback)
}
exports.do_applyDetail = function(ID,callback){
    var sql = 'select * from applyfile where Destination=? and Result=?'
    db.query(sql,[ID,'待审核'],callback)
}
exports.do_approveApply = function(ID,Type,Option,callback){
    var sql = 'update applyfile set result=? where ID=? and Type=?'
    db.query(sql,[Option,ID,Type],callback)
}
exports.do_applyHistory = function(ID,callback){
    var sql = 'select * from applyfile,userfile where applyfile.Destination=? and applyfile.ID=userfile.ID'
    db.query(sql,[ID],callback)
}
exports.do_writeGradeFirst = function(Name,callback){
    var sql = 'select * from subjectfile where Teacher=?'
    db.query(sql,[Name],callback)
}
exports.do_searchWriteGrade = function(Subject,callback){
    var sql = 'select * from selectsubfile,userfile where Subject=? and userfile.ID=selectsubfile.ID'
    db.query(sql,[Subject],callback)
}
exports.do_writeGrade = function(ID,Subject,Grade,RecordTime,Flag,RecordPerson,callback){
    var sql = 'insert into gradefile(ID,Subject,Grade,RecordTime,Flag,RecordPerson) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Subject,Grade,RecordTime,Flag,RecordPerson],callback)
}
exports.do_searchStuGradeBySub = function(ID,Subject,callback){
    var sql = 'select * from gradefile where ID=? and Subject=?'
    db.query(sql,[ID,Subject],callback)
}
exports.do_changeGrade = function(ID,Subject,Grade,RecordTime,Flag,RecordPerson,callback){
    var sql = 'update gradefile set Grade=?,RecordTime=?,Flag=?,RecordPerson=? where ID=? and Subject=?'
    db.query(sql,[Grade,RecordTime,Flag,RecordPerson,ID,Subject],callback)
}
exports.do_checkWriteRepeatUserfile = function(ID,callback){
    var sql = 'select * from userfile where ID=?'
    db.query(sql,[ID],callback)
}
exports.do_checkWriteRepeatStufile = function(ID,callback){
    var sql = 'select * from stufile where ID=?'
    db.query(sql,[ID],callback)
}
exports.do_checkWriteRepeatHealthfile = function(ID,callback){
    var sql = 'select * from healthfile where ID=?'
    db.query(sql,[ID],callback)
}
exports.do_checkWriteRepeatRPfile = function(ID,callback){
    var sql = 'select * from rpfile where ID=?'
    db.query(sql,[ID],callback)
}
exports.do_checkExamfile = function(Subject,callback){
    var sql = 'select * from examfile where ExamSubject=?'
    db.query(sql,[Subject],callback)
}
exports.do_checkWriteRepeatPowerfile = function(ID,callback){
    var sql = 'select * from powerfile where ID=?'
    db.query(sql,[ID],callback)
}
exports.do_writeInitialInfo1 = function(ID,Name,Password,Identity,Sex,callback){
    var sql = 'insert into userfile(ID,Name,Password,Identity,Sex) values (?,?,?,?,?)'
    db.query(sql,[ID,Name,Password,Identity,Sex],callback)
}
exports.do_writeInitialInfo2 = function(ID,Institute,Major,Address,Grade,callback){
    var sql = 'insert into stufile(ID,Institute,Major,Address,Grade,Tel) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Institute,Major,Address,Grade,'无'],callback)
}
exports.do_writeInitialInfo3 = function(ID,Name,callback){
    var sql = 'insert into statusfile(ID,Name,StudyAddress) values (?,?,?)'
    db.query(sql,[ID,Name,'暂未填写'],callback)
}
exports.do_writeHealthInfo = function(ID,Name,Health,callback){
    var sql = 'insert into healthfile(ID,Name,Healthy) values (?,?,?)'
    db.query(sql,[ID,Name,Health],callback)
}
exports.do_writeRPInfo = function(ID,Name,Reward,Punishment,callback){
    var sql = 'insert into rpfile(ID,Name,Reward,Punishment) values (?,?,?,?)'
    db.query(sql,[ID,Name,Reward,Punishment],callback)
}
exports.do_setExam = function(Subject,Classroom,Time,Teacher,Flag,callback){
    var sql = 'insert into examfile(ExamSubject,ExamClass,ExamTime,ExamTeacher,Flag) values (?,?,?,?,?)'
    db.query(sql,[Subject,Classroom,Time,Teacher,Flag],callback)
}
exports.do_changeapplyResult = function(ID,callback){
    var sql = 'select * from applyfile where Destination=? and Result=? '
    db.query(sql,[ID,'待审核'],callback)
}
exports.do_grant = function(ID,Type,Option,callback){
    var sql = 'update applyfile set result=? where ID=? and Type=?'
    db.query(sql,[Option,ID,Type],callback)
}
exports.do_changeInfoApply1 = function(ID,Power,Type,callback){
    var sql = 'insert into powerfile(ID,Power,Type) values (?,?,?)'
    db.query(sql,[ID,Power,Type],callback)
}
exports.do_changeInfoApply2 = function(ID,Name,Time,Type,Destination,callback){
    var sql = 'insert into applyfile(ID,Name,Destination,Type,Time,Result) values (?,?,?,?,?,?)'
    db.query(sql,[ID,Name,Destination,Type,Time,'待审核'],callback)
}
exports.do_checkRepeatApply = function(ID,Type,callback){
    var sql = 'select * from applyfile where ID=? and Type=?'
    db.query(sql,[ID,Type],callback)
}
exports.do_checkRepeatGrade = function(ID,Subject,callback){
    var sql = 'select * from gradefile where ID=? and Subject=?'
    db.query(sql,[ID,Subject],callback)
}
exports.do_checkPower = function(ID,callback){
    var sql = 'select * from applyfile where ID=? and Type=? and Result=?'
    db.query(sql,[ID,'修改信息申请','审核通过'],callback)
}
exports.do_changeTelInfo = function(ID,newInfo,callback){
    var sql = 'update stufile set Tel=? where ID=?'
    db.query(sql,[newInfo,ID],callback)
}
exports.do_changeStatusInfo = function(ID,newInfo,callback){
    var sql = 'update statusfile set StudyAddress=? where ID=?'
    db.query(sql,[newInfo,ID],callback)
}
exports.do_searchFailedSubject = function(ID,callback){
    var sql = 'select * from gradefile where ID=? and Flag=?'
    db.query(sql,[ID],callback)
}
exports.do_checkTeacherSubject = function(Name,Subject,callback){
    var sql = 'select * from subjectfile where Teacher=? and Subject=?'
    db.query(sql,[Name,Subject],callback)
}
exports.do_checkRepeatExam = function(Time,Class,callback){
    var sql = 'select * from examfile where Class=? and Time=?'
    db.query(sql,[Class,Time],callback)
}
exports.do_checkExamFlag = function(Subject,callback){
    var sql = 'select Flag from examfile where ExamSubject=?'
    db.query(sql,[Subject],callback)
}
exports.do_deleteStuInfo = function(ID,callback){
    var sql = 'delete from userfile where userfile.ID=?'
    db.query(sql,[ID],callback)
}
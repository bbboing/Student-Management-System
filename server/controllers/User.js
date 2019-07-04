var User_model = require('../models/User_model.js')

exports.do_login = function(req, res, next){
    var name = req.body.name;
    var password = req.body.password;
    User_model.check_login(name,password,function(err,data){
        if(data.length>0){
            // req.session = data[0]
            // console.log(req.session)
            data = {
                Info: data[0],
                result: 'succeed'
            }
        }else{
            data = {
                result: 'failed'
            }
        }
        res.send(data)
    });
}

exports.search_Info = function(req, res, next){
    var ID = req.body.ID;
    User_model.do_search_oneStuInfo(ID,function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.search_selectSub = function(req, res, next){
    var ID = req.body.ID;
    User_model.do_search_selectSub(ID,function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.search_examInfo = function(req, res, next){
    var ID = req.body.ID;
    User_model.do_search_examInfo(ID,function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.search_gradeInfo = function(req, res, next){
    var ID = req.body.ID;
    User_model.do_search_gradeInfo(ID,function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.search_chooseSubject = function(req, res, next){
    User_model.do_search_chooseSubject(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.chooseSubject = function(req, res, next){
    var Subject = req.body.Info.Subject
    var ID = req.body.ID
    User_model.check_repeatSubject(ID,Subject,function(err,data){
        if(data.length==0){
            User_model.insert_chooseSubject(ID,req.body.Info,function(err,data){
                data={
                    result:'succeed'
                }
                res.send(data)
            })
        }else{
            data = {
                result:'subject repeat'
            }
            res.send(data)
        }
    })
}

exports.teacherList = function(req, res, next){
    User_model.search_teacherList(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.managerList = function(req, res, next){
    User_model.search_managerList(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.poorApply = function(req, res, next){
    var ID = req.body.ID
    var Name = req.body.name
    var Reason = req.body.reason
    var Destination = req.body.destination
    var Family = req.body.family
    var Type = req.body.type
    var Time = req.body.time
    User_model.do_checkRepeatApply(ID,Type,function(err,data){
        if(data.length==0){
            User_model.do_poorApply1(ID,Reason,Family,Type,function(err,data){
                User_model.do_poorApply2(ID,Name,Time,Type,Destination,function(err,data){
                    var data={
                        result:'succeed'
                    }
                    res.send(data)
                })
            })
        }else{
            data={
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}

exports.ressiueApply = function(req, res, next){
    var ID = req.body.ID
    var Name = req.body.name
    var Reason = req.body.reason
    var Destination = req.body.destination
    var Type = req.body.type
    var Time = req.body.time
    User_model.do_checkRepeatApply(ID,Type,function(err,data){
        if(data.length==0){
            User_model.do_ressiueApply1(ID,Reason,Family,Type,function(err,data){
                User_model.do_ressiueApply2(ID,Name,Time,Type,Destination,function(err,data){
                    var data={
                        result:'succeed'
                    }
                    res.send(data)
                })
            })
        }else{
            data={
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}

exports.holidayApply = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.name
    var Reason = req.body.reason
    var During = req.body.during
    var Destination = req.body.destination
    var Type = req.body.type
    var Time = req.body.time
    User_model.do_checkRepeatApply(ID,Type,function(err,data){
        if(data.length==0){
            User_model.do_holidayApply1(ID,Reason,During,Type,function(err,data){
                User_model.do_holidayApply2(ID,Name,Time,Type,Destination,function(err,data){
                    data={
                        result:'succeed'
                    }
                    res.send(data)
                })
            })
        }else{
            data={
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}

exports.leaveApply = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.name
    var Reason = req.body.reason
    var During = req.body.during
    var Destination = req.body.destination
    var Type = req.body.type
    var Time = req.body.time
    User_model.do_checkRepeatApply(ID,Type,function(err,data){
        if(data.length==0){
            User_model.do_leaveApply1(ID,Reason,During,Type,function(err,data){
                User_model.do_leaveApply2(ID,Name,Time,Type,Destination,function(err,data){
                    var data={
                        result:'succeed'
                    }
                    res.send(data)
                })
            })
        }else{
            data={
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}

exports.stuInfo = function(req,res,next){
    User_model.do_stuInfo(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                Info: 'failed'
            }
        }
        res.send(data)
    })
}

exports.stuCourse = function(req,res,next){
    User_model.do_stuCourse(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                Info: 'failed'
            }
        }
        res.send(data)
    })
}

exports.stuExam = function(req,res,next){
    User_model.do_stuExam(function(err,data){
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                Info: 'failed'
            }
        }
        res.send(data)
    })
}

exports.searchStuGrade = function(req,res,next){
    User_model.do_searchStuGrade(function(err,data){
        console.log(data)
        if(data.length>0){
            data = {
                Info: data,
                result: 'succeed'
            }
        }else{
            data = {
                Info: 'failed'
            }
        }
        res.send(data)
    })
}

exports.poorapplyResult = function(req,res,next){
    var ID = req.body.ID
    User_model.do_poorapplyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.holidayapplyResult = function(req,res,next){
    var ID = req.body.ID
    User_model.do_holidayapplyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}

exports.leaveapplyResult = function(req,res,next){
    var ID = req.body.ID
    User_model.do_leaveapplyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.reissueapplyResult = function(req,res,next){
    var ID = req.body.ID
    User_model.do_reissueapplyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.applyResult = function(req,res,next){
    var ID = req.body.ID
    User_model.do_applyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.get_applyDetail = function(req,res,next){
    var ID = req.body.ID
    User_model.do_applyDetail(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.approveApply = function(req,res,next){
    var ID = req.body.ID
    var Type = req.body.Type
    var Option = req.body.option
    User_model.do_approveApply(ID,Type,Option,function(err,data){
        data={
            result:'succeed'
        }
        res.send(data)
    })
}
exports.applyHistory = function(req,res,next){
    var ID = req.body.ID
    User_model.do_applyHistory(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.writeGradeFirst = function(req,res,next){
    var Name = req.body.name
    User_model.do_writeGradeFirst(Name,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.searchWriteGrade = function(req,res,next){
    var Subject = req.body.subject
    User_model.do_searchWriteGrade(Subject,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.writeGrade = function(req,res,next){
    var Subject = req.body.Subject
    var ID = req.body.ID
    var Grade = req.body.Grade
    var RecordTime = req.body.Timer
    var Flag = req.body.Flag
    var RecordPerson = req.body.RecordPerson
    User_model.do_checkRepeatGrade(ID,Subject,function(err,data){
        if(data.length==0){
            User_model.do_writeGrade(ID,Subject,Grade,RecordTime,Flag,RecordPerson,function(err,data){
                data={
                    Info: data,
                    result:'succeed'
                }
                res.send(data)
            })
        }else{
            data={
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}
exports.searchStuGradeBySub = function(req,res,next){
    var Subject = req.body.subject
    var ID = req.body.ID
    User_model.do_searchStuGradeBySub(ID,Subject,function(err,data){
        data={
            Info: data,
            result:'succeed'
        }
        res.send(data)
    })
}
exports.changeGrade = function(req,res,next){
    var Subject = req.body.Subject
    var ID = req.body.ID
    var Grade = req.body.Grade
    var RecordTime = req.body.Timer
    var Flag = req.body.Flag
    var RecordPerson = req.body.RecordPerson
    User_model.do_changeGrade(ID,Subject,Grade,RecordTime,Flag,RecordPerson,function(err,data){
        data={
            Info: data,
            result:'succeed'
        }
        res.send(data)
    })
}
exports.writeInitialInfo = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.Name
    var Institute = req.body.Institute
    var Major = req.body.Major
    var Address = req.body.Address
    var Password = req.body.Password
    var Identity = req.body.Identity
    var Sex = req.body.Sex
    var Grade = req.body.Grade
    User_model.do_checkWriteRepeatUserfile(ID,function(err,data){
        if(data.length==0){
            User_model.do_checkWriteRepeatStufile(ID,function(err,data){
                if(data.length==0){
                    User_model.do_writeInitialInfo1(ID,Name,Password,Identity,Sex,function(err,data){
                        User_model.do_writeInitialInfo2(ID,Institute,Major,Address,Grade,function(err,data){
                            User_model.do_writeInitialInfo3(ID,Name,function(err,data){
                                data = {
                                    result: 'succeed'
                                }
                                res.send(data)
                            })
                        })
                    })
                }else{
                    data={
                        result:'repeat'
                    }
                    res.sent(data)
                }
            })
        }else{
            data = {
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}
exports.writeHealthInfo = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.Name
    var Health = req.body.Health
    User_model.do_checkWriteRepeatHealthfile(ID,function(err,data){
        if(data.length==0){
            User_model.do_writeHealthInfo(ID,Name,Health,function(err,data){
               data = {
                   result:'succeed'
               }
               res.send(data) 
            })
        }else{
            data = {
                result:'repeat'
            }
            res.send(data)
        }
    })
    
}
exports.writeRPInfo = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.Name
    var Reward = req.body.Reward
    var Punishment = req.body.Punishment
    User_model.do_checkWriteRepeatRPfile(ID,function(err,data){
        if(data.length==0){
            User_model.do_writeRPInfo(ID,Name,Reward,Punishment,function(err,data){
               data = {
                   result:'succeed'
               }
               res.send(data) 
            })
        }else{
            data = {
                result:'repeat'
            }
            res.send(data)
        }
    })  
}
exports.setExam = function(req,res,next){
    var Subject = req.body.ExamSubject
    var Classroom = req.body.ExamClass
    var Time = req.body.ExamTime
    var Teacher = req.body.ExamTeacher
    var Flag = req.body.Flag
    User_model.do_checkExamfile(Subject,function(err,data){
        if(data.length==0){
            User_model.do_setExam(Subject,Classroom,Time,Teacher,Flag,function(err,data){
               data = {
                   result:'succeed'
               }
               res.send(data) 
            })
        }else{
            data = {
                result:'repeat'
            }
            res.send(data)
        }
    }) 
}
exports.get_changeApply = function(req,res,next){
    var ID = req.body.ID
    User_model.do_changeapplyResult(ID,function(err,data){
        if(data.length>0){
            data={
                Info: data,
                result:'succeed'
            }
        }else{
            data = {
                result:'failed'
            }
        }
        res.send(data)
    })
}
exports.grant = function(req,res,next){
    var ID = req.body.ID
    var Type = req.body.Type
    var Option = req.body.option
    User_model.do_grant(ID,Type,Option,function(err,data){
        data={
            result:'succeed'
        }
        res.send(data)
    })
}
exports.changeInfoApply = function(req,res,next){
    var ID = req.body.ID
    var Name = req.body.name
    var Power = req.body.power
    var Destination = req.body.destination
    var Time = req.body.time
    var Type = req.body.type
    User_model.do_checkRepeatApply(ID,Type,function(err,data){
        if(data.length==0){
            User_model.do_changeInfoApply1(ID,Power,Type,function(err,data){
                User_model.do_changeInfoApply2(ID,Name,Time,Type,Destination,function(err,data){
                    var data={
                        result:'succeed'
                    }
                    res.send(data)
                })
            })
        }else{
            data = {
                result: 'repeat'
            }
            res.send(data)
        }
    })
    
}
exports.checkPower = function(req,res,next){
    var ID = req.body.ID
    User_model.do_checkPower(ID,function(err,data){
        if(data.length>0){
            data ={
                Info:data,
                result: 'granted'
            }
        console.log(data.result)
        }else{
            data = {
                result: 'ungranted'
            }
        }
        res.send(data)
    })
}
exports.changeTelInfo = function(req,res,next){
    var ID = req.body.ID
    var newInfo = req.body.newInfo
    User_model.do_changeTelInfo(ID,newInfo,function(err,data){
        data ={
            Info:data,
            result: 'succeed'
        }
        res.send(data)
    })
}
exports.changeStatusInfo = function(req,res,next){
    var ID = req.body.ID
    var newInfo = req.body.newInfo
    User_model.do_changeStatusInfo(ID,newInfo,function(err,data){
        data ={
            Info:data,
            result: 'succeed'
        }
        res.send(data)
    })
}
exports.searchFailedSubject = function(req,res,next){
    var ID = req.body.ID
    User_model.do_changeStatusInfo(ID,newInfo,function(err,data){
        if(data.length>0){
            data ={
                Info:data,
                result: 'succeed'
            }   
        }else{
            data={
                result: 'failed'
            }
        }
        res.send(data)
    })
}
exports.checkTeacherSubject = function(req,res,next){
    var Name = req.body.Name
    var Subject = req.body.Subject
    User_model.do_checkTeacherSubject(Name,Subject,function(err,data){
        if(data.length>0){
            data ={
                Info:data,
                result: 'succeed'
            }   
        }else{
            data={
                result: 'failed'
            }
        }
        res.send(data)
    })
}
exports.checkRepeatExam = function(req,res,next){
    var Time = req.body.Time
    var Class = req.body.Class
    User_model.do_checkRepeatExam(Time,Class,function(err,data){
        if(data.length==0){
            data ={
                result: 'succeed'
            }   
        }else{
            data={
                result: 'failed'
            }
        }
        res.send(data)
    })
}
exports.checkExamFlag = function(req,res,next){
    var Subject = req.body.Subject
    User_model.do_checkExamFlag(Subject,function(err,data){
        if(data.length>0){
            data ={
                Info: data,
                result: 'succeed'
            }   
        }else{
            data={
                result: 'failed'
            }
        }
        res.send(data)
    })
}
exports.deleteStuInfo = function(req,res,next){
    var ID = req.body.ID
    User_model.do_deleteStuInfo(ID,function(err,data){
        data = {
            result:'succeed'
        }
        res.send(data)
    })
}
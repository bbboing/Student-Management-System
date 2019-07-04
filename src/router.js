import React, { Component } from 'react'
import App from './App'
import { HashRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.js'
import Login from './pages/Login/Login.js';
import LoginChoice from './pages/LoginChoice/LoginChoice';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo'
import SelectSubInfo from './pages/SelectSubInfo/SelectSubInfo'
import ExamInfo from './pages/ExamInfo/ExamInfo'
import GradeInfo from './pages/GradeInfo/GradeInfo'
import Certificate from './pages/Certificates/Certificates'
import ChooseSubject from './pages/ChooseSubject/ChooseSubject'
import PoorApply from './pages/PoorApply/PoorApply'
import ReissueApply from './pages/ReissueApply/ReissueApply.js'
import HolidayApply from './pages/HolidayApply/HolidayApply.js'
import LeaveApply from './pages/LeaveApply/LeaveApply.js'
import StuInfo from './pages/StuInfo/StuInfo'
import StuCourse from './pages/StuCourse/StuCourse'
import StuExam from './pages/StuExam/StuExam'
import SearchStuGrade from './pages/SearchStuGrade/SearchStuGrade'
import ApplyResult from './pages/ApplyResult/ApplyResult'
import Detail from './pages/Detail/Detail'
import ApplyHistory from './pages/ApplyHistory/ApplyHistory'
import WriteGradeFirst from './pages/WriteGradeFirst/WriteGradeFirst'
import WriteGradeSecond from './pages/WriteGradeSecond/WriteGradeSecond'
import ChangeGrade from './pages/ChangeGrade/ChangeGrade'
import ChangeStuGrade from './pages/ChangeStuGrade/ChangeStuGrade'
import WriteInitialInfo from './pages/WriteInitialInfo/WriteInitialInfo'
import WriteHealthInfo from './pages/WriteHealthInfo/WriteHealthInfo'
import WriteRPInfo from './pages/WriteRPInfo/WriteRPInfo'
import SetExam from './pages/SetExam/SetExam'
import Grant from './pages/Grant/Grant'
import ChangeInfoApply from './pages/ChangeInfoApply/ChangeInfoApply'
import ChangeInfo from './pages/ChangeInfo/ChangeInfo'
import Notice from './pages/Notice/Notice'
import SearchStuInfoForm from './components/searchStuInfoForm/SearchStuInfoForm'
import SearchStuGradeForm from './components/searchStuGradeForm/SearchStuGradeForm'
import SearchStuExamForm from './components/searchStuExamForm/SearchStuExamForm'
import SearchStuCourseForm from './components/searchStuCourseForm/SearchStuCourseFrom'
import DeleteForm from './components/DeleteForm/DeleteForm'

export default class router extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path='/LoginChoice' component={LoginChoice}></Route>
                        <Route path='/Login' component={Login}></Route>
                        <Route path='/HomePage' component={HomePage}></Route>
                        <HomePage>
                            <Route path='/Notice' component={Notice}></Route>
                            <Route path='/request/poorApply' component={PoorApply}></Route>
                            <Route path='/request/stayApply' component={HolidayApply}></Route>
                            <Route path='/request/leaveApply' component={LeaveApply}></Route>
                            <Route path='/request/reissueApply' component={ReissueApply}></Route>
                            <Route path='/request/changeInfoApply' component={ChangeInfoApply}></Route>
                            <Route path='/request/result' component={ApplyResult}></Route>
                            <Route path='/searchForStu/personalInfo' component={PersonalInfo}></Route>
                            <Route path='/searchForStu/subjectInfo' component={SelectSubInfo}></Route>
                            <Route path='/searchForStu/examInfo' component={ExamInfo}></Route>
                            <Route path='/searchForStu/gradeInfo' component={GradeInfo}></Route>
                            <Route path='/searchForStu/certificates' component={Certificate}></Route>
                            <Route path='/chooseCourse/selected' component={SelectSubInfo}></Route>
                            <Route path='/chooseCourse/chooseSubject' component={ChooseSubject}></Route>
                            <Route path='/changeInfo' component={ChangeInfo}></Route>

                            <Route path='/searchForTeacher/stuInfo' component={SearchStuInfoForm}></Route>
                            <Route path='/teacher/StuInfo' component={StuInfo}></Route>
                            <Route path='/searchForTeacher/stuCourse' component={SearchStuCourseForm}></Route>
                            <Route path='/teacher/StuCourse' component={StuCourse}></Route>
                            <Route path='/searchForTeacher/stuExam' component={SearchStuExamForm}></Route>
                            <Route path='/teacher/StuExam' component={StuExam}></Route>
                            <Route path='/approve/detail' component={Detail}></Route>
                            <Route path='/approve/history' component={ApplyHistory}></Route>
                            <Route path='/stuMarks/writestuGrade' component={WriteGradeFirst}></Route>
                            <Route path='/stuMarks/changeStuGrade' component={ChangeGrade}></Route>
                            <Route path='/changeGrade' component={ChangeStuGrade}></Route> 
                            <Route path='/stuMarks/searchStuGrade' component={SearchStuGradeForm}></Route> 
                            <Route path='/teacher/StuGrade' component={SearchStuGrade}></Route>
                            <Route path='/WriteGradeSecond' component={WriteGradeSecond}></Route> 

                            
                            <Route path='/grant' component={Grant}></Route>
                            <Route path='/writeInfo/writeInitialInfo' component={WriteInitialInfo}></Route>
                            <Route path='/writeInfo/writeHealthInfo' component={WriteHealthInfo}></Route>
                            <Route path='/writeInfo/writeRewardAndPunishment' component={WriteRPInfo}></Route>
                            <Route path='/deleteStuInfo' component={DeleteForm}></Route>
                            <Route path='/setExam' component={SetExam}></Route>
                    </HomePage>
                    </App>
                    
                </Router>  
            </div>
        )
    }
}


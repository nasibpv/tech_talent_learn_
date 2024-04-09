import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Logins from './components/Logins';
import Admin from './components/Admin';
import Staff from './Pages/Staff'
import Students from './Pages/Students';
import Complaint from './Pages/Complaint';
import Leave from './Pages/Leave';
import StaffAttendance from './Pages/StaffAttendance';
import StdAttendance from './Pages/StdAttendance';
import Dashboard from './Pages/Dashboard';
import AddStaff from './Pages/AddStaff';
import AddStudent from './Pages/AddStudent';
import Attendancemark from './Pages/Attendancemark';
import Reply from './Pages/Reply';
import ViewComplaints from './Pages/ViewComplaints';
import SendComplaint from './Pages/SendComplaint';
import LeaveRequest from './Pages/LeaveRequest';
import ViewStdAttendance from './Pages/ViewStdAttendance';
import MarkStdAttendance from './Pages/MarkStdAttendance';
import MarkStaffAttendance from './Pages/MarkStaffAttendance';
import Batch from './Pages/Batch';
import AddBatch from './Pages/AddBatch';
import StudentBatch from './Pages/StudentBatch';
import EditBatch from './Pages/EditBatch';
import EditStaff from './Pages/EditStaff';
import EditStudent from './Pages/EditStudent';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login form' element={<Logins/>} ></Route>
      <Route path='/' element={<Admin/>}>
        <Route path='' element={<Dashboard/>}></Route>
        <Route path='/student' element={<Students/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/complaint' element={<Complaint/>}></Route>
        <Route path='/viewcomplaint' element={<ViewComplaints/>}></Route>
        <Route path='/sendcomplaint' element={<SendComplaint/>}></Route>
        <Route path='/leave' element={<Leave/>}></Route>
        <Route path='/leaveRequest' element={<LeaveRequest/>}></Route>
        <Route path='/staffattendance' element={<StaffAttendance/>}></Route>
        <Route path='/stdattendance/:id' element={<StdAttendance/>}></Route>
        <Route path='/studentBatch' element={<StudentBatch/>}></Route>
        <Route path='/viewAttendance' element={<ViewStdAttendance/>}></Route>
        <Route path='/addstaff' element={<AddStaff/>}></Route>
        <Route path='/editstaff/:id' element={<EditStaff/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/editstudent/:id' element={<EditStudent/>}></Route>
        <Route path='/reply/:id' element={<Reply/>}></Route>
        <Route path='/todayAttendance/:id' element={<MarkStdAttendance/>}></Route>
        <Route path='/MarkstaffAttendance' element={<MarkStaffAttendance/>}></Route>
        <Route path='/attendance' element={<Attendancemark/>}></Route>
        <Route path='/batch' element={<Batch/>}></Route>
        <Route path='/addBatch' element={<AddBatch/>}></Route>
        <Route path='/editbatch/:id' element={<EditBatch/>}></Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;

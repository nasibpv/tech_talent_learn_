import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {attendanceData, leaveData, complaint,loginReducer,staffData,studentData,staffAttendance,complaintSend,leaveRequest,batchData,addBatchDetails} from '../Reducer/reducers'
// reducer
const reducer=combineReducers({
    loginUser:loginReducer,
    staffs:staffData,
    student:studentData,
    leave:leaveData,
    complaint,
    studentAttendance:attendanceData,
    staffAttendance,
    sendComplaint:complaintSend,
    leaveRequest,
    batchData,
    batchDetails:addBatchDetails
})


// middleware
const middleware=[thunk]
// create store
const store =createStore(reducer,applyMiddleware(...middleware))

export default store

import {SUCCESS,FAIL} from "../Constants/restConstants"


export const loginReducer=(state={loginUser:[]},action)=>{
    // console.log(action);
    // dispatch data geting = action
    switch(action.type){
        // statusCode check 200 or 404
            case 200:
                return {
                    user:action.payload.users
                }
            case 404 :
                return {
                    user:action.payload.statusCode
                }
            default:
                    return state
        }
}
export const staffData=(state={staffs:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                staffs:action.payload.staffs
            }
        case FAIL :
            return {
                staffs:action.payload
            }
        default:
                return state
    }
}
export const studentData=(state={student:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                student:action.payload.students
            }
        case FAIL :
            return {
                student:action.payload
            }
        default:
                return state
    }
}
export const leaveData=(state={leave:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                leave:action.payload.leave
            }
        case FAIL :
            return {
                leave:action.payload
            }
        default:
                return state
    }
}
export const complaint=(state={complaint:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                complaint:action?.payload?.request
            }
        case FAIL :
            return {
                complaint:action.payload
            }
        default:
                return state
    }
}
export const attendanceData=(state={attendance:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                attendance:action.payload.stdAttendance
            }
        case FAIL :
            return {
                attendance:action.payload
            }
        default:
                return state
    }
}
export const staffAttendance=(state={attendance:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                attendance:action.payload.staffAttendances
            }
        case FAIL :
            return {
                attendance:action.payload
            }
        default:
                return state
    }
}

// 

export const complaintSend=(state={data:[]},action)=>{
    // console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                data:action.payload.data
            }
        case FAIL :
            return {
                data:action.payload
            }
        default:
                return state
    }
}
export const leaveRequest=(state={data:[]},action)=>{
    // console.log(action); 
    switch(action.type){
        case SUCCESS:
            return{
                data:action.payload.data
            }
        case FAIL:
            return{
                data:action.payload
            }
        default:
            return state
    }
}
export const batchData=(state={batchData:[]},action)=>{
    console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                batchData:action.payload
            }
        case FAIL :
            return {
                batchData:action.payload
            }
        default:
                return state
    }
}
export const addBatchDetails=(state={data:[]},action)=>{
    console.log(action);
    switch(action.type){
        case SUCCESS:
            return {
                data:action.payload
            }
        case FAIL :
            return {
                data:action.payload
            }
        default:
                return state
    }
}
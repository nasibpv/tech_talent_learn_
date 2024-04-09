import axios from "axios";
import { SUCCESS, FAIL } from "../Constants/restConstants";

export const users = () => async (dispatch) => {

    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/userLogin')
        // console.log(data);
        dispatch(
            {
                payload: data,
                type: data.statusCode
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}


export const staff = () => async (dispatch) => {
    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/staff')
        // console.log(data);
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}


export const students = () => async (dispatch) => {

    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/student')
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}
export const leaves = () => async (dispatch) => {

    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/leave')
        // console.log(data.leave);
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}
export const complaints = () => async (dispatch) => {

    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/request')
        // console.log(data);
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}
export const attendances = () => async (dispatch) => {

    try {
        // url in axios    
        const {data}  = await axios.get('http://localhost:8000/studentAttendance')
        // console.log(data);
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}
export const staffAttendances = () => async (dispatch) => {

    try {
        // url in axios    
        const { data } = await axios.get('http://localhost:8000/staffattendance')
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}

export const stdAttendanceMark = (body) => async (dispatch) => {
    console.log(body);
     // url in axios    
     const { data } = await axios.post('http://localhost:8000/markStudentAttendance', body)
     console.log(data);
    // try {
       
    //     dispatch(
    //         {
    //             payload: data,
    //             type: SUCCESS
    //         }
    //     )
    // }
    // catch (eror) {
    //     dispatch({
    //         payload: eror,
    //         type: FAIL
    //     })
    // }
}
export const staffAttendanceMark = (body) => async (dispatch) => {
    console.log(body);
    const { data } = await axios.post('http://localhost:8000/markStaffAttendance', body)
        console.log(data);
    // try {
        
    //     dispatch(
    //         {
    //             payload: data,
    //         }
    //     )
    // }
    // catch (eror) {
    //     dispatch({
    //         payload: eror,
    //         type: FAIL
    //     })
    // }
}
export const batchs = () => async (dispatch) => {
    try {
        // url in axios    
        const {data}  = await axios.get('http://localhost:8000/batch')
        console.log(data);
        dispatch(
            {
                payload: data,
                type: SUCCESS
            }
        )
    }
    catch (eror) {
        dispatch({
            payload: eror,
            type: FAIL
        })
    }
}



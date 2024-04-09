import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { complaints } from '../Actions/restAction';
import { useNavigate, useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import axios from 'axios';
function Reply() {
    const params = useParams()
    const [error,setError]=useState("")
    const [token,setToken]=useState("")

    const [body,setBody]=useState({
        id:params.id,
        date:"",
        day:"",
        reply:""
        
    })
    const {id,date,day,reply}=body

    console.log(body);


    const location=useNavigate()
    const dispatch = useDispatch()
    const { complaint } = useSelector(state => state.complaint)
    console.log(complaint);
    const userComplaint = complaint?.find(items => items._id === params.id)
    console.log(userComplaint);
        // setId(result._id)
//     const handleInputChange =(e)=>{
//         let {name,value}=e.targrt;
//         setState({...state,[name]:value})
//     };

const handleSubmit = async(e)=>{
    e.preventDefault();
    if( !day || !reply){
        setError("please input all input Field")
    }
    else{
        
        const {data} = await axios.post('http://localhost:8000/reply', body,{
            headers: {
              'Content-Type': 'application/json',
              'access-token': `${token}`,
            },
          })
        alert(data.message)
        location('/complaint')
        // window.location.reload(false);
        

    }
}
const handleClose=()=>{
    location(-1)
}
const handleInputChange=(e)=>{
    let{name,value}=e.target
    setBody({...body,[name]:value})
}

 
    useEffect(() => {
        dispatch(complaints())
        const items = JSON.parse(localStorage.getItem('token'));
      setToken(items)
    }, [])
    return (
        <>
           {userComplaint? 
           <div className="select-option">
           <form style={{ color: "black", padding: "15px" }} onSubmit={handleSubmit}>
               <h1 className='mb-5' style={{ textAlign: "center" }}>New Complaint</h1>
               <Row >
                <div className='text-end'>
                    <label for='date'>Date : </label>

                    <input id='date' type='date' name='date' value={date} onChange={handleInputChange}/>
                    
                </div>
               </Row>
               <Row className='mt-2 p-2'>
                  <div className='col-3'> <h2  >Name  </h2></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'><h2 className='text-dark'>{userComplaint.name}</h2> </div>
               </Row>
               <Row className='p-2 '>
                  <div className='col-3'> <p >Email  </p></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'><h5>{userComplaint.email}</h5> </div>
               </Row>
               <Row className='p-2 '>
                  <div className='col-3'> <p >User  </p></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'><h5>{userComplaint.user}</h5> </div>
               </Row>
               <Row className='p-2 '>
                  <div className='col-3'> <p >Cource  </p></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'><h5>{userComplaint.cource}</h5> </div>
               </Row>
     
               <Row className='p-2 '>
                  <div className='col-3'> <p >Reason  </p></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'><p style={{color:"#2596be"}}>{userComplaint.reason}</p> </div>
               </Row>
               <Row className='p-2'>
                  <div className='col-3'><label for="date" className='me-4'>Complaint Date </label></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'>
                        <p >{userComplaint.date.slice(0,10)} ({userComplaint.day})</p>
                   </div>
               </Row>
               <Row className='p-2'>
                  <div className='col-3'>
                   <label for="days" className='me-4'>Reply Day </label></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'>
                  <select name="day" id="days"  value={day} onChange={handleInputChange}>
                   <option value="" ></option>
                   <option value="monday">Monday</option>
                   <option value="tuesday">Tuesday</option>
                   <option value="wednesday">Wednesday</option>
                   <option value="thursday">Thursday</option>
                   <option value="friday">Friday</option>
                   <option value="saturday">Saturday</option>
               </select><br />
               </div>
               </Row>
               <Row className='p-2 w-100'>
                  <div className='col-3'><label for="reply" className='me-4'>Reply </label></div>
                  <p className='col-1'>:</p> 
                  <div className='col-8'>
                  <textarea id="reply" name="reply"  value={reply} onChange={handleInputChange}>
                   </textarea>
                   </div>
               </Row>
               
               <div >
                   <label for="reply" className='me-4'></label>
                   
               </div>
               {error && <h4 className='text-danger text-center'>*{error}*</h4>}
               <div className='text-center mt-5 p-2' >
                   <Button className='w-25' type='button' variant="primary" onClick={handleClose}>Close</Button>
                   <Button className='w-25' type='submit' style={{ textAlign: "center", marginLeft: 5 }} variant="danger" onChange={handleInputChange}> OK </Button>
               </div>
           </form>
           
       </div>
            :""}

        </>
    )
}

export default Reply
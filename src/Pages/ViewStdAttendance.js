import React, { useEffect, useState,useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import '../style/Attendance.css';
import { useDispatch, useSelector } from 'react-redux';
import { attendances } from '../Actions/restAction';
function ViewStdAttendance() {
  const [isOpen,setOpen]=useState(false)
  const[course,setCourse]=useState('')
  const[email,setEmail]=useState('')
  // console.log(email);
  const[user,setUser]=useState('')
  // console.log(course);
  // console.log(student);
  // console.log(course);
  function Mearnstd(){
    setOpen(!false)
    // setCourse('mearn')
  }
  function Close(){
    setOpen(false)
    // setStudent('')
  }
  
  const dispatch=useDispatch()

  const {attendance}=useSelector(state=>state.studentAttendance)
  // console.log(attendance);
  const cource=useMemo(()=>{
    return attendance?.find((item)=>item?.email==email)?.cource
},[attendance])
const all= attendance?.filter(item=>item?.cource==cource)
const date=attendance?.filter(item=>item?.email==email)
// console.log(all);

  console.log(date);
//   setCourse(cartCount)

  // function handle(){
  //   attendance.map((item)=>{
  //     if(item.cource==course){
  //       setStudent(item)
  //       setOpen(!false)
  //       const restAction={item}
  //     }
  //   })
  // }
  useEffect(()=>{
  
    dispatch(attendances())
    const token = JSON.parse(localStorage.getItem('token'))
    const email = JSON.parse(localStorage.getItem('mail'))
    setUser(token)
    setEmail(email)
  },[])
  return (
    <>
      <div style={{overflowY:"auto",minHeight:"85vh",display:isOpen?"none":"block"}}>
        <div>
        <div className='bg-light staffbox'> 
        <div className='row g-1 staffHeader'>
    <div className='col-7 p-2 ps-3 '>
            <h4 >Attendance</h4>
    </div>      
     </div>
        </div>
          <div>
          <div className=''>
             
    </div>
          <Table striped bordered hover className='' >
            <thead>
             
              <tr>
                <th>#</th>
                <th >Date</th> 
                <th >Status</th>
                
              </tr>
  
             
             
            </thead>
             <tbody>
              
               {/* {
                date?.map((item,index)=>(
                    
                  <tr >
                    <td className='text-dark'>{index+1}</td>
                    {
                    date?.map((item)=>(
                        
                            item.attendance?.map((day)=>(
                              <td >{(day.date)}</td>
                              // <td style={{color:day.Status=="Absent"?"red":"green"}}>{day.Status}</td>

                            ))
                          
                    ))
                }
                  </tr>
                  ))
                } */}
                {
                  date?.map((item)=>(
                    item.attendance?.map((item,index)=>(
                      <tr >
                        <td>{index+1}</td>
                        <td>{item.date}</td>
                        <td style={{color:item.Status=="absend"?"red":"green"}}>{item.Status}</td>
                      </tr>
                    ))
                  ))
                }
           </tbody>      
          </Table>
          </div>
        </div>
      </div>
    </>
  )
}


export default ViewStdAttendance
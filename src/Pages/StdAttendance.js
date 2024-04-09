import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../style/Attendance.css';
import { useDispatch, useSelector } from 'react-redux';
import { attendances } from '../Actions/restAction';
function StdAttendance() {
  const params = useParams()
  console.log(params.id);
  const [isOpen,setOpen]=useState(false)
  // const[course,setCourse]=useState('MEARN')
  const[user,setUser]=useState('')
  const[email,setEmail]=useState('')
  const navigate=useNavigate()

  function Mearnstd(){
    setOpen(!false)
    // setCourse('mearn')
  }
  function Close(){
    // setOpen(false)
    // setCourse('')
    // setStudent('')
    navigate(-1)
  }
  
  const dispatch=useDispatch()
 

  const {attendance}=useSelector(state=>state.studentAttendance)
  const all= attendance?.filter(item=>item?.batchId==params.id )
  const date= attendance?.map(item=>item).slice(-1)
    console.log(date);
  useEffect(()=>{
    dispatch(attendances())
    
    const token = JSON.parse(localStorage.getItem('usertype'))
    const email = JSON.parse(localStorage.getItem('mail'))
    setUser(token)
    setEmail(email)
  },[])
  return (
    <div>
        <div style={{overflowY:"auto",minHeight:"85vh"}}>
        <div >
        <div className=' bg-light staffbox'> 
        <div className='row g-1 staffHeader'>
    <div className='col-7 p-2 ps-3 '>
            <h4 >Student Attendance</h4>
    </div>  
    <div  className='col-5 text-end p-2 ps-3 '>
            <Button onClick={Close} className='me-3' variant="dark"><i class="fa-solid fa-user-plus"></i>Close</Button>
      
    </div>     
     </div>
        </div>
          <div>
          <div className=''>
              <div  className='col-5 text-start p-2'>
            <Link style={{display:user==="STAFF"?"block":"none"}} to={`/todayAttendance/${params.id}`}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Today Attendance </Button></Link>
    </div>               
    </div>
          <Table striped bordered hover className='' >
            <thead>
              <tr>
                <th>#</th>
                <th >Name</th>
                {
                  date?.map((item)=>(
                        
                            item?.attendance?.map((day)=>(
                              <th style={{display:item?.attendance==''?'block':""}} >{(day?.date)}</th>
                            ))
                    ))
                }
              </tr>
             
            </thead>
             <tbody>
              
               {
                all?.map((item,index)=>(
                  <tr >
                    <td className='text-dark' >{index+1}</td>
                    <td  className='text-dark' >{item.name}</td>
                    {item.days?.map((day)=>(
                      <td className='text-dark'>{day.date.slice(0,10)}</td>
                    ))
                    }
                    {
                      item.attendance?.map((atn)=>(
                        <td style={{color:atn.Status=="absend"?"red":"green"}}>{atn.Status}</td>
                      ))
                    }
                  </tr>
                  ))
              }
           </tbody>      
          </Table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StdAttendance
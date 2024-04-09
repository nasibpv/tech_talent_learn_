import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { staffAttendances, staff } from '../Actions/restAction';
import { useDispatch, useSelector } from 'react-redux';
import Attendancemark from './Attendancemark';

function StaffAttendance() {
  const [isOpen, setOpen] = useState(false)
  // const[course,setCourse]=useState('')
  const [user, setUser] = useState('')

  const dispatch = useDispatch()

  const { attendance } = useSelector(state => state.staffAttendance)
  const date= attendance?.map(item=>item.attendance).slice(-2)
  useEffect(() => {
    dispatch(staffAttendances())
    const token = JSON.parse(localStorage.getItem('usertype'))
    setUser(token)
  }, [])

  return (
    <>
      <div style={{ overflowY: "auto", minHeight: "85vh" }}>
        <div>
          <div className='bg-light staffbox'>
            <div className='row g-1 staffHeader'>
              <div className='col-7 p-2 ps-3 '>
                <h4 >Staff Attendance</h4>
              </div>
            </div>
          </div>
          <div>
            <div className=''>
              <div className='col-5 text-start p-2'>
                <Link style={{ display: user === "ADMIN" ? "block" : "none" }} to={'/MarkstaffAttendance'} ><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Today Attendance </Button></Link>
                {/* <p style={{display:user==="admin"?"block":"none"}} ><Attendancemark/>    </p> */}
              </div>
            </div>
            <Table striped bordered hover className='' >
              <thead>
                <tr>
                  <th>#</th>
                  <th >Name</th>
                  
                  {/* {
                    date?.slice(-2)?.map((item) => (

                      item?.attendance?.map((day) => (
                        <td >{(day?.date?.slice(8, 10))}/{(day.date.slice(0, 3))}/{(day.date.slice(-2))}</td>
                      ))

                    ))
                  } */}

                  {
                    date?.map(item=>(
                      item?.map(dates=>(
                        <td >{dates?.date}</td>
                      ))
                    ))
                  }
                </tr>

              </thead>
              <tbody>

                {
                  attendance?.map((item, index) => (
                    <tr >
                      <td className='text-dark' >{index + 1}</td>
                      <td className='text-dark' >{item.name.toUpperCase()}</td>
                      {
                        item.attendance?.map((atd) => (
                          
                          <td style={{ color: atd?.Status == "ABSENT " ? "red" : "green" }}>{atd?.Status}</td> 
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
    </>
  )
}

export default StaffAttendance
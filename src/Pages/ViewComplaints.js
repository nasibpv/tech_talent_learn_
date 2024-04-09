import React, { useEffect, useState,useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { complaints } from '../Actions/restAction';


function ViewComplaints() {
    const [usertype, setUsrtype] = useState('')
    const [profile, setProfile] = useState([])
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()


    const {complaint} = useSelector(state =>state?.complaint)
    const mycomplaint=useMemo(()=>{
      return complaint?.filter((item)=>item?.email===userId)
  },[complaint])



    useEffect(() => {
        dispatch(complaints())
        const items = JSON.parse(localStorage.getItem('token'));
        const email = JSON.parse(localStorage.getItem('mail'));
        setUsrtype(items)
        setUserId(email)

      })

  return (
    <>
      <div style={{display:profile==''?"block":"none"}}>
        <div className='bg-light staffbox'>
          <div className='row g-1 staffHeader'>
            <div className='col-7 p-2 ps-3 '>
              <h4 >Complaint</h4>
            </div>
            <div style={{display:usertype==="admin"?"none":"block"}} className='col-5 text-end p-2 ps-3'>
              <Link to={'/sendcomplaint'}><Button  className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>New Complaint</Button></Link>

            </div>      </div>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Complaint</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            {/* <Button style={{textDecoration:"none",color:"white",backgroundColor:"red"}} variant="link" onClick={() => setProfile(item)}>Reply</Button> */}
            <tbody>
              {
                mycomplaint?.map((item, index) => (
                  item?.email===userId?                
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.reason}</td>
                    {item?.status === "" ?
                        <td >
                            <p className='p-2 m-0 bg-danger text-center text-light rounded'>Pending</p>
                        </td>
                        :                      
                         <td ><Button className='w-100'  style={{backgroundColor:"blue",color:'white',textDecoration:"none"}}  variant="link" onClick={() => setProfile(item)}>View</Button></td>

                      }      
                 </tr>
                 :""
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
      {/* <div>
        {profile.status==''?
   
          : ''
          }
      </div> */}
      <div>
        {profile.status==="view"?

          <div className="select-option">
            <form style={{ color: "black", padding: "15px" }}>
              <h1 className='mb-4' style={{ textAlign: "center" }}>View Request</h1>
              <p className='text-end '>{profile.date.slice(0,10)}({profile.day})</p>
              <h2>Name : {profile.name}</h2>
              <p >Request : <span style={{color:"red"}}>{profile.reason}</span></p>
              <p >Reply Date : {profile.date.slice(0,10)} ({profile.replyDay})</p>
              <p >Reply : <span className='p-1 rounded text-white bg-dark'>{profile.reply}</span></p>
              <div className='text-center mt-5 p-2' >
                <Button className='w-25' type='submit' style={{ textAlign: "center", marginLeft: 5 }} variant="danger" onClick={() => setProfile('')}> Close </Button>             
              </div>                
              </form>
          </div>
           : ' '}
      </div>
    </>
  )
}

export default ViewComplaints
import React, { useEffect, useState,useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {  leaves } from '../Actions/restAction';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import axios from 'axios';

function Leave() {
  const [usertype, setUsertype] = useState('')
  const [userId, setUserId] = useState('')
  // console.log(userId);
  const [profile, setProfile] = useState('')
  const [status,setStatus]=useState()
  const [token, setToken] = useState("")

  const dispatch = useDispatch()
  const [dataFromChild, setDataFromChild] = useState('');
  // Callback function to receive data from the child
  const { leave } = useSelector(state => state.leave)
  // const data=leave?.filter(itam=>itam?.email==userId)

  const data=useMemo(()=>{
    return leave?.filter((item)=>item?.email===userId)
},[leave])
const handleChildData = (data) => {
  setDataFromChild(data);
};
const filteredData = leave?.filter((item) =>
  item?.name?.toLowerCase().includes(dataFromChild.toLowerCase())
);


  const handleClick = async(e) => {
    e.preventDefault()
    if(!status){
      alert('pleace enter leave status')
    }
    else{
      const body={
        id:profile.requestId,
        names:profile.name,
        statuss:status,
      }
      const {data} = await axios.post('http://localhost:8000/leaveReply', body,{
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${token}`,
        },
      })
      alert(data.message)
      setProfile('')
      window.location.reload(false);
    }

  }




  useEffect(() => {
    dispatch(leaves())
    const items = JSON.parse(localStorage.getItem('usertype'));
    const email = JSON.parse(localStorage.getItem('mail'));
    setUserId(email)
    setUsertype(items)
    const token = JSON.parse(localStorage.getItem('token'));
        setToken(token)

  },[])
 
  return (
    <>
      <div style={{ display: profile == "" ? "block" : "none"}}>
        <div className='bg-light staffbox'>
          <div className=' g-1 staffHeader' style={{display:'flex',justifyContent:"space-between"}}>
            <div className=' p-2 ps-3 ' >
              <h4 >Leave Management</h4>
            </div>
              {
                usertype=='ADMIN'?
                <div className=' text-end p-2 ps-3' >
                <SearchBar onChildData={handleChildData}/>
              </div>
              :
                <div className=' text-end p-2 ps-3' >
              <Link to={'/leaveRequest'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Leave Request</Button></Link>
            </div> 
              }           
            {/* <div className='col-5 text-end p-2 ps-3' style={{display:usertype=="ADMIN"?"none":"block"}}>
              <Link to={'/leaveRequest'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Leave Request</Button></Link>
            </div>      
            <div className='col-5 text-end p-2 ps-3' style={{display:usertype=="ADMIN"?"block":"none"}}>
              <SearchBar onChildData={handleChildData}/>
            </div>       */}
            </div>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th style={{display:usertype=="ADMIN"?"block":"none"}}>Name</th>
                {
                  usertype=="ADMIN"?
                  <th>Cource</th>
                  :
                  <th>Reason</th>}
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usertype=="ADMIN"?
                filteredData ?.map((item, index) => ( usertype == "ADMIN" ?
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name.toUpperCase()}</td>
                    <td>{item.cource.toUpperCase()}</td>
                    {item.status == "" ?
                        <td > <Button variant="link" onClick={() => setProfile(item)}>Status</Button></td>
                        :                      
                         <td style={{color:item.status=="aprove"?"green":"red"}}>{item.status}</td>

                      }                  </tr>
                  : 
                      // item.email==userId?
                      <tr  >
                      <td>{index + 1}</td>
                      <td>{item.name.toUpperCase()}</td>
                      <td>{item.reason.toUpperCase()}</td>
                      {
                      item.status == "" ?
                        <td className='text-center'><span className='w-100 p-2 rounded' style={{backgroundColor:"orange",color:'white'}}>pending</span></td>
                        :                      
                        <td className='text-center'> <span className=' p-2 ps-3 pe-3 rounded'  style={{backgroundColor:item.status=="aprove"?"green":"red",color:'white'}}>{item.status}</span></td>
                      }
                    </tr>
                      // :""
                    // : ""
                )):
                 data?.map((item, index) => ( 
                    <tr  >
                    <td>{index + 1}</td>
                    <td>{item.reason}</td>
                    {
                    item.status == "" ?
                      <td className='text-center'><span className='w-100 p-2 rounded' style={{backgroundColor:"orange",color:'white'}}>pending</span></td>
                      :                      
                      <td className='text-center'> <span className=' p-2 ps-3 pe-3 rounded'  style={{backgroundColor:item.status=="aprove"?"green":"red",color:'white'}}>{item.status}</span></td>
                    }
                  </tr>
              ))
              }
            </tbody>
          </Table>
        </div>
      </div>
      <div>
        {profile ?
          <div className="select-option">
            <form style={{ color: "black", padding: "15px" }}>
              <h1 className='mb-4' style={{ textAlign: "center" }}>Leave Request</h1>
              <p className='text-end '>{profile.date.slice(0,10)}</p>
              <h2>Name : {profile.name.toUpperCase()}</h2>
              <p >Cource : {profile.cource.toUpperCase()}</p>
              <p >Reason : <span style={{color:"red"}}>{profile.reason.toUpperCase()}</span></p>
              <p>Leave Date : <span className='p-1 rounded bg-light text-primary'>{profile.leaveDate.slice(0,10)}</span></p>
              <p > Day : <span className='p-1 rounded bg-light text-primary'>{profile.day}</span></p>
          <label for="days" className='me-4'>Status</label>
          <select name="days" id="days" onClick={(e)=>setStatus(e.target.value)}>
            <option className='' value=""></option>
            <option className='bg-primary' value="aprove">Aprove</option>
            <option className='bg-danger' value="reject">Reject</option>
          </select>
              <div className='text-center mt-5 p-2' >
                <Button className='w-25' onClick={()=>setProfile('')} variant="primary">Close</Button>
                <Button className='w-25' type='submit'onClick={handleClick}  style={{ textAlign: "center", marginLeft: 5 }} variant="danger"> OK </Button>
              </div>                
              </form>
          </div>
          : ' '}
      </div>
    </>
  )
}

export default Leave
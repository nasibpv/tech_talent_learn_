import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { complaints } from '../Actions/restAction';
import SearchBar from './SearchBar';

function Complaint() {
  const [usertype, setUsrtype] = useState('')
  const [profile, setProfile] = useState('')
  const [dataFromChild, setDataFromChild] = useState('');

  const dispatch = useDispatch()
  const { complaint } = useSelector(state => state.complaint)
  // console.log(usertype);
  const handleChildData = (data) => {
    setDataFromChild(data);
  };
  const filteredData = complaint?.filter((item) =>
    item?.name?.toLowerCase().includes(dataFromChild.toLowerCase())
  );
  

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value) {
      setProfile('')
    }
    setProfile('')
  }
  useEffect(() => {
    
    dispatch(complaints())
    const items = JSON.parse(localStorage.getItem('usertype'));
    setUsrtype(items)
  }, [])
  return (
    <>
      <div style={{ display: profile == "" ? "block" : "none" }}>
        <div className='bg-light staffbox'>
          <div className='g-1 staffHeader' style={{display:'flex',justifyContent:"space-between"}}>
            <div className=' p-2 ps-3 '>
              <h4 >Request Management</h4>
            </div>
            {
              usertype=='ADMIN'?
              <div className=' text-end p-2 ps-3'>
              <SearchBar onChildData={handleChildData}/>
            </div>  
            :
          <div className='col-5 text-end p-2 ps-3'>
          <Link to={'/leaverequest'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Leave Request</Button></Link>
        </div>
            }
           
            
          </div>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            {/* <Button style={{textDecoration:"none",color:"white",backgroundColor:"red"}} variant="link" onClick={() => setProfile(item)}>Reply</Button> */}
            <tbody>
              {
                filteredData?.map((item, index) => (usertype == "ADMIN" ?
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.user} ({item.cource})</td>
                    {item.status === "" ?
                      <td ><Button href={`reply/${item._id}`} className='me-3' variant="light"><i class="fa-solid fa-user-plus"></i>Reply</Button>

                      </td>
                      :
                      <td ><Button style={{ backgroundColor: "blue", color: 'white', textDecoration: "none" }} variant="link" onClick={() => setProfile(item)}>View</Button></td>

                    }

                  </tr>
                  : ""
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
     
      <div>
        {profile.status == "view" ?

          <div className="select-option">
            <form style={{ color: "black", padding: "15px" }}>
              <h1 className='mb-4' style={{ textAlign: "center" }}>View Request</h1>
              <p className='text-end '>{profile.date}</p>
              <h2>Name : {profile.name}</h2>
              <p >User : {profile.user}</p>
              <p >Request : <span style={{ color: "red" }}>{profile.reason}</span></p>
              <p >Reply Date : {profile.date} ({profile.day})</p>
              <p >Reply : {profile.reply}</p>
              <div className='text-center mt-5 p-2' >
                <Button className='w-25' onClick={handleClick} variant="primary">Close</Button>
                <Button className='w-25' type='submit' style={{ textAlign: "center", marginLeft: 5 }} variant="danger"> OK </Button>

              </div>
            </form>
          </div>



          : ' '}
      </div>
    </>
  )
}


export default Complaint
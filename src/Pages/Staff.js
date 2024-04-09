import { React, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {  Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { staff } from '../Actions/restAction';
import axios from 'axios';
import SearchBar from './SearchBar';


function Staff() {

  const [profile, setProfile] = useState([])
  const dispatch = useDispatch()
  const { staffs ,loading} = useSelector(state => state.staffs)
  const [dataFromChild, setDataFromChild] = useState('');
  const [token,setToken]=useState('')

  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setDataFromChild(data);
  };
  const filteredData = staffs?.filter((item) =>
    item?.name?.toLowerCase().includes(dataFromChild.toLowerCase())
  );
  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value) {
      setProfile('')
    }
    setProfile('')
  }
  const handleClickDelete = async(id,e) => {
     
    const  result  = await axios.delete('http://localhost:8000/deleteStaff/'+id,{
      headers: {
        'Content-Type': 'application/json',
        'access-token': `${token}`,
      },
    })
      alert(`${result.data.message} ${e}`)
      window.location.reload();
     
    }
  useEffect(() => {
    dispatch(staff())
    setProfile('')
    const items = JSON.parse(localStorage.getItem('token'));
    setToken(items)
  }, [])
  if(loading){
    return<h2>Loading...</h2>
  }

  return (
    <>
      <div style={{ display: profile == '' ? "" : "none" }}>
        <div className='bg-light staffbox'>
          <div className='row g-1 staffHeader'>
            <div className='col-7 p-2 ps-3 '>
              <h4 >STAFF MANAGMENT</h4>
            </div>
            <div className='col-5 text-end p-2 ps-3 '>
              <Link to={'/addstaff'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Add Staff</Button></Link>
            </div>    
             </div>
             {/* <div className='col-5 text-end p-2 w-100 '>   
               <Link to={'/addstaff'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Add Staff</Button></Link>
            </div> */}
        </div>
        <div >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Cources</th>
                <th style={{width:"250px"}}>
               <SearchBar onChildData={handleChildData} />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filteredData?.map((item, index) => (
                  <tr className='rowHover'>
                    <td>{index + 1}</td>
                    <td><strong>{item.name}</strong></td>
                    <td>
                    
                      <p>{item.cource}                  </p>
                    </td>
                    <td> <Button variant="link" onClick={() => setProfile(item)}>Moredetails</Button></td>
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
              <h1 style={{ textAlign: "center" }}>{profile.name}</h1>
              <p>Name : <strong>{profile.name}</strong> </p>
              <p >Cource : {profile.cource}
                {/* {
                  profile.cources?.map(item=>(
                  <span className='p-0 m-0 '> {item.cource} ,</span>
                  ))
                  } */}
              </p>
              <p>Age : {profile.age}</p>
              <p>Gender : {profile.gender}</p>
              <p>Date of Birth : {String(profile.dob).slice(0,10)}</p>
              <p>Address : {profile.address}</p>
              <p>Place : {profile.place}</p>
              <p>Pin : {profile.pin}</p>
              <p>phone No. : {profile.phonenumber}</p>
              <p>password : <span style={{ color: "red" }}>{profile.password}</span></p>
              <p>Email : {profile.email}</p>
             <div className='container w-75 edit-delete'>
                <Button style={{ textAlign: "center" }} onClick={handleClick} variant="primary">Close</Button>
               
                  <Link to={`/editstaff/${profile.staffId}`}>
                    <Button style={{ textAlign: "center" }} href='editbatch${}' variant="danger">Edit</Button>
      
    </Link> 
                 <Button style={{ textAlign: "center" }} onClick={()=>handleClickDelete(profile.staffId,profile.name)} variant="secondary">Delete</Button>
      
             
  
             </div>
            </form>
          </div>



          : ' '}
      </div>

    </>

  )
}

export default Staff
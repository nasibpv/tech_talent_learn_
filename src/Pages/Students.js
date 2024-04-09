import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { students } from '../Actions/restAction';
import axios from 'axios';
import SearchBar from './SearchBar';
function Students() {
  const [profile, setProfile] = useState([])
  const [items, setItems] = useState([])
  const [token, setToken] = useState('')
  const [dataFromChild, setDataFromChild] = useState('');
  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setDataFromChild(data);
  };

  const dispatch = useDispatch()
  const { student } = useSelector(state => state.student)

  const filteredData = student?.filter((item) =>
  item?.name?.toLowerCase().includes(dataFromChild.toLowerCase())
);

  const handleClickDelete=async(id,name) =>{
    const result = await axios.delete('http://localhost:8000/deleteStudent/'+ id,{
      headers: {
        'Content-Type': 'application/json',
        'access-token': `${token}`,
      },
    })
    console.log(result);
        alert(`${result?.data?.message} ${name}`)
        window.location.reload();
  }
  
  useEffect(() => {
    dispatch(students())
    setProfile('')
    const usertype = JSON.parse(localStorage.getItem('usertype'))
    const token = JSON.parse(localStorage.getItem('token'))
    setItems(usertype)
    setToken(token)

  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value) {
      setProfile('')
    }
    setProfile('')
  } 
  return (
    <>
      <div style={{ display: profile == '' ? "" : "none" }}>
        <div className='bg-light staffbox'>
          <div className='row g-1 staffHeader'>
            <div className='col-7 p-2 ps-3 '>
              <h4 >Student Management</h4>
            </div>
            <div style={{ display: items == "ADMIN" ? "block" : "none" }} className='col-5 text-end p-2 ps-3 '>
              <Link to={'/addstudent'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Add StUdent</Button></Link>
            </div>      
          </div>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th> 
                <th>Name</th>
                <th>Cource</th>
                <th className='w-25'>
                  <SearchBar onChildData={handleChildData}/>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filteredData?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.cource}</td>
                    <td> <Button style={{textDecoration:"none",color:"#5EBEC4"}} variant="link" onClick={() => setProfile(item)}>Moredetails</Button></td>
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
              <p>Age : {profile.age}</p>
              <p>Cource : {profile.cource}</p>
              <p>Gender : {profile.gender}</p>
              <p >batchId : {profile.batchId}</p>
              <p>Date of Birth : {String(profile.dob).slice(0,10)}</p>
              <p>Address : {profile.address}</p>
              <p>Place : {profile.place}</p>
              <p>Pin : {profile.pin}</p>
              <p>phone No : {profile.phonenumber}</p>
              <p style={{display:items=="ADMIN"?"block":"none"}}>password : <span style={{color:"red"}}>{profile.password}</span></p>
              <p>Email : {profile.email}</p>
              <div className='container  w-75 edit-delete'>
                <Button style={{ textAlign: "center" }} onClick={handleClick} variant="primary">Close</Button>
                  <Link to={`/editstudent/${profile.studentId}`} style={{display:items=="STAFF"?"none":""}}>
                    <Button style={{ textAlign: "center" }} href='editbatch${}' variant="danger">Edit</Button>
                  </Link> 
                 <Button type='button' style={{display:items=="STAFF"?"none":""}} onClick={(e)=>handleClickDelete(profile.studentId,profile.name)} variant="secondary">Delete</Button>
              </div>
            </form>
          </div>
          : ' '}
      </div>

    </>
  )
}
export default Students
import {React, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import '../style/NavBar.css'

function Navbars() {
  const [name,setName]=useState('')

  const logout=()=>{
  }
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleLogout = () => {
    setShowLogoutAlert(true);
  };

  const handleConfirmLogout = () => {
    // Add your logout logic here
    alert('Logging out...');
    localStorage.removeItem('mail');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('usertype');
    window.location.reload(false)

  };

  const handleCancelLogout = () => {
    setShowLogoutAlert(false);
  };
  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('name'));
    // console.log(items);
    setName(items);
  },[])
  return (
    <>
      <div className='navbars '>
          <Navbar bg="dark" sticky="top" style={{display:"flex",justifyContent:"space-between",paddingRight:"10px"}}>
        <Navbar.Brand  className='p-2 ps-3'>Welcome {name}</Navbar.Brand>
        <Button variant='' className='' type='button'  onClick={handleLogout}><i class="bi bi-box-arrow-right "></i></Button>
    </Navbar>
   
    </div>
    {showLogoutAlert && (
        <div className="overlay">
          <div className="logout-alert">
            <p>Are you sure you want to logout?</p>
            <button className='handleConfirmLogout' onClick={handleConfirmLogout}>Yes</button>
            <button className='handleCancelLogout' onClick={handleCancelLogout}>No</button>
          </div>
        </div>
      )}
    </>
  )
}


export default Navbars
import { React, useState, useEffect } from 'react'
import '../style/Logins.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Logins() {
  const [userEmail, setEmail] = useState('')
  const [psw, setpsw] = useState('')

  const location = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    const body={
      userId:userEmail,
      password:psw
    }
    // console.log(body);
    const { data } = await axios.post('http://localhost:8000/loginForm',body)
    console.log(data);
    if(data.status){
      alert(data.message)
    alert('Welcome Luminar technoLab')
              localStorage.setItem("usertype", JSON.stringify(data.usertype))
          localStorage.setItem("name", JSON.stringify(data.username))
          localStorage.setItem("mail", JSON.stringify(data.email))
          localStorage.setItem("token", JSON.stringify(data.token))

    location('/')
    }
    else{
      alert(data.message)

    }

  //   user?.map(item => {

  //     // Check the credentials (replace with your actual authentication logic)
    
  //     if (item.email === userEmail) {
  //       if (item.password == psw) {
    
  //         localStorage.setItem("token", JSON.stringify(item.usertype))
  //         localStorage.setItem("name", JSON.stringify(item.name))
  //         localStorage.setItem("mail", JSON.stringify(item.email))
  //         // localStorage.setItem("token", JSON.stringify(item.usertype))
  //         alert('ok')
  //         location('/')
        
  //       }
  //       else {
  // alert('wroung password')
  //       }
  //     }
    
  //   });
  
  }
  const Close=()=>{
    location(-1)
  }


  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <div className='main'>
      <div className=' cont container w-75 row'>
        <div className='col-lg-6 col-md-6 col-sm-12 left-side'>
          {/* <img src='https://i.postimg.cc/MK2dk6WL/download.jpg'/> */}
          <h1 className='heed'>Luminar TechnoLab</h1>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12  border  right-side '>
          <h1 className='title'>Login</h1>
          <Form>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setpsw(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <div className='text-center'>
              <Button variant="secondary" onClick={Close} type="button" className='mt-4 me-3'>
                Close
              </Button>
              <Button variant="primary" onClick={login} type="button" className='mt-4 gt-2'>
                Submit
              </Button>
            </div>

          </Form>
        </div>
      </div>
    </div>

  )
}

export default Logins
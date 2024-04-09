import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditStaff() {
    const params=useParams()
    const [name, setUname] = useState('')
    const [age, setAge] = useState()
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [dob, setDob] = useState()
    const [place, setPlace] = useState("")
    const [pin, setPin] = useState()
    const [phonenumber, setPhoneno] = useState()
    const [email, setEmail] = useState("")
    const [cource, setCource] = useState("")
    const Passwords = name?.slice(0, 4) + dob?.slice(8, 10) + dob?.slice(5, 7) +String(phonenumber).slice(6, 10);
    const [token, setToken] = useState("")

    
    const location=useNavigate()
    const editBatch=async(e)=>{
      e.preventDefault()
      const body={
        staffId:params.id,
        name,
        age,
        gender,
        address,
        dob,
        place,
        pin,
      phonenumber,
      email,
      password: Passwords,
      cource
      }
        console.log(body);
        const result = await axios.post('http://localhost:8000/updateStaffDetails',body,{
          headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`,
          },
        })
        alert(result.data.message)
        location('/staff')


    }
    const fetchEmp = async () => {
        const {data} = await axios.get('http://localhost:8000/editStaff/'+params.id)
        setUname(data.staff.name)
        setAge(data.staff.age)
        setGender(data.staff.gender)
        setAddress(data.staff.address)
        setDob(data.staff.dob)
        setPlace(data.staff.place)
        setPin(data.staff.pin)
        setPhoneno(data.staff.phonenumber)
        setEmail(data.staff.email)
        setCource(data.staff.cource)
    }
   

    
    useEffect(()=>{
        fetchEmp()
        const items = JSON.parse(localStorage.getItem('token'));
        setToken(items)
    },[])
  return (
    <div>
         <div>
      <div className='text-center'><h2 className='addStaffheader'> New Batch </h2></div>
      <Form className='addStaffForm p-3' >
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={name} onChange={(e) => setUname(e.target.value.toUpperCase())} type="text" placeholder="Name" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>age</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age" /></div>
            </div>
          </Form.Group>

          <Form.Group className="mt-3">
            <div className='row' >
              <div className='col-3 mt-1'>
                <Form.Label  >Cource</Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
              <Form.Select bsPrefix='form-select' onChange={(e) => setCource(e.target.value.toUpperCase())} >
      <option value={cource}>{cource}</option>
      <option id='MEARN' value="MEARN">MEARN</option>
      <option id='FLUTTER' value="FLUTTER">FLUTTER</option>
      <option id='python'   value="PYTHON">PYTHON</option>
      <option value="Python Django">PYTHON DJANGO</option>
                                <option value="AL-ML">AL-ML</option>
                                <option value="Software Tester">SOFWARE TESTER</option>
                                <option value="Data Science">DATA SCIENCE</option>
    </Form.Select>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mt-3">
            <div className='row' >
              <div className='col-3 mt-1'>
                <Form.Label as="legend" column >
                  Gender
                </Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
              <Form.Select bsPrefix='form-select' onChange={(e) => setGender(e.target.value.toUpperCase())}>
      <option value={gender}>{gender}</option>
      <option id='MALE'   value="MALE">Male</option>
      <option id='FEMALE' value="FEMALE">Female</option>
      <option id='OTHER'  value="OTHER">Other</option>
    </Form.Select>
              </div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Address</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={address} onChange={(e) => setAddress(e.target.value.toUpperCase())} as="textarea" aria-label="With textarea" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Date of birth</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={dob?.slice(0,10)} onChange={(e) => setDob(e.target.value)} type="date" placeholder="" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Place</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={place} onChange={(e) => setPlace(e.target.value.toUpperCase())} type="text" placeholder="place" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Pin</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={pin} onChange={(e) => setPin(e.target.value)} type="number" placeholder="pin code" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Phone No</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={phonenumber} onChange={(e) => setPhoneno(e.target.value)} type="number" placeholder="number" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Email</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} type="mail" placeholder="mail" /></div>
            </div>
          </Form.Group>
        </Row>

        <div className='text-center mb-1 mt-2'>
          <Button onClick={(e) => editBatch(e)} variant="primary" type='submit'  className='p-2 ps-4 pe-4'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
    </div>
  )
}

export default EditStaff


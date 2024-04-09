import React, { useEffect,  useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function EditBatch() {
    const params=useParams()
    const [uname,setUname]=useState('')
    const [cource,setCource]=useState('')
    const [tutorName,setTutorName]=useState('')
    const [date,setDate]=useState('')
    const [phoneno,setPhoneno]=useState('')
    const [email,setEmail]=useState('')
    const [error,setError]=useState('')
    const [token,setToken]=useState('')
    const location=useNavigate()
    const Close=()=>{
       
        location('/batch')

    }
   
    const editBatch=async(e)=>{
      e.preventDefault()
      const body={
        batchId:params.id,
        batchName:uname,
        tutorName:tutorName,
      cource,
      date,
      phonenumber:phoneno,
      email
      }
        console.log(date);
        const result = await axios.post('http://localhost:8000/editBatchDetails',body, {
          headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`,
          },
        })
        alert(result.data.message)
        location('/batch')
    }
    const fetchEmp = async () => {
        const result = await axios.get('http://localhost:8000/editBatch/'+params.id)
        setUname(result.data.batch.batchName)
        setCource(result.data.batch.cource)
        setTutorName(result.data.batch.tutorName)
        setDate(result.data.batch.batchDate)
        setPhoneno(result.data.batch.phonenumber)
        setEmail(result.data.batch.email)
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
      <Form className='addStaffForm p-3' onSubmit={editBatch}>
        <Row className="mb-3">
          <Form.Group >
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Batch Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control id='batchNAme' value={uname} onChange={(e) => setUname(e.target.value)} name='batchName'  type="text" placeholder="Batch Name" /></div>
            </div>
          </Form.Group>
          <Form.Group >
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Tutor Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control name='tutorName' value={tutorName} onChange={(e) => setTutorName(e.target.value.toUpperCase())}  type="text" placeholder="Tutor Name" /></div>
            </div>
          </Form.Group>
          <Form.Group className="mt-3">
            <div className='row' >
              <div className='col-3 mt-1'>
                <Form.Label>Cource</Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
              <Form.Select bsPrefix='form-select' onChange={(e)=>setCource(e.target.value.toUpperCase())}>
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
          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Starting Date</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={date.slice(0,10)} onChange={(e) => setDate(e.target.value)} type="date" placeholder="" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Phone No</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={phoneno} onChange={(e) => setPhoneno(e.target.value)} type="number" placeholder="number" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Tutor Email</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} type="mail" placeholder="mail" /></div>
            </div>
          </Form.Group>

        </Row>

        <div className='container text-center mb-1 mt-5 '>
        {error && <h4 className='text-danger text-center'>*{error}*</h4>}

       <Row >
            <Col>
                <Button onClick={Close} variant="secondary" type="submit" className='p-2 ps-4 pe-4 '>
                    Close
                  </Button>
            </Col>
              <Col>
                  <Button onClick={(e) => editBatch(e)} variant="primary"  className='p-2 ps-4 pe-4'>
                    Submit
                  </Button>
              </Col>
       </Row>
          
        </div>
      </Form>
    </div>
    </div>
  )
}

export default EditBatch
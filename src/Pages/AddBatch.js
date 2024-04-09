import axios from 'axios';
import {React,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function AddBatch() {
    const [error, setError] = useState('')
    const [batchName, setUname] = useState('')
    const [tutorName, setTutorName] = useState('')
    const [date, setDate] = useState()
    const [phonenumber, setPhoneno] = useState()
    const [email, setEmail] = useState("")
    const [cource, setCource] = useState("")
    const [token,setToken]=useState('')

    const navigate=useNavigate()
    const addBatch = async (e) => {
        e.preventDefault() //automatic run stop
        const batchId = (uuid().slice(0, 4));
        const body = {
          batchId,
          batchName,
          tutorName,
          date,
          email,
          phonenumber,
          cource
        }
        console.log(body);

        if (!batchName || !tutorName || !date|| !email|| !phonenumber||!cource) {
          setError("Please enter full data")
      }
        else{
          const  {data}  = await axios.post('http://localhost:8000/addBatch', body, {
            headers: {
              'Content-Type': 'application/json',
              'access-token': `${token}`,
            },
          })
        alert(data.message)
        // window.location.reload()
        navigate('/batch')
        }
    }
    const Close=()=>{
        navigate('/batch')
    } 
    useEffect(()=>{
      const items = JSON.parse(localStorage.getItem('token'));
      setToken(items)
    },[])
  return (
    <div>
      <div>
      <div className='text-center'><h2 className='addStaffheader'> New Batch </h2></div>
      <Form className='addStaffForm p-3'>
        <Row className="mb-3">
          <Form.Group >
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Batch Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setUname(e.target.value.toUpperCase())} type="text" placeholder="Batch Name" /></div>
            </div>
          </Form.Group>
          <Form.Group >
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Tutor Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setTutorName(e.target.value.toUpperCase())} type="text" placeholder="Tutor Name" /></div>
            </div>
          </Form.Group>
          <Form.Group className="mt-3">
            <div className='row' >
              <div className='col-3 mt-1'>
                <Form.Label>Cource</Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
                <Col sm={7}>
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="python"
                    label="PYTHON"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="Mearn"
                    label="MEARN"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="flutter"
                    label="FLUTTER"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Starting Date</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setDate(e.target.value)} type="date" placeholder="" /></div>
            </div>
          </Form.Group>
          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Phone No</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setPhoneno(e.target.value)} type="number" placeholder="number" /></div>
            </div>
          </Form.Group>
          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Tutor Email</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setEmail(e.target.value.toLowerCase())} type="mail" placeholder="mail" /></div>
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
                  <Button onClick={(e)=>addBatch(e)} variant="primary" type="submit" className='p-2 ps-4 pe-4'>
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

export default AddBatch
import { Header } from 'antd/es/layout/layout';
import axios from 'axios';
import httpHeaders from 'http-headers';
import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function AddStaff() {
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
  const [error,setError]=useState('')
  const [token,setToken]=useState('')
  const location = useNavigate()

  const Passwords = name?.slice(0, 4) + dob?.slice(8, 10) + dob?.slice(5, 7) + phonenumber?.slice(0, 4)

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { languages } = userinfo;

    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  const addStaffs = async () => {
    console.log(token);
    const id = (uuid().slice(0, 4));
    const body = {
      staffId: id,
      name: name,
      age,
      gender,
      address,
      dob,
      place,
      pin,
      email,
      phonenumber,
      password: Passwords,
      cource: cource
    }
    if (!name || !age || !gender || !address|| !dob|| !place||!pin||!email||!phonenumber||!cource) {
      setError("Please enter full data")
  }
  else{
  
      const fetchData = async () => {
        const apiUrl = 'http://localhost:8000/addStaffs';
        const authToken = token;

  
        try {
          const result = await axios.post(apiUrl, body, {
            headers: {
              'Content-Type': 'application/json',
              'access-token': `${token}`,
            },
          });
  
          alert(result.data.message)
      location(-1)
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
  }

    

    }
    useEffect(()=>{
      const items = JSON.parse(localStorage.getItem('token'));
      setToken(items)
    },[])

  return (
    <div>
      <div className='text-center'><h2 className='addStaffheader'> New Staff </h2></div>
      <Form className='addStaffForm p-3' >
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Name</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setUname(e.target.value.toUpperCase())} type="text" placeholder="Name" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>age</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control type="text" onChange={(e) => setAge(e.target.value)} placeholder="age" /></div>
            </div>
          </Form.Group>

          <Form.Group className="mt-3">
            <div className='row' >
              <div className='col-3 mt-1'>
                <Form.Label as="legend" >Cource</Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
                <Col sm={7}>
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="Python Django"
                    label="PYTHON DJANGO"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="Mearn"
                    label="MEARN Stack"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="flutter"
                    label="FLUTTER"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="Software Tester"
                    label="SOFTWARE TESTER"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="Data Science"
                    label="DATA SCIENCE"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check  onChange={(e) => setCource(e.target.value.toUpperCase())}
                    inline
                    type="checkbox"
                    value="AL-ML"
                    label="AL-ML"
                    id="formHorizontalRadios3"
                  />
                </Col>
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
                <Col sm={7}>
                  <Form.Check onChange={(e) => setGender(e.target.value.toUpperCase())}
                    type="radio"
                    value="male"
                    label="male"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check onChange={(e) => setGender(e.target.value.toUpperCase())}
                    type="radio"
                    value="female"
                    label="female"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check onChange={(e) => setGender(e.target.value.toUpperCase())}
                    type="radio"
                    value="other"
                    label="other"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Address</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setAddress(e.target.value.toUpperCase())} as="textarea" aria-label="With textarea" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>DOB</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setDob(e.target.value)} type="date" placeholder="" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Place</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setPlace(e.target.value.toUpperCase())} type="text" placeholder="place" /></div>
            </div>
          </Form.Group>

          <Form.Group controlId="formGridEmail" className='mt-3'>
            <div className='row'>
              <div className='col-3 mt-1'><Form.Label>Pin</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setPin(e.target.value)} type="number" placeholder="pin code" /></div>
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
              <div className='col-3 mt-1'><Form.Label>Email</Form.Label></div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7'><Form.Control onChange={(e) => setEmail(e.target.value.toLowerCase())} type="mail" placeholder="mail" /></div>
            </div>
          </Form.Group>
        </Row>

        <div className='text-center mb-1 mt-2'>
        {error && <h4 className='text-danger text-center'>*{error}*</h4>}
          <Button onClick={(e) => addStaffs(e)} variant="primary" type='button'  className='p-2 ps-4 pe-4'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}




export default AddStaff
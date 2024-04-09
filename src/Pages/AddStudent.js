import axios from 'axios';
import {React ,useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { addStudent } from '../Actions/restAction';
// import httpHeaders from 'http-headers';

function AddStudent() {
    const [id, setId] = useState(0)
  const [name, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [courses, setPosition] = useState("")
  const [batchId, setBatchId] = useState("")
  const [totur, setTotur] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [dob, setDob] = useState()
  const [place, setPlace] = useState("")
  const [pin, setPin] = useState(0)
  const [phonenumber, setPhoneno] = useState()
  const [email, setEmail] = useState("")
  const [error,setError]=useState('')
  const [token,setToken]=useState('')
    const [isresult,setisResult]=useState()
  const dispatch=useDispatch()

    const Passwords=name?.slice(0,4)+dob?.slice(8,10)+dob?.slice(5,7)+phonenumber?.slice(0,4)
    const location=useNavigate()
  

    const addStudentDetails = async(e) => {
        e.preventDefault() //automatic run stoped 
        // const id=(uuid().slice(0,4));
        const id=uuid().slice(0,4)
        const body = {
            id,
          name:name,
          age,
          tutor:totur,
          gender,
          dob,
          address,
          place,
          pin,
          email,
          phonenumber,
          password:Passwords,
          cource:courses,
          batchId
        }
        if (!name || !age || !gender || !address|| !dob|| !place||!pin||!email||!phonenumber||!courses) {
            setError("Please enter full data")
        }
        else{

        }
        const result=await axios.post('http://localhost:8000/addStudent', body,{
            headers: {
              'Content-Type': 'application/json',
              'access-token': `${token}`,
            },
          })
        // console.log(result);
            alert(result.data.message)
            location('/student') 
        // dispatch(addStudent(body))
        // result()
        // const fetchData = async () => {
        //     const apiUrl = 'http://localhost:8000/addStaffs';
        //     const authToken = token;
    
      
        //     try {
        //       const result = await axios.post(apiUrl, body, {
        //         headers: {
        //           'Content-Type': 'application/json',
        //           'access-token': `${token}`,
        //         },
        //       });
      
        //       alert(result.data.message)
        //   location(-1)
        //     } catch (error) {
        //       console.error('Error:', error);
        //     }
        //   };
      
        //   fetchData();
      }
useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('token'));
    setToken(items)
},[])

    return (
        <div>
            <div className='text-center'><h2 className='addStaffheader'> New Student </h2></div>
            <Form className='addStaffForm p-3'>
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
                   
                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Cource</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-3'><Form.Select  onChange={(e) => setPosition(e.target.value.toUpperCase())} size="sm">
                            <option></option>
                            <option value='mearn'>Mearn stack</option>
                            <option value="Python Django">Python Django</option>
                                <option value="AL-ML">AL-ML</option>
                                <option value="Flutter">Flutter</option>
                                <option value="Software Tester">Software Tester</option>
                                <option value="Data Science">Data Science</option>
                            <option></option>
      </Form.Select></div>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Batch ID</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control type="text" onChange={(e) => setBatchId(e.target.value)} placeholder="Batch ID" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Totur</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setTotur(e.target.value.toUpperCase())} type="text" placeholder="Tutor Name" /></div>
                        </div>
                    </Form.Group>
                    
        <Form.Group  className="mt-3">
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
                            <div className='col-7'><Form.Control  onChange={(e) => setAddress(e.target.value.toUpperCase())} as="textarea" aria-label="With textarea" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Date of birth</Form.Label></div>
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
                            <div className='col-7'><Form.Control onChange={(e) => setPin(e.target.value)} type="text" placeholder="pin code" /></div>
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
                            <div className='col-7'><Form.Control onChange={(e) => setEmail(e.target.value)} type="mail" placeholder="mail" /></div>
                        </div>
                    </Form.Group>
                    
                    {/* <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Set Password</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" /></div>
                        </div>
                    </Form.Group> */}

                    {/* <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Image</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control  onChange={(e) => setImage(e.target.value)}
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
</div>
                        </div>
                    </Form.Group> */}
                   
                </Row>
{/* 
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <div className='text-center mb-1 mt-3'>
                {error && <h4 className='text-danger text-center'>*{error}*</h4>}

                    <Button onClick={(e) => addStudentDetails(e)} variant="primary" type="submit" className='p-2 ps-4 pe-4'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}


export default AddStudent
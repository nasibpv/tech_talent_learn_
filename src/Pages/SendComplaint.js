import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';

function SendComplaint() {

    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [body, setBody] = useState({
        id: "",
        user: '',
        name: '',
        email: '',
        date: 0,
        days: "",
        cource: "",
        reason: "",
        status: "",
        replyDate: 0,
        reply: "",
    })
    const { id, user, name, email, date, days, cource, reason, replyDate, status, reply } = body;

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setBody({ ...body, [name]: value })
        handleSubmit()
    }
    const location = useNavigate()
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.sendComplaint)
    const handleSubmit =async (e) => {
        
        e.preventDefault();
        if (!date || !days || !reason || !cource) {
            setError("Please input all input fleid");
        } else {
            const {data} = await axios.post('http://localhost:8000/complaintSend', body,{
                headers: {
                  'Content-Type': 'application/json',
                  'access-token': `${token}`,
                },
              })

            alert(data.message)
            location("/viewcomplaint")
       
        }

    }
    const handleClose=()=>{
        location(-1)
    }
    function result() {
        if (data?.status === true) {
            alert(data.message)
            location("/viewcomplaint")
        }
        else if (data?.status === false) {
            alert(data.message)

        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("usertype"))
        const name = JSON.parse(localStorage.getItem('name'));
        const email = JSON.parse(localStorage.getItem('mail'));
        const id = uuid().slice(0, 4)

        setBody({ ...body, id, user, name, email })
        const items = JSON.parse(localStorage.getItem('token'));
        setToken(items)
    }, [])
    return (
        <div>
            <div className="select-option">
                <form style={{ color: "black", padding: "15px" }} onSubmit={handleSubmit}>
                    <h1 className='mb-5' style={{ textAlign: "center" }}>New Complaint</h1>

                    <Row className='mt-2 p-2'>
                        <div className='col-3'> <h2 >Name  </h2></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'><h2 >{body.name}</h2> </div>
                    </Row>
                    <Row className='p-2 '>
                        <div className='col-3'> <h5 >Email  </h5></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'><h6>{body.email}</h6> </div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'><label for="date" className='me-4'>Date </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <input id='date' type='date' name='date' value={date} onChange={handleInputChange} /></div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'>
                            <label for="days" className='me-4'>Day  </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <select name="days" id="days" value={days} onChange={handleInputChange}>
                                <option value="" ></option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                            </select><br />
                        </div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'>
                            <label for="cource" className='me-4'>Cource </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <select name="cource" id="cource" value={cource} onChange={handleInputChange}>
                                <option value="" ></option>
                                <option value="Mearn">Mearn</option>
                                <option value="Python Django">Python Django</option>
                                <option value="AL-ML">AL-ML</option>
                                <option value="Flutter">Flutter</option>
                                <option value="Software Tester">Software Tester</option>
                                <option value="Data Science">Data Science</option>
                            </select><br />
                        </div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'><label for="reason" className='me-4'>Reason </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <textarea id="reason" name="reason" rows="4" cols="18" value={reason} onChange={handleInputChange}>
                            </textarea>
                        </div>
                    </Row>

                    <div >
                        <label for="reply" className='me-4'></label>

                    </div>
                    {error && <h4 className='text-danger text-center'>*{error}*</h4>}
                    <div className='text-center mt-5 p-2' >
                        <Button className='w-25' variant="primary" onClick={handleClose}>Close</Button>
                        <Button className='w-25' type='submit' style={{ textAlign: "center", marginLeft: 5 }} variant="danger" onChange={handleInputChange}> OK </Button>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default SendComplaint
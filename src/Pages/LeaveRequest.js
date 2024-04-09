import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function LeaveRequest() {
    const [error, setError] = useState('');

    const [body, setBody] = useState({
        id: "",
        names: "",
        email: "",
        cource: "",
        applyDate: "",
        reason: "",
        leaveDate: "",
        day: "",
        statuss: "",
        user: ""
    })
    const [token, setToken] = useState("")

    console.log(body);
    const { id, names, email, cource, applyDate, reason, leaveDate, day, statuss, user } = body
    const location = useNavigate()
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setBody({ ...body, [name]: value })
        // setId(uuid().slice(0,3));
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (!leaveDate || !day || !applyDate || !reason) {
            setError("Please enter full data")
        }
        else {
            const {data} = await axios.post('http://localhost:8000/leaveRequest', body,{
                headers: {
                  'Content-Type': 'application/json',
                  'access-token': `${token}`,
                },
              })
            console.log(data);
            alert('Leave Request successfully')
            location('/leave') 
            // result()
        }

    }
    const handleColse=()=>{
        location('/leave')
    }


    function result(){
                if(data.status===true){
                    alert(data.message)
                    location('/leave') 
                }
                else if(data.status===false){
                    alert(data.message)
                }
        }


    useEffect(() => {
        const names = JSON.parse(localStorage.getItem("name"))
        const email = JSON.parse(localStorage.getItem("mail"))
        const user = JSON.parse(localStorage.getItem("usertype"))
        const id = uuid().slice(0, 4)
        setBody({ ...body, id, names, email, user })
        const items = JSON.parse(localStorage.getItem('token'));
        setToken(items)
    }, [])

    return (
        <>
            <div className="select-option">
                <form style={{ color: "black", padding: "15px" }} onSubmit={handleSubmit}>
                    <h1 className='mb-5' style={{ textAlign: "center" }}>Leave Management </h1>
                    <div className='text-end mb-4'>
                        <label for="applyDate" className='me-4'>Apply Date : </label>
                        <input className='border ' id='applyDate' type='date' name='applyDate' value={applyDate} onChange={handleInputChange} />

                    </div>
                    <Row className='mt-2 p-2'>
                        <div className='col-3'> <h2 >Name  </h2></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'><h2 >{body.names}</h2> </div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'>
                            <label for="cource" className='me-4'>Cource</label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <select name="cource" id="cource" value={cource.toUpperCase()} onChange={handleInputChange}>
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
                        <div className='col-3'><label for="leaveDate" className='me-4'>Leave Date </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <input id='leaveDate' type='date' name='leaveDate' value={leaveDate} onChange={handleInputChange} /></div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'>
                            <label for="days" className='me-4'>Leave Day  </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <select name="day" id="day" value={day} onChange={handleInputChange}>

                                <option value=""></option>
                                <option value="MONDAY">Monday</option>
                                <option value="TUESDAY">Tuesday</option>
                                <option value="WEDNESDAY">Wednesday</option>
                                <option value="THURSDAY">Thursday</option>
                                <option value="FRIDAY">Friday</option>
                                <option value="SATURDAY">Saturday</option>
                            </select><br />
                        </div>
                    </Row>
                    <Row className='p-2'>
                        <div className='col-3'><label for="reason" className='me-4'>Reason </label></div>
                        <p className='col-1'>:</p>
                        <div className='col-8'>
                            <textarea id="reason" name="reason" rows="4" cols="20" value={reason.toUpperCase()} onChange={handleInputChange}>
                            </textarea>
                        </div>
                    </Row>
                    <div >
                        <label for="reply" className='me-4'></label>
                    </div>

                    {error && <h4 className='text-danger text-center'>*{error}*</h4>}
                    <div className='text-center mt-5 p-2' >
                        <Button className='w-25' variant="primary" onClick={handleColse}>Close</Button>
                        <Button className='w-25' type='submit' style={{ textAlign: "center", marginLeft: 5 }} variant="danger" onChange={handleInputChange}> OK </Button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default LeaveRequest
import React, { useEffect, useState,useMemo } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { attendances, stdAttendanceMark } from '../Actions/restAction';

function MarkStdAttendance() {
    const params=useParams()
    const [isOpen, setOpen] = useState('')
    const [date, setDate] = useState()
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [statuss, setStatus] = useState('')
    const [id, setid] = useState('')


    // //   console.log(body);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const body = {
        attendanceId: id,
        status: statuss,
        date: date
    }
    console.log(body);

    function dateCheck(e) {

        if (!date) {
            alert('please enter the date')
        }
        else {
            setOpen(true)
        }
    }

    const submit = (e) => {
        alert('ok')
        navigate('/studentBatch')

    }

    const Present =(id,status) => {
        setStatus(status)
        setid(id)
        const body = {
            attendanceId: id,
            status: status,
            date: date
        }
        // dispatch(stdAttendanceMark(body))   

    }

    const handleSubmit = (d1, d2) => {

        // console.log(e,d1,d2);
        const body = {
            attendanceId: d1,
            status: d2,
            date: date
        }
        console.log(body);
        dispatch(stdAttendanceMark(body))
        // dispatch(attendances())
        // console.log(body);
        // window.location.reload(true);

    }


    //
    const { attendance } = useSelector(state => state?.studentAttendance)
    // console.log(attendance);
    const student = attendance?.filter(item => item?.batchId == params.id)
    // const datechecks=student.map(item=>item.attendance)
    console.log(student);

    const students=useMemo(()=>{
        return attendance?.filter((item)=>item?.tutorid == email)
    },[attendance])
    // console.log(students);



    useEffect(() => {

        dispatch(attendances())
        const token = JSON.parse(localStorage.getItem('token'))
        const email = JSON.parse(localStorage.getItem('mail'))
        setUser(token)
        setEmail(email)


    }, [])
    return (
        <>
            <div style={{ display: isOpen ? "none" : "block", minHeight: "85vh", }} className='attendance-date' id='attendance-date-container'>
                <div id='attendance-date'>
                    <div id='attendance-content'>
                        <form>
                            <h1> hii</h1>

                            <div className='col'>
                                <label for="date">Date:</label>
                                <input type="date" className='form-control ' id="date" name="date" min='' max="2024-12-31 " value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div>
                                <p style={{ color: "rad", fontSize: 10 }} >* One date only one time attendance mark</p>
                            </div>

                        </form>
                        <div className='text-center mt-2'>
                            <Button onClick={dateCheck}> OK</Button>

                        </div>

                    </div>
                </div>
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} id='attendance'>
                <div>
                    <form >
                        <Table striped bordered hover className=''>
                            <thead>

                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student?.map((item, index) => (
                                        <tr>
                                            {/* <td ><p name='attendanceId' value={id} onChange={attand} >{item.attendanceId}</p></td> */}
                                            <td  >{index + 1}</td>
                                            <td style={{ color: "black" }} >{item.name}</td>

                                            <td>
                                                <Row className='row g-2 w-100'>
                                                    <Col sm={12} lg={6} md={4} className=''>
                                                    <Button type='button' onClick={(e) => { handleSubmit(item.attendanceId, "Presend")}} className='ps-2 pe-1 border rounded '>Presend</Button>
                                                    </Col>
                                                    <Col sm={12} lg={6} md={4} className='cart-counter'>
                                                        <Button type='button' variant='secondary' onClick={(e) => { handleSubmit(item.attendanceId, "absend") }} className='ps-2  pe-2 border border-danger rounded '>Absend</Button>
                                                    </Col>
                                                </Row>
                                            </td>                                 </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <div className='text-center p-3 '>
                            <Button type='submit ' className='aline-end p-3 border border-secondary' onClick={submit}>Submit </Button>

                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default MarkStdAttendance
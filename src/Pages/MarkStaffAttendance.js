import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { staffAttendanceMark,staffAttendances} from '../Actions/restAction';

function MarkStaffAttendance() {

    const [isOpen, setOpen] = useState(false)
    const [date, setDate] = useState('')
    const [close,setClose]=useState(false)
    // //   console.log(body);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { attendance } = useSelector(state => state?.staffAttendance)
    console.log(attendance);

    const submit=()=>{
        navigate('/staffAttendance')
    }

    // 
    const handleSubmit = (d1, d2) => {
        if(!date){
            alert('Please set Corrent Date')
        }
        else{
            console.log(d1,d2);
            const body = {
                attendanceId: d1,
                status: d2,
                date: date
            }
            dispatch(staffAttendanceMark(body))

        }
    }
    // 

    useEffect(() => {
        dispatch(staffAttendances())
    }, [])
    return (
        <div >

            {/* <div  className='attendance-date' id='attendance-date-container'>
                    <div id='attendance-date'>
                        <div id='attendance-content'>
                            <form>
                                <h1> hii</h1>
    
                                <div className='col'>
                                    <label for="date">Date:</label>
                                    <input type="date" className='form-control ' id="date" name="date" min='' max="2024-12-31 " value={date} onChange={(e)=>setDate(e.target.value)}/>
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
                </div> */}
          <div id='attendance'>
                <div>
                    <form >
                        <div className='text-end'>
                            <input type="date" className='' id="date" name="date" min='' max="2024-12-31 " value={date} onChange={(e) => setDate(e.target.value)&setOpen(true)} />

                        </div>

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
                                    attendance?.map((item, index) => (
                                        <tr>
                                            <td  >{index + 1}</td>
                                            <td style={{ color: "black" }} >{item?.name}</td>

                                            <td>
                                                <Row className='row g-2 w-100' >
                                                    <Col sm={6} lg={2} md={4} className=''>
                                                        <Button type='button' onClick={()=>handleSubmit(item.attendanceId,"PRESENT")} className='ps-2 pe-1 border rounded '>Presend</Button>
                                                    
                                                    </Col>
                                                    <Col sm={6} lg={10} md={8} className='cart-counter'>
                                                        <Button type='button' variant='secondary' onClick={() => handleSubmit(item.attendanceId,"ABSENT")} className='ps-2  pe-2 border border-danger rounded '>Absend</Button>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
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
        </div>
        

    )
}

export default MarkStaffAttendance


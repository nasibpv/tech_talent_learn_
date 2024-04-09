import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';

function Attendancemark() {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    function attand() {
        navigate(-1)
    }

const {attendance}=useSelector(state=>state.staffAttendance)
console.log(attendance);
    useEffect(()=>{

// dispatch(staff())   
 },[])
    return (
        <>
            <div style={{ display: isOpen ? "none" : "block", minHeight: "85vh", }} className='attendance-date' id='attendance-date-container'>
                <div id='attendance-date'>
                    <div id='attendance-content'>
                        <form>
                            <h1> hii</h1>

                            <div className='col'>
                                <label for="date">Date:</label>
                                <input type="date" className='form-control ' id="date" name="trip-start" min="2018-01-01" max="2024-12-31" />
                            </div>
                            <div>
                                <p style={{ color: "rad", fontSize: 10 }} >* One date only one time attendance mark</p>
                            </div>

                        </form>
                        <div className='text-center mt-2'>
                            <Button onClick={() => setOpen(!false)}> OK</Button>

                        </div>

                    </div>
                </div>
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} id='attendance'>
                {/* <table style={{width:" 9%"}}  cellpadding="1">
                    <thead >
                        <tr>
                            <th style={{border:"1px solid black"}}>Name</th>
                            <th style={{border:"1px solid black"}}> Status</th>
                        </tr>
                       
                    </thead>
                   
                    <tbody  >
                        <tr>
                            <td style={{border:"1px solid black"}} for="attent">hiiixdcfvg</td>
                            <td style={{border:"1px solid black"}}>
                            <select id="attent" style={{backgroundColor:"gray"}}>
  <option value="volvo">Volvo</option>
  <option value="audi" selected>Audi</option>
</select>
</td>
                        </tr>
                        <tr>
                            <td>hbj</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                      
                    </tbody>
                </table> */}
                <div>
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
                                attendance?.map((item,index)=>(
                                <tr>
                                    <td >{index+1}</td>
                                    <td >{item.name}</td>
                                    <td >
                                        {/* <select id="attent" style={{ backgroundColor: "gray" }}>
                                        <option value="volvo" style={{backgroundColor:"green"}}>Present</option>
                                        <option value="audi" style={{backgroundColor:"red"}} >Absent</option>
                                        <option selected></option>
                                    </select> */}
                                    
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                {/* <div class="divTable" style={{width:" 9%", border: "2px", solid :"#000"}}>
	<div class="divTableBody mt-5">
		<div class="divTableRow">
			<div class="divTableCell">Name</div>
			<div class="divTableCell">Status</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">HEllllllooo</div>
			<div class="divTableCell"></div>
		</div>
		
	</div>
</div> */}
                <Button onClick={attand}>Submit </Button>
            </div>
        </>

    )
}

export default Attendancemark
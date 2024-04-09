import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { batchs } from '../Actions/restAction'
import SearchBar from './SearchBar'
import axios from 'axios'


function Batch() {
    const [profile, setProfile] = useState([])
    const [error, setErorr] = useState(true)
    const [dataFromChild, setDataFromChild] = useState('');
    const [token, setToken] = useState("")

    const dispatch=useDispatch()
    const {batchData}=useSelector(state=>state.batchData.batchData)
    console.log(batchData);
    // Callback function to receive data from the child
    const handleChildData = (data) => {
      setDataFromChild(data);
    };
    const filteredData = batchData?.filter((item) =>
      item?.batchName?.toLowerCase().includes(dataFromChild.toLowerCase())
    );
    const handleClick = () => {
        setProfile('')
      }
   
    const handleClickDelete = async(id) => {
     
      //  const batchId=id
      console.log(id);
        
        // dispatch(deletBatch(id))
        const { data } = await axios.delete('http://localhost:8000/deleteBatch/'+ id,{
          headers: {
            'Content-Type': 'application/json',
            'access-token': `${token}`,
          },
        })

        alert(data.message)
        setProfile('')
        window.location.reload();
       
      }

      // useEffect(() => {

      //   dispatch(staff())
      //   reload()
      //   setProfile('')
      // }, [])
useEffect(()=>{
  dispatch(batchs())
  const items = JSON.parse(localStorage.getItem('token'));
  setToken(items)
  setProfile('')
},[])

  return (

    <div style={{display:error?"block":"none"}}>
      <div style={{ display: profile == '' ? "" : "none" }} >
        <div className='bg-light staffbox'>
          <div className='row g-1 staffHeader'>
            <div className='col-7 p-2 ps-3 '>
              <h4 >BATCH MANAGMENT</h4>
            </div>
            <div className='col-5 text-end p-2 ps-3 '>
              <Link to={'/addBatch'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>New Batch</Button></Link>
            </div>     
            </div>
        </div>
        <div >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Batch Name</th>
                <th>Totur Nmae</th>
                <th className=' text-end p-2 ps-3'><SearchBar onChildData={handleChildData} />
</th>
              </tr>
            </thead>
            <tbody>
            {
                filteredData?.map((item,index)=>(
                    <tr>
                        <td >{index+1}</td>
                        <td >{item?.batchName}</td>
                        <td >{item?.tutorName}</td>
                        <td> <Button style={{textDecoration:"none",color:"#5EBEC4"}} variant="link" onClick={() => setProfile(item)}>Moredetails</Button></td>
                    </tr>
                ))
            }
            </tbody>

          </Table>
        </div>

      </div>
      <div>
        {profile=='' ?
          '':
          <div className="select-option">
          <form style={{ color: "black", padding: "15px" }}>
            <p >Batch ID : <strong >{profile.batchId}</strong> </p>
            <p>Batch Name : <strong className='text-secondary'>{profile.batchName}</strong> </p>
            <p>Tutor Name : <strong>{profile.tutorName}</strong> </p>
            <p >Cource : {profile.cource}</p>
            <p>Batch Date : {profile.batchDate.slice(0,10)}</p>
            <p>phone No. : {profile.phonenumber}</p>
            <p>Email : {profile.email}</p>
<div className='container w-75 edit-delete'>
              <Button style={{ textAlign: "center" }} onClick={handleClick} variant="primary">Close</Button>
<Link to={`/editbatch/${profile.batchId}`}>
                <Button style={{ textAlign: "center" }} href='editbatch${}' variant="danger">Edit</Button>
  
</Link> 
             <Button style={{ textAlign: "center" }} onClick={()=>handleClickDelete(profile.batchId)} variant="secondary">Delete</Button>
  
</div>          </form>
        </div>
}
      </div>
    </div>
    
  )
}

export default Batch
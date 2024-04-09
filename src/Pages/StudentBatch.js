import {React,useEffect} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { batchs } from '../Actions/restAction'

function StudentBatch() {
    const dispatch=useDispatch()
    const {batchData}=useSelector(state=>state.batchData.batchData)
    console.log(batchData);
    useEffect(()=>{
        dispatch(batchs())
    },[])
  return (
    <div>
      {
        batchData?.map(item=>(
            <div style={{textDecoration:"none"}} >
     <Link to={`/stdattendance/${item.batchId}`} > <Card style={{width:"100%",margin:0}}>
      <p style={{margin:0,padding:10}}>{item.batchName.toUpperCase()}</p>
      </Card></Link>
    </div>
        ))
    }
    </div>
  )
}

export default StudentBatch
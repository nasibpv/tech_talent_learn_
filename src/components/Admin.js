import {
    FaBars,
    // FaPager,
    FaList,
    FaDashcube
} from 'react-icons/fa';
import '../style/Admin.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Navbar';




function Admin() {
    const [items, setItems] = useState([]);
    const location = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    // const [isClose, setIsClose] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        
        return {
            
          width,
          height
        };
      }
      
      console.log(windowDimensions.width);
    // const [usertypes,setusertype]=useState('')
    // const [list,setlist]=useState(false)

    // console.log(usertypes);
    // const result=useSelector(state=>state.loginUser)
    // console.log(result);

    const check=()=>{
        if(1000>=windowDimensions.width){
            if(800>=windowDimensions.width){
                
            }
            
            setIsOpen(true)
        }
    }
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            names: "Dashbord",
            icon: <FaDashcube />
        },
        {
            path: "/staff",
            names: "Staff",
            icon: <FaList />
        },
        {
            path: "/student",
            names: "Student",
            icon: <FaList />
        },
        {
            path: "/complaint",
            names: "Request",
            icon: <FaList />
        },
        {
            path: "/leave",
            names: "Leave",
            icon: <FaList />
        },
        {
            path: "/staffAttendance",
            names: "Staff_Attendance",
            icon: <FaList />
        },
        {
            path: "/studentBatch",
            names: "Std-Attendance",
            icon: <FaList />
        },
        {
            path: "/batch",
            names: "Batchs",
            icon: <FaList />
        }
    ]

    const staffItem = [
        {
            path: "/",
            names: "Dashbord",
            icon: <FaDashcube />
        },
        {
            path: "/student",
            names: "Student",
            icon: <FaList />
        },
        {
            path: "/viewcomplaint",
            names: "Complaint",
            icon: <FaList />
        },
        {
            path: "/leave",
            names: "Leave",
            icon: <FaList />
        },
        {
            path: "/staffAttendance",
            names: "View-Attendance",
            icon: <FaList />
        },
        {
            path: "/studentBatch",
            names: "Std-Attendance",
            icon: <FaList />
        }
    ]

    const studentItem = [
        {
            path: "/",
            names: "Dashbord",
            icon: <FaDashcube />
        },
        {
            path: "/viewcomplaint",
            names: "Complaint",
            icon: <FaList />
        },
        {
            path: "/leave",
            names: "Leave",
            icon: <FaList />
        },
        {
            path: "/viewAttendance",
            names: "View-Attendance",
            icon: <FaList />
        }
    ]


    function usertype() {
        const items = JSON.parse(localStorage.getItem('usertype'));
        if (!items) {
            // location('/')
            location('/home')
            // dispatch(staffAttendances())
        }
        // else{
        //     location('/login')
        // }
    }
    useEffect(() => {
        usertype()
        // dispatch(staffAttendances())
        // dispatch(staff(),staffAttendances())
        const items = JSON.parse(localStorage.getItem('usertype'));
        if (items) {
            setItems(items);
        }
        setWindowDimensions(getWindowDimensions());
        check()
    }, [])

    return (
        <div className='containe content w-100'>
             
            <div style={{ width: isOpen ? "50px" : "300px" }} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{ display: isOpen ? "none" : "block" }} className='logo p-1 mt-2'>{items}</h1>
                    <div style={{ marginLeft: isOpen ? "0px" : "100px", padding: "5px" }} className='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
               <div>
                    {
                        items == 'ADMIN' ?
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className='link' activeclassName="active" >
                                    <div className='icons'>{item.icon}</div>
                                    <div style={{ display: isOpen ? "none" : "block" }} className='link_text'>{item.names}</div>
                                </NavLink>
                            )) :
                            items == 'STAFF' ?
                                staffItem.map((item, index) => (
                                    <NavLink to={item.path} key={index} className='link' activeclassName="active" >
                                        <div className='icons'>{item.icon}</div>
                                        <div style={{ display: isOpen ? "none" : "block" }} className='link_text'>{item.names}</div>
                                    </NavLink>
                                )) :
                                items == 'student' ?
                                    studentItem.map((item, index) => (
                                        <NavLink to={item.path} key={index} className='link' activeclassName="active" >
                                            <div className='icons'>{item.icon}</div>
                                            <div style={{ display: isOpen ? "none" : "block" }} className='link_text'>{item.names}</div>
                                        </NavLink>
                                    )) : ""
                    }
               </div>

            </div>
            <div className='mains'>
                <div className='navbars'><Navbar /></div>
                <div className='dashboadbox border m-1 '>
                    <div className='p-2 border rounded m-2 border-3  '>
                    <Outlet />
                </div>
                </div>
            </div>
        </div>
    )

}

export default Admin
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style/Home.css'
import { Link } from 'react-router-dom';

function Home() {
  const [isOpen, setOpen] = useState(false)
  const [listOpen, setList] = useState(false)

  return (

    <div className='home' style={{ color: isOpen === true ? "gray" : "black", backgroundColor: isOpen === true ? "black" : "white" }} >
        <a href='https://wa.me/18078210951'  className='chat-box'><img className='footer-logo' alt='' src='https://i.postimg.cc/pr9zLVLp/pngwing-com-1.png' /></a>

{/* -------------------------------Content NavBar---------------------------------------------- */}
      <div>
        <Navbar className='nav ps-2 pe-1'>
          <Navbar.Brand href="/home" className='ms-2 '>       
<div className='nav-logo'>
{isOpen?         
<img style={{width:'100%',height:'4vh'}} alt='' src='https://i.postimg.cc/pXjJ6HPs/ttl-high-resolution-logo-white-transparent.png' />                   
  :                 
 <img style={{width:'100%',height:'4vh'}} alt='' src='https://i.postimg.cc/43FBqnDx/ttl-high-resolution-logo-transparent.png' />
}
<p className='logo-name ps-2 m-0' style={{color:isOpen?"#fff":"#5A5A5A"}}>
     <b style={{fontSize:'1.3rem',fontFamily:"serif"}}> T</b>ech <b style={{fontSize:'1.5rem',fontFamily:"serif"}}>T</b>alent <b style={{fontSize:'1.5rem',fontFamily:"serif"}}>L</b>earn
  
</p>  
</div> </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {isOpen ? <button className='night-mood ' style={{ color: "white" }} onClick={() => setOpen(false)}><i class="bi bi-brightness-low-fill"></i></button> : <button className='night-mood' onClick={() => setOpen(true)}><i class="bi bi-moon-stars-fill"></i></button>
              }
              {listOpen ?<Button variant='' className='nav-list border' onClick={() => setList(false)}><i class="bi bi-list"></i></Button>
                : <Button variant='' className='nav-list border' onClick={() => setList(true)}><i class="bi bi-list"></i></Button>

              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
{/* ------------------------------- Content-1 --------------------------------------- */}
      <div className='content-list' style={{display:listOpen?"block":"none"}}>
        <div className='list'><a href='/home' onClick={() => setList(false)}>Home</a></div>
        <div className='list'><a href='#cource' onClick={() => setList(false)}>Cource</a></div>
        <div className='list'><a href='#about' onClick={() => setList(false)}>About us</a></div>
        <div className='list list-last'><a href='/login form' onClick={() => setList(false)}>Login</a></div>
      </div>
      <div className="Content-1" >
   
          <h1 style={{ color: isOpen === true ? "white" : "black" }} className='text-center p-3'>Want to become Softwere Engineer?</h1>
   
        <div className='content-1-card'>
          <div className='content-1-card-2'></div>
        </div>
      </div>
 
{/* ------------------------------- Content-2 ----------------------------------- */}
      
      <div className='Content-2'>
        <p >Our mission is to provide</p>
        <h1 className='bold' style={{color: isOpen === true ? "white" : "black "}}>100% placements to students</h1>
        <p >
          Our mission is to provide 100% placements to students those who enrol for our specialised courses. Our Placement assistance starts with Resume preparation, Mock Interviews by real working professionals, Aptitude test training & Interviews. We will provide unlimited placement assistance till the student is placed satisfactorily.</p>
      </div>

{/* ------------------------------- Content-3 --------------------------------- */}
      <div id='cource' className='Content-3 text-center  p-5' style={{ color: isOpen === true ? "white" : "black", backgroundColor: isOpen === true ? "black" : "#63c1d6a5" }}>
        {/* <Row className=' content-3 ' >
              <Col lg={6} className='bg-secondary '>hi</Col>
              <Col lg={6} className='bg-light'>helo</Col>
      </Row> */}

        <div className='text-start cource-details row' style={{color: isOpen === true ? "gray" : "black "}}>
          <div class="cource col-lg-3 col-md-3 col-sm-5" style={{ backgroundColor: isOpen === true ? "black" : "" }}>
            <h5 className='cource-heading' style={{color: isOpen === true ? "white" : "black "}}>MEA(R)N Stack Web Development Expert - Angular & React</h5>
            <p className='cource-includes'>HTML, CSS, Bootstrap, Javascript, Typescript, Git, Angular, React.js,</p>

            <p className='cource-duration' ><strong>Duration:</strong> 5 Months, 5 Days a Week, 2 Hours/day</p>

            <a href='/home' >View More</a>
          </div>
          <div class="cource col-lg-3 col-md-3 col-sm-5" style={{ backgroundColor: isOpen === true ? "black" : "" }}>
            <h5 className='cource-heading' style={{color: isOpen === true ? "white" : "black "}}>PYTHON DATA SCIENCE - ML - AI - & Power BI</h5>
            <p className='cource-includes'>Python, SQL, Exploratory Data Analytics, Linear Algebra, Statistic</p>

            <p className='cource-duration' ><strong>Duration:</strong> 6 Months, 5 Days a Week, 1.5 - 2 Hours/day</p>

            <a href='/home'>View More</a>
          </div>
          <div class="cource col-lg-3 col-md-3 col-sm-5" style={{ backgroundColor: isOpen === true ? "black" : "" }}>
            <h5 className='cource-heading' style={{color: isOpen === true ? "white" : "black "}}>Java Spring Full Stack Development
            </h5>
            <p className='cource-includes'>Important Spring Annotations, IOC Containers,Dependency</p>

            <p className='cource-duration' ><strong>Duration:</strong> 4 Months, 5 Days a Week, 2 Hours/day</p>

            <a href='/home'>View More</a>
          </div>
          <div className='view-all col-lg-12 col-md-12 col-sm-5'>
            <Button className='view-all-button '>View All</Button>
          </div>
        </div>
        {/* <div className='view-all'>
            <Button className='view-all-button'>View All</Button>
          </div> */}
      </div>

{/*--------------------------------- content-4 ------------------------------*/}
      <div className='Content-4 row m-0'>
        <div className='content-4-left col-lg-5 col-md-5'>
        <div className='content-4-card-6'>
            <div className='content-4-card-6-1'></div>
          </div>
          <div className='content-4-card-1'></div>
          <div className='content-4-card-3'></div>
          <div className='content-4-card-2'></div>
          <div className='content-4-card-4'>
            <div className='content-4-card-4-1'></div>
          </div>
          <div className='content-4-card-5'>
            <div className='content-4-card-5-1'></div>
            <div className='content-4-card-5-2'></div>
          </div>
         
        </div>

        <div id='content-4-right' className='content-4-right col-lg-7 col-md-7 g-2 '>
          <h3 style={{color: isOpen === true ? "white" : "black "}}>Technology Stack</h3>
          <p >
            Our mission is to provide 100% placements to students those who enrol for our specialised courses.

          </p>

          <div>
            <Carousel variant='dark'>
              <Carousel.Item style={{ color: isOpen === true ? "#a35143" : "#a35143 ", backgroundColor: isOpen === true ? "#2a332c" : "white" }}>
                <div className='content-4-right-image row '>
                  <div className='content-4-right-image-card col-lg-5 col-md-5 col-sm-12'>
                    <div className='img-div'>
                      <img alt='' src='https://i.postimg.cc/DZx2bY96/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg' />

                    </div>              </div>
                  <div className='content-4-right-image-card-left col-lg-6 col-md-6 col-sm-12'>
                    <p >Let jobs Chase You</p>
                    <h5 style={{color: isOpen === true ? "white" : "black "}}>Unlock your Potential with the Best Expert led IT Training</h5>
                    <Button className='mt-2'>ENROLL NOW</Button>
                  </div>
                </div>

              </Carousel.Item>

              <Carousel.Item style={{ color: isOpen === true ? "#a35143" : "#a35143", backgroundColor: isOpen === true ? "#2a332c" : "white" }}>
                <div className='content-4-right-image row '>
                  <div className='content-4-right-image-card col-lg-5 col-md-5 col-sm-12'>
                    <div className='img-div'>
                      <img alt='' src='https://i.postimg.cc/kX02ZJ6q/speed-internet-technology-background.webp' />
                    </div>            
                      </div>
                  <div className='content-4-right-image-card-left col-lg-6 col-md-6 col-sm-12'>
                    <p >Let jobs Chase You</p>
                    <h5 style={{color: isOpen === true ? "white" : "black "}}>Unlock your Potential with the Best Expert led IT Training</h5>
                    <Button className='mt-2'>ENROLL NOW</Button>
                  </div>
                </div>

              </Carousel.Item>

              <Carousel.Item style={{ color: isOpen === true ? "#a35143" : "#a35143", backgroundColor: isOpen === true ? "#2a332c" : "white" }}>
                <div className='content-4-right-image row '>
                  <div className='content-4-right-image-card col-lg-5 col-md-5 col-sm-12'>
                    <div className='img-div'>
                      <img alt='' src='https://i.postimg.cc/MKmCLPfT/luca-bravo-XJXWbf-So2f0-unsplash.jpg' />

                    </div>              </div>
                  <div className='content-4-right-image-card-left col-lg-6 col-md-6 col-sm-12'>
                    <p >Let jobs Chase You</p>
                    <h5 style={{color: isOpen === true ? "white" : "black "}}>Unlock your Potential with the Best Expert led IT Training</h5>
                    <Button >ENROLL NOW</Button>
                  </div>
                </div>

              </Carousel.Item>

            </Carousel>
          </div>
          <div >
          </div>

        </div>
      </div>
    

      <footer>
        <div id='about' className='footer row m-0 ' style={{ color: isOpen === true ? "white" : "black", backgroundColor: isOpen === true ? "black" : "white" }} >
          <div className='footer-content col-lg-2 col-md-4 col-sm-6'>
            <p className='footer-header'>Follow us!</p>
            <div className='footer-image-box'>
              <a href='https://www.linkedin.com/in/nasib-pv/'  className='footer-image-link'><img alt='' className='footer-logo' src='https://i.postimg.cc/ydTs30WG/pngwing-com-3.png' /></a>
              <a href='https://instagram.com/nasib_pv?igshid=bTYxODVqazI0bDlw'  className='footer-image-link'><img alt='' className='footer-logo' src='https://i.postimg.cc/d1Hzr6mL/pngwing-com.png' /></a>
              <a href='https://wa.me/18078210951'  className='footer-image-link'><img className='footer-logo' alt='' src='https://i.postimg.cc/pr9zLVLp/pngwing-com-1.png' /></a>
              <a href='https://twitter.com/NASIB_P_V'  className='footer-image-link'><img className='footer-logo' alt='' src='https://i.postimg.cc/jSR6zb8k/pngwing-com-2.png' /></a>
            </div>

            <p className='footer-header'>Courses</p>

            <div className='footer-contect-box'>
              <p className='footer-link-box'><a href='/home' className='footer-link'>MEA(R)N Stack Web Development Expert - Angular & React</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Android Developer Expert Training In Kochi- Flutter</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Python Django - Angular- Full Stack Web Development Expert</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link' >Java Spring Full Stack Development</a></p>
            </div>

          </div>

          <div className='footer-content col-lg-2 col-md-4 col-sm-6'>
            <p className='footer-header'>Company</p>
            <div className='footer-contect-box '>
              <p className='footer-link-box'><a href='/home' className='footer-link'>About</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Contact</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Careers</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Placements</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Press</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Payments</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Jobs</a></p>

            </div>     
          </div>
          <div className='footer-content col-lg-2 col-md-4 col-sm-6' ><p className='footer-header'>For Business</p>
            <div className='footer-contect-box '>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Corporate Training</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Employee Training</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Industry Connect</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Program</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Staffing Solutions</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Add on course</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Manpower consultancy</a></p>
            </div>
          </div>
          <div className='footer-content col-lg-2 col-md-4 col-sm-6'>
            <p className='footer-header'>Discover</p>
            <div className='footer-contect-box '>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Internship</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Terms and Conditions</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Privacy Policy</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>Placement T&C</a></p>
              <p className='footer-link-box'><a href='/home' className='footer-link'>NDT Certificate Renewal</a></p>
            </div>    
          </div>
          <div className='footer-content footer-content-end col-lg-4 col-md-8 col-sm-12'><p className='footer-header'>Connect with us</p>
            <p className='footer-header  p-2 m-0'>India</p>
            <div className='footer-contect-box '>
              <p className='footer-connect-content'>Tech Telent learn Pvt Ltd<br />
                2nd Floor, 61/10222 ,<br />
                Mullath Building,<br />
                Opp. KSRTC Bus Stand,<br />
                Mavoor Road, Calicut, Kerala-673001</p>
              <p className='footer-contact-link'><a href='tel:8078210951'>Call:+91 8078210951</a><br /><a href='mailto: contact@techtalentlearn.com'>Email: contact@luminartechnolab.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
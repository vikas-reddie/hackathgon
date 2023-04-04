import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function Msigup() {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [conformpassword,setConformpassword]=useState('')
    // const [domine,setDomine]=useState('')
    // const [subdomine,setSubdomine]=useState('')
    const [phno,setPhno]=useState('')
    const [github,setGithub]=useState('') 
    const [expirence,setExpirence]=useState('')   
    const [certifications,setCertifications]=useState('') 
    const submithand = (e)=>{
        e.preventDefault();
        console.log(firstname)
        // console.log({firstname:`${firstname}`,lastname:`${lastname}`,phno:`${phno}`,
        // email:`${email}`,password:`${password}`})
        
        
    }
  return (
    <div className="App">
    <section className="vh-auto background">
    <div className="container py-5 h-auto">
      <div className="row justify-content-center align-items-center h-auto">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px", backgroundColor: "#800000"}}>
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center" style={{color:"#FFFFFF"}}><b>Register</b></h3>
              <form onSubmit={submithand}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="username" placeholder='flastname' value={firstname} onChange={(e)=> setFirstname(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} id="UserName" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="UserName" style={{color:"#FFFFFF"}}>First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="lastname" id="lastname" placeholder='lastname' value={lastname} onChange={(e)=> setLastname(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="fname" style={{color:"#FFFFFF"}}>Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="email" id="email" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} style={{color:"#800000",backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="fname" style={{color: "#FFFFFF"}}>email</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="password" name="password" id="password"  placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="lname" style={{color:"#FFFFFF"}}>password</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <input type="password" name="conformpassword" placeholder='conformpassword' value={conformpassword} onChange={(e)=> setConformpassword(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" id="phoneid" />
                      <label htmlFor="phoneid" className="form-label" style={{color: "#FFFFFF"}}>Confirm password</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="tel" name="phno" placeholder='phno' value={phno} onChange={(e)=> setPhno(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} id="emailid" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="emailid" style={{color: "#FFFFFF"}}>Mobil Number</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Domain
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>First In Mentors</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="set"/>
                                     </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>Built Mentors</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="go"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>Invest Mentors</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="go"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>R&D Mentors</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="go"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>Advisor and connector Mentors</label>
                                </div>
                            </li>
                        </ul>
                    </div> 
                   </div>
                   <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sub Domain
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>Technology Mentor</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color:"#800000"}}> Finance Mentor</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}> Health & Wellness  Mentor</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color:"#800000"}}>Creater Mentor</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color: "#800000"}}>Legal Mentor</label>
                                </div>
                            </li>
                            <li>
                                <div className="input-group ">
                                    <div className="input-group-text">
                                        <input className="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label className="form-label p-3" htmlFor="ready" style={{color:"#800000"}}>Education Mentor</label>
                                </div>
                            </li>
                            
                        </ul>
                    </div>        
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="expirence" id="fname" placeholder='expirence' value={expirence} onChange={(e)=> setExpirence(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="fname" style={{color:"#FFFFFF"}}>Expirence</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="certifications" id="certifications" placeholder='certifications' value={certifications} onChange={(e)=> setCertifications(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="lname" style={{color: "#FFFFFF"}}>Certifications</label>
                    </div>
                  </div>                
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="github" id="github" placeholder='github' value={github} onChange={(e)=> setGithub(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="fname" style={{color:"#FFFFFF"}}>Github</label>
                    </div>
                  </div> 
                    </div>              
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <input className="btn  btn-lg" style={{backgroundColor:"#FFFFFF", color: "#800000 "}} name="submit" type="submit" value="Register"/>
                  <a href="../index.php"><input className="btn  btn-lg" style={{backgroundColor: "#FFFFFF", color: "#800000"}} type="button" value="Go Back"/></a>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <p style={{color:"#FFFFFF"}}><b>Already a User?</b> <a href="login.php" style={{color: "#FFFFFF"}}>Login</a></p>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      </div>
   </div>
</section>
</div>
  );
}

export default Msigup;
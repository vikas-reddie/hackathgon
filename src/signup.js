import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
function Signup() {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [conformpassword,setConformpassword]=useState('')
    const [domine,setDomine]=useState({EarlystageReady:false,
                                       BuildstageSet:false,
                                       InveststageGo:false})
    const [phno,setPhno]=useState('')
    const [linkdin,setLinkedin]=useState('')
    const [github,setGithub]=useState('')
    const submithand = (e)=>{
        e.preventDefault();
        console.log({firstname:`${firstname}`,lastname:`${lastname}`,phno:`${phno}`,
        email:`${email}`,password:`${password}`})
        axios.post('',{
            firstname:`${firstname}`,lastname:`${lastname}`,
            email:`${email}`,phno:`${phno}`,
            linkdin:`${linkdin}`,github:`${github}`,
            password:`${password}`
        }) 
        .then((res)=>{
            console.log("Added successfully");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <section class="vh-auto background">
    <div class="container py-5 h-auto">
      <div class="row justify-content-center align-items-center h-auto">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px", backgroundColor:"#800000"}}>
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center" style={{color:"#FFFFFF"}}><b>Register</b></h3>
              <form onSubmit={submithand}>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" placeholder='flastname' name="firstname" value={firstname} onChange={(e)=> setFirstname(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} id="UserName" class="form-control form-control-lg" />
                      <label class="form-label" for="UserName" style={{color: "#FFFFFF"}}>First Name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  placeholder='lastname' name="lastname"  value={lastname} onChange={(e)=> setLastname(e.target.value)} id="fname" style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" />
                      <label class="form-label" for="fname" style={{color: "#FFFFFF"}}>Last Name</label>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" placeholder='email' name="email" value={email} onChange={(e)=> setEmail(e.target.value)} id="fname" style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" />
                      <label class="form-label" for="fname" style={{color:"#FFFFFF"}}>email</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" />
                      <label class="form-label" for="lname" style={{color: "#FFFFFF"}}>password</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline datepicker w-100">
                      <input type="tel" placeholder='conformpassword' name="conformpassword" value={conformpassword} onChange={(e)=> setConformpassword(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" id="phoneid" />
                      <label for="phoneid" class="form-label" style={{color: "#FFFFFF"}}>Confirm password</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input type="tel" placeholder='phno' name="phno" value={phno} onChange={(e)=> setPhno(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} id="emailid" class="form-control form-control-lg" />
                      <label class="form-label" for="emailid" style={{color: "#FFFFFF"}}>Mobil Number</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Domain
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" name='EarlystageReady'  value="ready" onChange={(e)=>{setDomine(()=>({...domine,[e.target.name]:true}));console.log(domine)}}/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Early stage - Ready</label>
                                </div>
                            </li>
                            <li>    
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="set"/>
                                     </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Build stage - Set</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="go"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Invest stage - Go</label>
                                </div>
                            </li>
                        </ul>
                    </div> 
                   </div>
                   <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sub Domain
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready" />
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Teams with Potential but No Clearly defined Problem</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}> Teams Building Ventures based on Assumptions</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}> Teams that have Identified a Clear & Validated Problem</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Teams Not Able to Perform Clear Customer Insights Exercise</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color:"#800000"}}>Teams Not Able to build Prototypes & MVP</label>
                                </div>
                            </li>
                            <li>
                                <div class="input-group ">
                                    <div class="input-group-text">
                                        <input class="form-check-input " type="checkbox" value="ready"/>
                                    </div>
                                        <label class="form-label p-3" for="ready" style={{color: "#800000"}}>Teams that have already built their product</label>
                                </div>
                            </li>
                        </ul>
                    </div>        
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name="linkdin" id="linkdin" value={linkdin} onChange={(e)=> setLinkedin(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" />
                      <label class="form-label" for="fname" style={{color:"#FFFFFF"}}>Linkdin</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name="github" id="github"  value={github} onChange={(e)=> setGithub(e.target.value)} style={{color:"#800000", backgroundColor:"#FFFFFF"}} class="form-control form-control-lg" />
                      <label class="form-label" for="lname" style={{color:"#FFFFFF"}}>Github</label>
                    </div>
                  </div>
                  
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <input class="btn  btn-lg" style={{backgroundColor:"#FFFFFF", color:"#800000 " }}name="submit" type="submit" value="Register"/>
                  <a href="../index.php"><input class="btn  btn-lg" style={{backgroundColor:"#FFFFFF", color:"#800000" }}type="button" value="Go Back"/></a>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <p style={{color:"#FFFFFF"}}><b>Already a User?</b> <a href="login.php" style={{color:"#FFFFFF"}}>Login</a></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  );
}

export default Signup;

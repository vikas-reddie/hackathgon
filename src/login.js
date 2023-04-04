import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submithand = (e)=>{
        e.preventDefault();
        console.log(`userid: ${email}\n password: ${password}`)
        
        
    }
  return (
    <section class="vh-auto background">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px", backgroundColor:" #800000"}}>
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center" style={{color: "#FFFFFF"}}><b>Login</b></h3>
              <form onSubmit={submithand}>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" placeholder='email' name="email" value={email} onChange={(e)=> setEmail(e.target.value)} style={{backgroundColor:"#FFFFFF", color:"#151B54"}} id="UserName" class="form-control form-control-lg" required/>
                      <label class="form-label" for="email" style={{color:"#FFFFFF"}}>Username</label>

                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="password" placeholder='password' name="password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{backgroundColor:"#FFFFFF", color:"#151B54"}} id="password" class="form-control form-control-lg" required/>
                      <label class="form-label" for="passwordid" style={{color:"#FFFFFF"}}>Password</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <input class="btn btn-lg" style={{backgroundColor: "#FFFFFF", color: "#800000"}} name="submit" type="submit" value="Submit"/>
                    <a href="../index.php"><input class="btn  btn-lg" style={{backgroundColor: "#FFFFFF", color: "#800000"}} type="button" value="Go Back"/></a>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <p style={{color: "#FFFFFF"}}><b>New User?</b> <a href="signup.php" style={{textDecoration: "underline", color:"#FFFFFF"}}>Sign Up</a></p>
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

export default Login;

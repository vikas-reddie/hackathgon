import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function Homeuser() {
  return (
    <div className="App">
      <div className="text-start">
        <h1 style={{color:"#800000"}}>Hello User </h1>
      </div>
    
      <p className="fw-semibold">Domain Name</p>
      <p className="fw-semibold">Sub Domain Name</p>
    
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">Main Domain</h5>
      </div>
      <div className="offcanvas-body">
        <form method="POST" action="">
          <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" name="domain[]" id="btncheck1" value="FirstInMentors" autoComplete="off"/>
            <label className="btn btn-outline-primary m-1" htmlFor="btncheck1">Early Stage</label>
    
            <input type="checkbox" className="btn-check" name="domain[]" id="btncheck2" value="BuildMentors" autoComplete="off"/>
            <label className="btn btn-outline-primary m-1" htmlFor="btncheck2">Build Stage</label>
    
            <input type="checkbox" className="btn-check" name="domain[]" id="btncheck3" value="InvestMentors" autoComplete="off"/>
            <label className="btn btn-outline-primary m-1" htmlFor="btncheck3">Invest Stage</label>
          </div>
        </form>
      </div>
    
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">Sub-Domain</h5>
      </div>
      <div className="offcanvas-body">
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" name="domain[]" id="btncheck4" value="R_DMentors" autoComplete="off"/>
          <label className="btn btn-outline-primary m-1" htmlFor="btncheck4">Not Able to perform customer insights</label>
    
          <input type="checkbox" className="btn-check" name="domain[]" id="btncheck5" value="Advisors_ConnectorsMentors" autoComplete="off"/>
          <label className="btn btn-outline-primary m-1" htmlFor="btncheck5">MVP is not clear</label>
    
          <input type="checkbox" className="btn-check" name="domain[]" id="btncheck6" value="Advisors_ConnectorsMentors" autoComplete="off"/>
          <label className="btn btn-outline-primary m-1" htmlFor="btncheck6">Already built their product</label>
        </div>
      </div>
    
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">Linkedin</h5>
      </div>
      <div className="offcanvas-body">
        <input type="text" name="social media link"/>
      </div>
    
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">GitHub</h5>
      </div>
      <div className="offcanvas-body">
  <input type="text" name="social media link"/>
</div>
<div className="offcanvas-header">
  <h5 class="" id="">Youtube</h5>
</div>
<div className="offcanvas-body">
  <input type="text" name="social media link"/>
</div>
<div class="">
  <h5 class="offcanvas-title" id="offcanvasTopLabel">Instagram</h5>
</div>
<div class="offcanvas-body">
  <input type="text" name="social media link"/>
</div>
<button type="button" class="btn btn-primary align-center w-50%">Submit</button>
</div>
  );
}

export default Homeuser;
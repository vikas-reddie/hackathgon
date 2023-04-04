import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Home() {
  return (
    <div>
    <section class="background"/>
    <header/>
      <div>
        <a href="../index.php"><button class="btn m-1 float-end" style={{backgroundColor: "#FFFFFF", color: "#800000", borderStyle: "solid",borderColor:"#151B54"}} type="button"><b>Log Out</b></button></a>
      </div>
      <div class="text-start">
        <h1 style={{color:"#800000"}}>Hostel/Room Finder</h1>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="card" style={{width:"18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    <footer class="text-center text-lg-start text-white" style={{backgroundColor:"#800000", color:"#FFFFFF",alignContent:"center"}}/>
    <section class="d-flex justify-content-between p-4" style={{backgroundColor:"grey"}}>
    </section>
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           </div>
           </div>
      </div>

</section>
</div>
  );
}

export default Home;
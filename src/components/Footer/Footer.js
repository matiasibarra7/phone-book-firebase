import React from "react";
import mati from './mati.png';


function Footer() {
  /* 
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  */
  return (
    <footer className="footer mt-auto d-flex justify-content-between fs-6" style={{height:"3rem", backgroundColor:"#CFD7C7"}}>
      
      <img className="rounded-circle pt-2 pb-2" src={mati}  /* className="App-logo rotate" */ alt="logo" />
      <div className="d-flex align-items-center">
        <div style={{alignSelf: "center"}}>Hecho por Matías Ibarra</div>     
        <div className="d-flex justify-content-around fs-2" style={{minWidth:"4.5rem"}}>
          <a href="https://github.com/matiasibarra7" target="_blank" rel="noreferrer"><i className="fab fa-github" style={{color: "black"}}></i></a>
          <a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" style={{color: "#0e76a8"}}></i></a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto d-flex justify-content-end fs-6 px-2" style={{height:"3rem", backgroundColor:"#CFD7C7"}}>
      
      <div className="d-flex align-items-center">
        <div>Hecho por Matías Ibarra</div>     
        <div className="d-flex justify-content-around fs-2" style={{minWidth:"4.5rem"}}>
          <a href="https://github.com/matiasibarra7" target="_blank" rel="noreferrer"><i className="fab fa-github" style={{color: "black"}}></i></a>
          <a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" style={{color: "#0e76a8"}}></i></a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
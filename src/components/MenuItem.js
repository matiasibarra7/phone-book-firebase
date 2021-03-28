import React from 'react';
import { Link } from 'react-router-dom'



function MenuItem(props) {

  return (

    <li className="nav-item">
      <Link className="nav-link" to={props.path}>
        <i className={props.icon} style={{width:"1.5rem"}}/> 
        <span>{props.text}</span>
      </Link>
    </li>
                  
  );
}

export default MenuItem;

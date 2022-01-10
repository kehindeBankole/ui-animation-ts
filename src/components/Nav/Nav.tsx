import React, { CSSProperties } from "react";
import "./Nav.scss";
import logo from "../../assets/logo.png";
import {ReactComponent as Bar} from '../../assets/hamburger.svg'
function Nav() {
  const style:  CSSProperties  = {
    display:"flex"
  };
  return (
    <div className="nav-container">
      <div style={{...style}}>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="search">
        </div>
      </div>
      <div className="content">
        <Bar style={{alignSelf:'center'}}/>
      </div>
    </div>
  );
}

export default Nav;

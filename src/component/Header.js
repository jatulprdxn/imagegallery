import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';


function Header(props) {
function handleClick() {
 localStorage.clear();

}

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName="selectedLink">Home</NavLink>
          </li>
          {
          (props.uniqueId[0] && props.uniqueId)?props.uniqueId[0].state?
         <li><NavLink to='/login' activeClassName="selectedLink" onClick={handleClick}>Logout</NavLink></li>:
         <li><NavLink to='/login' activeClassName="selectedLink">Login</NavLink></li>:
         <li><NavLink to='/login' activeClassName="selectedLink">Login</NavLink></li>
          }
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    uniqueId:state.userIndentity
  }
}

export default connect(mapStateToProps)(Header);
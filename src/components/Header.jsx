import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

import { googleLogout } from '@react-oauth/google';
import config from '../config.js';

export default function Header(){

  const onLogout = () => {
    googleLogout(config.clientID);
    console.log("[Logout Success]");
  }

    return (
      <Navbar light color="danger" expand="md">
        <NavbarBrand><span className="text-white"><strong>SmartCity</strong></span></NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/home/accidentes" style={{ textDecoration: 'none' }}><NavLink><span className="text-white" border="0">Registro de accidentes </span></NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/home" style={{ textDecoration: 'none' }}><NavLink><span className="text-white">Dashboard</span></NavLink></Link>
            </NavItem>
          </Nav>
          <NavbarText>
              <Link onClick={onLogout} to="/" style={{ textDecoration: 'none' }}><NavLink><span className="text-white">Logout</span></NavLink></Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    );
  
}
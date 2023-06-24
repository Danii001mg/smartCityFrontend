import React from 'react';
import { Link } from 'react-router-dom';

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
        <NavbarBrand><Link to="/home" style={{ textDecoration: 'none' }}><NavLink><span className="text-white" border="0"><h4><strong>SmartCity</strong></h4></span></NavLink></Link></NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/home/accidentes" style={{ textDecoration: 'none' }}><NavLink><span className="text-white" border="0">Registro de accidentes </span></NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/home/meses" style={{ textDecoration: 'none' }}><NavLink><span className="text-white">Accidentes por Mes</span></NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/home/distritos" style={{ textDecoration: 'none' }}><NavLink><span className="text-white">Accidentes por Distrito</span></NavLink></Link>
            </NavItem>
          </Nav>
          <NavbarText>
              <Link onClick={onLogout} to="/" style={{ textDecoration: 'none' }}><NavLink><span className="text-white">Logout</span></NavLink></Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    );
  
}
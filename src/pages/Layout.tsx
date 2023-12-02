import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Button, Nav, Li, NavRow } from "../style";
import { Toggle } from '../components/Toggle';

// eslint-disable-next-line react/prop-types
export default function Layout({theme}) {
  
  return (
    <>
      <NavRow>
        <img src="https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png" alt='world icon' width='30'/>
        <Nav >
          <Li>
              <Link to="/" style={{color: 'white'}}>Home</Link>
          </Li>
          <Li>
              <Link to="/universities" style={{color: 'white'}}>Universidades</Link>
          </Li>
          <Li>
              <Link to="/documents" style={{color: 'white'}}>Documentos</Link>
          </Li>
          <Li>
              <Link to="/contact" style={{color: 'white'}}>Contato</Link>
          </Li>
        </Nav>
        <Button>TEMA</Button>
        <Toggle label="Toggle me" toggled={true} onClik={() => theme()} />
      </NavRow>
      <Outlet />
    </>
  )
    
}
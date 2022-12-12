import React, { Component } from 'react'
import logo from './logoSU.png'
import lkpic from './lk.png'

export default class Header extends Component {
  render() {
    return (    
        <header className="Top-block">
            <img className="Logo-main" src={logo} />
            <h1 className="Font-title"> КАРТА УНИВЕРСИТЕТА </h1>
            <button className='Button-header'>
                <img className="Pers-cab" src={lkpic}/>
            </button>
        </header>
    )
  }
}

/**
import { Navbar, Container } from 'react-bootstrap'
 
        <Navbar>
            <Container>
                <Navbar.Brand hrev="/">
                    <img
                    src={logo}
                    height='186'
                    weight='574'
                    className='d-inline-block align-top'
                    alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle area-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
*/
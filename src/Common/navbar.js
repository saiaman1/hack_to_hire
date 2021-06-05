import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import classes from './navbar.scss';

const NavBar = props => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/admin">{props.loginRes.userType==='member' ? 'Member Dashboard' : 'Admin Dashboard'}</Navbar.Brand>
            {/* <span className="mr-auto" style={{'float': 'right'}}>
                {props.loginRes.memberId}
            </span> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <span className={classes.memberIdSpan}>{props.loginRes.memberId}</span>&nbsp;
                    <Button className={'btn btn-primary'}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
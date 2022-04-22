import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, signInWithGoogle,logOut } = useAuth();
    console.log('user',user);
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                <NavLink className='navbar-brand' to='/'>Tripo</NavLink>
                    <Nav className="ms-auto">
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                    <NavLink className='nav-link' to='/services'>Services</NavLink>
                    <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                    <NavLink className='nav-link' to='/addservices'>Add Services</NavLink>
                    <NavLink className='nav-link' to='/manageorders'>Manage Orders</NavLink>
                    {user.email?
                        <>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                        <Button onClick={logOut} className='nav-link' variant="primary">Log out</Button>
                        </>
                        :
                        <Button onClick={signInWithGoogle} className='nav-link' variant="primary">Log in</Button>
                    }
                    
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
import React from 'react';
import { Image, Navbar, Nav, NavItem } from 'react-bootstrap';
import jenna_logo_small from '../../utils/images/jenna_logo_small.svg'
export const Footer = () => {

    return (
        <Navbar>
            <Nav>
                <NavItem  href="#">
                    Terms /
                            </NavItem>
                <NavItem  href="#">
                    Conditions |
                            </NavItem>
                <NavItem  href="#">
                    Privacy Policy |
                            </NavItem>
                <NavItem id="jenna-logo">
                    Powered by{' '}
                    <Image src={jenna_logo_small} />
                </NavItem>
            </Nav>
        </Navbar>
    )
}
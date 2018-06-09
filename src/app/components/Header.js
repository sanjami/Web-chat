import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import spartans from './../../utils/images/spartans.png';



export const Header = () => {

    return (
        <React.Fragment>
            <Col xsOffset={3} xs={3}>
                <Image src={spartans} className="header-logo" />
            </Col>
            <Col xs={3}>
                <h3>
                    SPARTANS
                </h3>
            </Col>
            {/* <Col>
            </Col> */}
        </React.Fragment>
    )
}
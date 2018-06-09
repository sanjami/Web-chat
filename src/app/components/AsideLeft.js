import React from 'react';
import { Col, Image } from 'react-bootstrap';
import edit from './../../utils/images/edit.svg';
import profile from './../../utils/images/profile.svg';

export const AsideLeft = () => {

    return (
        <Col className="aside-left">
            <div className="pen">
                <Image src={edit}  />
            </div>
            <div className="avatar">
                <Image src={profile}  />
            </div>
        </Col>
    )
}
import React from 'react';
import { Col, Row, Form, FormGroup, FormControl, Image } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer';
import plane from './../../utils/images/plane.svg';
import menu from './../../utils/images/menu.svg';
import MessageComponent from './MessageComponent';

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    getValidationState() {
        const length = this.state.text.length;
        if (length > 1) return 'success';
        else if (length > 100) return 'error';
        return null;
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }


    prepareAndSubmitForm = () => {
        const data = {};
        data.text = this.state.text;
        this.props.submitForm(data);
        this.setState({ text: '' });
    }

    // handleKeyPress = (event, target) => {
    //     console.log(eventtarget)
    //     if (target.charCode === 13) {
    //         event.preventDefault();
    //         this.prepareAndSubmitForm();
    //     }
    //   }

    render() {

        return (
            <React.Fragment>
                <Row id="header">
                    <Header />
                </Row>
                <Row id="chat-field">
                    <MessageComponent messages={this.props.messages} />
                    <Form inline>
                        <Row>
                            <Col xs={1}>
                                <Image src={menu} className="img-form" />
                            </Col>
                            <Col xs={9}>
                                <FormGroup
                                    controlId="text"
                                    validationState={this.getValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        placeholder="Type answer here..."
                                        value={this.state.text}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={2} type="button" onClick={this.prepareAndSubmitForm} className="btn">
                                Send
                                <Image src={plane} />
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row id="footer">
                    <Footer />
                </Row>
            </React.Fragment>
        );
    }
}
export default Chat;

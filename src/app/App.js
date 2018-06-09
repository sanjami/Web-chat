import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { socketConnect } from 'socket.io-react';
import { AsideLeft } from './components/AsideLeft';
import Chat from './components/Chat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.props.socket.on('bot message', data => {
      this.setState({messages: [...this.state.messages, data.message]})
    })
  }

  sendMessage = (data) => { 
    this.props.socket.emit('send message', data);

  }

  render() {
    const { messages } = this.state;
    return (
      <Row>
        <Col xs={3} xsHidden>
          <AsideLeft/>
        </Col>
        <Col xs={12} md={6} id="chat">
          <Chat submitForm={this.sendMessage} messages={messages}/>
        </Col>
        <Col xs={3} xsHidden>
          <AsideLeft/>
        </Col>
      </Row>
    );
  }
}

export default socketConnect(App)

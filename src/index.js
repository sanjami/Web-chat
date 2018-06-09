
import React from 'react';
import ReactDOM from 'react-dom';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import './index.css';
import App from './app/App';
 
const socket = io.connect('https://react-test-task-back.herokuapp.com/');
 
const DOMNode = document.getElementById('root');
 
ReactDOM.render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  DOMNode
);
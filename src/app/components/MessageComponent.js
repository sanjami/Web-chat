import React from 'react';
import { Image } from 'react-bootstrap';
import spartans from './../../utils/images/spartans.png';
import jenna_logo_small from './../../utils/images/jenna_logo_small.svg';

class MessageComponent extends React.Component {

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.messages === nextProps.messages) {
    //         console.log('daaaaaaaaaaaa')
    //         return false;
    //     }
    //     return true;
    // }

    content = () => {
        const { messages } = this.props;
        if (messages.length > 0) {

            return messages.map((message, index) => {
                if (index % 2 === 0) {
                    return (
                        <div className="wrap">
                            <div className="bot spartans">
                                <Image src={spartans} />SPARTANS
                            </div>
                            <div className="bot text">
                                {message.text}
                            </div>
                            <div className="bot br">
                                {(message.options) ?
                                    message.options.map((option, index) => {
                                        return (
                                            <span key={index}>{option}</span>
                                        )
                                    }) : <div></div>
                                }
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="wrap">
                            <div className="jena">
                                <Image src={jenna_logo_small} circle />
                            </div>
                            <div className="jena text">
                                {message}
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.content()}
                </div>
            </React.Fragment>
        )
    }
}

export default MessageComponent;
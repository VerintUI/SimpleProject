import React, { Component } from 'react';
import MessageHead from "./MessageHead";
import MessageBody from "./MessageBody";

const Styles = {
    frame: {
        width: '90%',
        height: '300px',
        boxSizing: 'border-box',
        marginBottom: '20px',
    }
};

class Message extends Component {
    render() {
        if (!Styles.frame.border) {
            Styles.frame.border = `1px solid ${this.props.theme.border}`;
            Styles.frame.backgroundColor = this.props.theme.messageBackground;
        }

        return (
            <div style={Styles.frame}>
                <MessageHead theme={this.props.theme}/>
                <MessageBody theme={this.props.theme}/>
            </div>
        );
    }
}

export default Message;
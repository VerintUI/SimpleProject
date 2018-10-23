import React, { Component } from 'react';
import MessageDetails from "./MessageDetails";
import MessageFooter from "./MessageFooter";

const Styles = {
    frame: {
        height: '250px',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
    },
    content: {
        height: '250px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        height: '200px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px',
    }
};

class MessageBody extends Component {
    render() {
        if (!Styles.frame.borderBottom) {
            Styles.frame.borderBottom = `1px solid ${this.props.theme.messageBorder}`;
        }

        return (
            <div style={Styles.frame}>
                <MessageDetails theme={this.props.theme}/>
                <div style={Styles.content}>
                    <div style={Styles.body}>
                        MessageBody
                    </div>
                    <MessageFooter theme={this.props.theme}/>
                </div>
            </div>
        );
    }
}

export default MessageBody;
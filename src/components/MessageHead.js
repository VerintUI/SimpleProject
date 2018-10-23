import React, { Component } from 'react';

const Styles = {
    frame: {
        height: '50px',
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '13px',
        lineHeight: '30px',
    },
};

class MessageHead extends Component {
    render() {
        if (!Styles.frame.borderBottom) {
            Styles.frame.borderBottom = `1px solid ${this.props.theme.messageBorder}`;
        }

        return (
            <div style={Styles.frame}>
                22.10.2018, 12:20 PM
            </div>
        );
    }
}

export default MessageHead;
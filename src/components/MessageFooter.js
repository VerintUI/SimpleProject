import React, { Component } from 'react';

const Styles = {
    frame: {
        height: '50px',
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        fontSize: '11px'
    },
};

class MessageFooter extends Component {
    render() {
        if (!Styles.frame.borderTop) {
            Styles.frame.borderTop = `1px solid ${this.props.theme.messageBorder}`;
        }

        return (
            <div style={Styles.frame}>
                Signature:
            </div>
        );
    }
}

export default MessageFooter;
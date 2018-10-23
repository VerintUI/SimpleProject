import React, { Component } from 'react';
import Avatar from "./Avatar";

const Styles = {
    frame: {
        height: '248px',
        width: '200px',
        padding: '20px 10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    details: {
        alignSelf: 'center',
    }
};

class MessageDetails extends Component {
    render() {
        if (!Styles.frame.borderRight) {
            Styles.frame.borderRight = `1px solid ${this.props.theme.messageBorder}`;
        }

        return (
            <div style={Styles.frame}>
                <div style={Styles.details}>Username</div>
                <Avatar/>
                <div style={Styles.details}>
                    <div>Messages: 250</div>
                    <div>Rank: Beginner</div>
                    <div>Join: 08.08.2017</div>
                </div>
            </div>
        );
    }
}

export default MessageDetails;
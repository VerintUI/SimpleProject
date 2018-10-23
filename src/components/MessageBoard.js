import React, { Component } from 'react';
import Message from "./Message";

const Styles = {
    board: {
        width: '100%',
        height: 'auto',
        boxSizing: 'border-box',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    frame: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
    }
};

class MessageBoard extends Component {
    render() {
        Styles.board.backgroundColor = this.props.theme.boardBackground;

        return (
            <div style={Styles.frame}>
                <div style={Styles.board}>
                    {this.props.data.map((item, idx) => {
                        return (
                            <Message
                                key={idx}
                                data={item}
                                theme={this.props.theme}
                            />)
                    })}
                </div>
            </div>
        );
    }
}

export default MessageBoard;
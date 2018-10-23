import React, { Component } from 'react';
import MessageBoard from "./components/MessageBoard";

const DEMO_DATA =[{}, {}, {}, {}, {}, {}];

const Styles = {
    frame: {
        width: '100vw',
        height: '100vh',
        padding: '25px',
        boxSizing: 'border-box',
        overflow: 'hidden',
    }
};

class App extends Component {
  render() {
    Styles.frame.backgroundColor = this.props.theme.background;

    return (
        <div style={Styles.frame}>
            <MessageBoard
                data={DEMO_DATA}
                theme={this.props.theme}
            />
        </div>
    );
  }
}

export default App;

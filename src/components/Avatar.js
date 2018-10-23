import React, { Component } from 'react';

const Styles = {
    avatar: {
        height: '105px',
        width: '105px',
        alignSelf: 'center',
        marginBottom: '10px',
        marginTop: '10px',
    },
};

class Avatar extends Component {
    render() {
        return (
            <img src={'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-1/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fhfa1-2.fna&oh=b091f6e6149e492a898a20a3e2c1c0f4&oe=5C55A559'}
                 style={Styles.avatar}
            />
        );
    }
}

export default Avatar;
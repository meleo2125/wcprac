import React from 'react';

class Welcome extends React.Component {
    greetUser = () => {
        alert('Hello, Welcome!');
    };
    render(){
        const buttonStyle = {
            backgroundColor: '#00d991',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        };
        return(
            <button onClick = {this.greetUser} style={buttonStyle}>Greet the User</button>
        );
    }
}
export default Welcome;
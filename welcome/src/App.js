import React from 'react';

class Welcome extends React.components {
    greetUser = () => {
        alert('Hello, Welcome!');
    };
    render(){
        return(
            <button onClick = {this.greetUser}>Greet the User</button>
        );
    }
}
export default Welcome;
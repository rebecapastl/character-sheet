//imports
//when in the client side, use import syntax
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Header from './Header.js'

//the App class extends the component class
class App extends React.Component {

    
    //render method is how we create what is seen in the screen
    render() {
        //render the main components
        return <>
            <Header />
            <Alert variant="success">Hello Character Sheet App</Alert>
            
        </>;
        
    }    
    
}

export default App;
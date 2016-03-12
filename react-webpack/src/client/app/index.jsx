import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import HelloMessage from './components/HelloMessage.jsx';

class App extends React.Component{
    render(){
        return (
            <div>
                <p>Hello Chandimas!</p>
                <AwesomeComponent/>
                <HelloMessage name="chandima"/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
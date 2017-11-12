import React, {Component} from 'react';
import { render } from 'react-dom';

import '../styles/style.css';
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
    render() {
        return(
            <div>
                Hello from react

                <img src={keenImage} alt='Commander keen' />
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));
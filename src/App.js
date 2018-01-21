import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Define from './Define';

const URL = 'https://cors-anywhere.herokuapp.com/https://owlbot.info/api/v2/dictionary';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>ISSA DICTIONARY</h2>
                <Define URL = {URL}/>
            </div>
        );
    }
}

export default App;

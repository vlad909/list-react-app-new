import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body.js'
// import ee from 'event-emitter'

class App extends Component {
    // constructor(props) {
    //     super(props)
    //     window.bus = new ee()
    // }

    // emitIt = () => {
    //     window.bus.emit('yes', 'doloras')
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">valas morgulis</h1>
                </header>
                <Body/>
                <hr/>
                {/*<button type="button" className="btn" onClick={() => this.emitIt()}>non parent from list</button>*/}
            </div>
        );
    }
}

export default App;
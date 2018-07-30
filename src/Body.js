import React from 'react';
import Lists from './Lists'
// import ReactDom from 'react-dom'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            new_val: 'new_val'
        }
    }

    render() {
        // const {new_val} = this.state
        return (
            <div className="body-inner">
                <Lists ref={inst => {this.child = inst}}/>
                <button type="button" className="btn" onClick={() => this.child.setValue('valas morgulis')}>Parent from list</button>
            </div>
        )
    }
}

export default Body
import React from 'react';
import Lists from './Lists'

// import ReactDom from 'react-dom'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            new_val: 'new_val',
            lists_data: null
        }
    }

    setNewVal = (e) => {
        this.setState({
            new_val: e.target.value
        })
    }

    myCallBack = (data) => {
        this.setState({
            lists_data: data
        })
    }

    render() {
        // const {new_val} = this.state
        return (
            <div className="body-inner">
                <p>data from child {this.state.lists_data}</p>
                <input type="text" onChange={this.setNewVal}/>
                <Lists ref={inst => {
                    this.child = inst
                }} val={this.state.new_val} perentCallBack={this.myCallBack}/>
                <button type="button" className="btn" onClick={() => this.child.setValue(this.state.new_val)}>Parent of
                    list
                </button>
            </div>
        )
    }
}

export default Body
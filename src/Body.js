import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['task1', 'task2']
        }
    }

    render() {
        let tasks = this.state.tasks.map((item, index) => {
            return (
                <li key={index}>{index + 1}. {item}</li>
            )
        })
        return (
            <div className="body-inner">
                <div className="create-task">
                    <input type="text"/>
                    <button type="button" className="btn">Add</button>
                </div>
                <div className="table">
                    <strong className="strong">List</strong>
                    <ul className="table-left">
                        {tasks}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Body
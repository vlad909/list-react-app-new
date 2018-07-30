import React from 'react';

// import ReactDom from 'react-dom'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n_task: '',
            tasks: ['task1', 'task2']
        }
    }

    setTaskValue = (e) => {
        this.setState({n_task: e.target.value})
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.n_task]
        })
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
                    <input type="text" defaultValue="" placeholder="any task" ref="task" onChange={this.setTaskValue}/>
                    <button type="button" className="btn" onClick={this.addTask}>Add</button>
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
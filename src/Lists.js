import React from 'react'

class Lists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n_task: '',
            tasks: ['task1', 'task2'],
            something: 'not changed'
        }
        this.setValue = this.setValue.bind(this)
    }

    componentDidMount() {
        window.bus.on('yes', (val) => {
            this.setValue(val)
        })
    }

    setValue(val) {
        this.setState({
            something: val
        })
    }

    setTaskValue = (e) => {
        this.setState({n_task: e.target.value})
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.n_task]
        })
    }

    someFn = (e) => {
        this.props.perentCallBack(e.target.value)
    }

    render() {
        let tasks = this.state.tasks.map((item, index) => {
            return (
                <li key={index}>{index + 1}. {item}</li>
            )
        })
        return (
            <div>
                <div className="create-task">
                    <div>
                        <span>here</span>
                        <input type="text" onChange={this.someFn}/>
                    </div>
                    {/*<p>data from props: {this.props.val}</p>*/}
                    <input type="text" defaultValue="" placeholder="any task" onChange={this.setTaskValue}/>
                    <button type="button" className="btn" onClick={this.addTask}>Add</button>
                </div>
                <div className="table">
                    {this.state.something}
                    <strong className="strong">List</strong>
                    <ul className="table-left">
                        {tasks}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Lists;
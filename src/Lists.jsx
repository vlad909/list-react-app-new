import React from 'react'
import Stars from './stars'

class Lists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n_task: '',
            tasks: [
                {
                    id: 0,
                    gid: 1,
                    name: 'task1 for g1',
                    stars: 1
                },
                {
                    id: 1,
                    gid: 1,
                    name: 'task1 for g1',
                    stars: 2
                },
                {
                    id: 2,
                    gid: 2,
                    name: 'task2 for g2',
                    stars: 3
                },
                {
                    id: 3,
                    gid: 3,
                    name: 'task3 for g3',
                    stars: 4
                }
            ],
            new_group: '',
            group_list: [
                {
                    id: 1,
                    name: 'group1'
                },
                {
                    id: 2,
                    name: 'group2'
                },
                {
                    id: 3,
                    name: 'group3'
                }],
            current_group: 1,
            editable_id: null,
            starred_id: -1
        }
    }

    componentDidMount() {
        // window.bus.on('yes', (val) => {
        //     this.setValue(val)
        // })
    }

    setTaskValue = (e) => {
        this.setState({n_task: e.target.value})
    }

    addTask = () => {
        let list = this.state.tasks, last_id = list.length - 1
        let item = {
            id: list[last_id].id + 1,
            gid: this.state.current_group,
            name: this.state.n_task
        }
        this.setState({
            tasks: [...list, item],
            n_task: ''
        })
    }

    setNewGroup = (e) => {
        this.setState({new_group: e.target.value})
    }
    // someFn = (e) => {
    //     this.props.perentCallBack(e.target.value)
    // }
    addGroup = () => {
        let list = this.state.group_list,
            last_id = list.length - 1;
        last_id = list[last_id].id + 1
        let item = {
            id: last_id,
            name: this.state.new_group
        }
        this.setState({
            group_list: [...list, item],
            new_group: ''
        })
    }

    delTask(index) {
        let list = this.state.tasks
        list.splice(index, 1)
        this.setState({
            tasks: list
        })
    }

    setEditTask(id) {
        this.setState({
            editable_id: id
        })
    }

    editTask(index) {
        let items = this.state.tasks,
            item = items[index]
        item.name = this.state.n_task
        items.splice(index, 1, item)
        this.setState({
            tasks: items,
            editable_id: null,
            n_task: null
        })
    }

    setCount = (val, index) => {
        let items = this.state.tasks,
            item = items[index]
        item.stars = val
        items.splice(index, 1, item)
        this.setState({
            tasks: items
        })
    }

    delGroup(index) {
        let groups = this.state.group_list,
            id = groups[index].id,
            items = this.state.tasks.filter(e => e.gid !== id)
        groups.splice(index, 1)
        this.setState({
            group_list: groups,
            tasks: items
        })
    }

    render() {
        let edit = this.state.editable_id
        let tasks = this.state.tasks.map((item, index) => {
                return (
                    item.gid === this.state.current_group ?
                        (<li className="d-flex justify-content-between align-items-center" key={index}>
                            {item.id !== edit || edit === null ? (
                                <div style={{width: '100%'}}
                                     className="d-flex flex-row justify-content-between align-items-center">
                                    <p>{item.id}. {item.name}</p>
                                    <div>
                                        <button type="button" className="btn btn-success"
                                                onClick={() => this.setEditTask(item.id)}>~
                                        </button>
                                        <button type="button" className="btn btn-danger"
                                                onClick={() => this.delTask(index, item.id)}
                                        >-
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{width: '100%'}} className="d-flex justify-content-between align-items-center">
                                    <input style={{margin: '10px 0', width: '150px'}} type="text"
                                           onChange={this.setTaskValue}/>
                                    <div>
                                        <button type="button" className="btn btn-success"
                                                onClick={() => this.editTask(index)}>v
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={() => {
                                            this.setState({
                                                editable_id: null
                                            })
                                        }}>x
                                        </button>
                                    </div>
                                </div>
                            )}
                            <Stars setCount={this.setCount} index={index} stars={item.stars}/></li>) : ('')
                )
            }),
            groups = this.state.group_list.map((item, index) => {
                return (
                    <li className="d-flex justify-content-between align-items-center" onClick={() => {
                        this.setState({
                            current_group: item.id
                        })
                    }} key={index}>

                        <p>{item.id}. {item.name}</p>
                        <button type="button" className="btn btn-danger"
                                onClick={() => this.delGroup(index)}
                        >-
                        </button>
                    </li>
                )
            })
        return (
            <div className="d-flex justify-content-start m-t-20">
                {/*<p>Current id: {this.state.current_group}</p>*/}
                <div className="d-flex flex-column justify-content-start">
                    <div className="table">
                        <strong>Groups</strong>
                        <ul className="table-left">
                            {groups}
                        </ul>
                        <div className="d-flex">
                            <input type="text" onChange={this.setNewGroup}/>
                            <button type="button" className="btn" onClick={this.addGroup}>+</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-start">

                    {/*<div>*/}
                    {/*<span>here</span>*/}
                    {/*<input type="text" onChange={this.someFn}/>*/}
                    {/*</div>*/}
                    {/*<p>data from props: {this.props.val}</p>*/}

                    <div className="table">
                        {/*{this.state.something}*/}
                        <strong>List</strong>
                        <ul className="table-left">
                            {tasks}
                        </ul>
                        <div className="d-flex">
                            <input type="text" defaultValue="" placeholder="any task" onChange={this.setTaskValue}/>
                            <button type="button" className="btn" onClick={this.addTask}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lists;
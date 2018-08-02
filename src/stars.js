import React from 'react'

class Stars extends React.Component {

    newStarsCount(count, index) {
        this.props.setCount(count + 1, index)
    }

    render() {
        let numbers = Array(5).fill('')
        numbers = numbers.map((item, index) => {
            return (
                <span onClick={() => {
                    this.newStarsCount(index, this.props.index)
                }} style={{color: index + 1 <= this.props.stars ? 'yellow' : '#d6d6d6'}}
                      key={item + index + this.props.stars}>&#9733;</span>
            )
        })
        return (
            <div>
                {numbers}
            </div>
        )
    }
}

export default Stars;
import React from 'react';
import Lists from './Lists'
// import ReactDom from 'react-dom'

class Body extends React.Component {
    render() {
        return (
            <div className="body-inner">
                <Lists/>
            </div>
        )
    }
}
export default Body
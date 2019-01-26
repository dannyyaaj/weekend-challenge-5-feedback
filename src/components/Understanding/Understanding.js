import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {

    constructor(props){
        super(props);
        this.state ={
            understanding: ''
        }
    }

    changeInput = (event) =>{
        this.setState({
            understanding: event.target.value,
        })

    }

    handleClick = () =>{
        console.log('this is handleClick');
        const action = {
            type: 'UNDERSTANDING',
            payload: this.state.understanding
        };
        this.props.dispatch(action);
        this.props.history.push('/support')

    }

    render(){
        return(
            <div>
            <h1>How well did you understanding the content</h1>
            <div>
                <input onChange={this.changeInput} placeholder="understand?"/>
                <button onClick={this.handleClick}>Next</button>
                {JSON.stringify(this.props.reduxStore.understandingReducer)}
            </div>
            </div>
            
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Understanding);
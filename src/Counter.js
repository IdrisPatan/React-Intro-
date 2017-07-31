/**
 * Created by localadmin on 7/31/17.
 */
import React, {Component} from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count :0
        }
    }
}

    _onClick(event){
        this.setState({
            count: this.state.count++
        })
    }

    render(){
        return (
            <div>
                <h3> {this.props.name}'s counter ! </h3>
                <h4> The current Count is : {this.state.count} </h4>
                <form onSubmit={this._onSubmit}>
                    <input type="number" name="amount" on/>
                    <button Create Increment </button>
                </form>
                <button onClick = {this._onClick}> Increment </button>
            </div>
        )
    }
}


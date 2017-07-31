import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//     // return (
//     //   <div className="App">
//     //     <div className="App-header">
//     //       <img src={logo} className="App-logo" alt="logo" />
//     //       <h2>Welcome to React</h2>
//     //     </div>
//     //     <p className="App-intro">
//     //       To get started, edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //   </div>
//
//   }



class App extends Component {
    // render() {
    constructor(props) {
        super(props)
        this.state = {
            name: "idris",
            last_name: "patan",
            age: "really old"
        }
        //this._onChange = this._onChange.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }

        _onSubmit(event) {
            event.preventDefault()
            this.setState({
                name:event.target.name.value
            })
        }

        render(){
            return (
                <div id="myDiv">
                <form onSubmit={this._onSubmit}>
                    <label htmlFor="name"> What is your name ? </label>
                    <input id="name" type="text" name="name"/>
                </form>
                    {Name(this.state.name)}
                </div>
            );
        }
    }



const Name =(name)=> <h1> My name is {name} </h1>

export default App;
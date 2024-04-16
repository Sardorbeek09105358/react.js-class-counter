import { Component } from "react";


export default class App extends Component{
  state={
    count: 0,
    users: "Alisher"
  }
  increaseCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  decreaseCount = () =>{
    if(this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      })
    }
   }
 
  render(){
    // destrcuting assigment
    const {count, users} = this.state 
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.increaseCount}>increase Count</button>
        <button onClick={this.decreaseCount}>decrase Count</button>
        <h1>user: {users}</h1>
      </div>
    )
  }
}








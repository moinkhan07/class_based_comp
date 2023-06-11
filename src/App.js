import { Component } from 'react';
import './App.css';
import Comp from './component/Comp';

class App extends Component {

  state = {
    name:"Moin",
    count : 0
  }

  inc = ()=>{
    this.setState({count:this.state.count + 1})
  }
  dec = ()=>{
    this.setState({count:this.state.count - 1})
  }

  componentDidMount(){
    this.setState({count:5})
  }

  // When props, state anything re-renderend than it will exceute
  componentDidUpdate(){
    if(this.state.count < 50){
    this.setState({count:this.state.count + 10})
    }
  }

  render(){
      return (
      <div className='App'>
         <h1>Class Component</h1>
         <h1>{this.state.name}</h1>
         <h1>{this.state.count}</h1>
         <button onClick={this.inc} >+</button>
         <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default App;

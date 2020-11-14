
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[ ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">

          <h1>Monster Rolodex</h1>
        <CardList monster={this.state.monsters}/>

        </header>
      </div>
    );
  }
}




export default App;

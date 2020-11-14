
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component';
class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[ ],
      searhcfiledtxt:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){

    const {monsters,searhcfiledtxt}=this.state;

    const filterdmonsters= monsters.filter(monsters=> monsters.name.toLowerCase().includes(searhcfiledtxt.toLocaleLowerCase()));

    return (
      <div className="App">
        <header className="App-header">
        

          <h1>Monster Rolodex</h1>

          <SearchBox placeholder="search" handleChange={e => {this.setState({searhcfiledtxt:e.target.value})}} />
   

        <CardList monster={filterdmonsters}/>

        </header>
      </div>
    );
  }
}




export default App;

import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/CardList.jsx'
import { Search } from './components/search/search.jsx'

class App extends Component{

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(body => this.setState({monsters: body}))
  }

  render() {
    const { monsters , searchField } = this.state
    const filtered =  monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <Search
          placeholder = 'search'
          handle = {(e)=> this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filtered}/>
      </div>
    );
  }

}

export default App;

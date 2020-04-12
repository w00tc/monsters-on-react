import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

import './App.css';

class App extends Component {
  
  state = {
    monsters: [],
    searchField: ''
  };

  search = e => {
    let keyword = e.target.value;
    console.log(keyword)
    this.setState({searchField: keyword}) 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  };


  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters with React</h1>
        <Search search={this.search}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        {/* e => this.setState({ searchField: e.target.value }, () => console.log(this.state)) */}
        <SearchBox 
          placeholder='search monsters' 
          handleChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

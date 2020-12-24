import React, { Component } from "react";
import './App.css';
import { CardList } from './components/card-list/CardList.jsx'
import { SearchBox } from "./components/searchBox/SearchBox.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  };

  render() {
    const { monsters, searchField } = this.state; // the same as const monsters = this.state.mosters and const searchField = this.state.searchField
    const filteredMonsters = monsters
      .filter(monster => monster.name.toLowerCase()
        .includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
  ;
}

export default App;

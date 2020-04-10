import React from 'react';
import './App.css';
// import other component
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

// Main component
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // this is data rendered into page. To make change on this, use setState()
      monsters: [],
      searchField: ''
    };
  }

  // When react render page (create dom for the first time), block code inside this componentDidMount() is called
  // and the page re-render to apply the change
  componentDidMount() {
    console.log("Fetch data first")
    // This is promise. See apendix to understand more clearly
    fetch('https://jsonplaceholder.typicode.com/users') // Fetch data
    .then(response => response.json()) // in form of json
    .then(users => this.setState({monsters: users})) // then covert to array and set to monster array
    console.log("Finish fetch data")
  }

  // if create custome function, do this:
  // 1. Create function inside class component.
  // 2. Always use arrow function because arrow function always bind 'this' 
  // context where the function define in the first place
  handleChangeE = (e) => {this.setState({searchField: e.target.value}) }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          searchType ='search'
          placeholder='search monster'
          handleChange={this.handleChangeE}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

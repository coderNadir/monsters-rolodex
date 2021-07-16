import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchInput } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    console.log(this.state.monsters);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.setState({ monsters: await response.json() });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchInput
          placeHolder={"Search monster ..."}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

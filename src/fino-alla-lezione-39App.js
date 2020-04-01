import React, {Component} from 'react';
// import logo from './logo.svg';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

//oppure se non faccio l'import di {Component} posso utilizzare
//class App extends React.Component{
class App extends Component {

  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  //lifeCycleMethod
  componentDidMount() {
    //api request con implementazione di una promise
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(users => console.log(users))
        .then(users => this.setState({ monster: users }))
  }

    render() {

        //questo modo di scrivere equivale a:
        // const monster = this.state.monster
        // const searchField = this.state.searchField
        const { monster, searchField } = this.state;

        //posso a questo punto dichiarare una nuova variabile

        const filteredMonsters = monster.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        // che passerò al componente CardList a questo punto invece di passargli this.stat.monster gli passo la nuova costante filteredMonsters

        return (
            <div className='App'>
              <SearchBox
                  placeholder='search monsters'
                  handleChanges = {e => this.setState({ searchField: e.target.value } , () => console.log(this.state.searchField)) }
              />
              <CardList
                  monster={filteredMonsters}>
              </CardList>
            </div>
        )
    }



  //lezione 29... con la 30 passiamo le props child direttamente al componente card list
  // render() {
  //   return (
  //       <div className='App'>
  //         <CardList name='Albino'>
  //           {
  //               this.state.monster.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
  //           }
  //         </CardList>
  //       </div>
  //   )
  // }


  //second part of course
  // render(){
  //     return (
  //         <div className="App">
  //           <header className="App-header">
  //             <img src={logo} className="App-logo" alt="logo" />
  //             <p>{ this.state.string }</p>
  //             <button onClick={() => this.setState({ string: 'Hello Alvinator' })}>Change Text</button>
  //           </header>
  //         </div>
  //     );
  // }
}


//first part of course

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Developed by Albino Cirillo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

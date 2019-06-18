import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  selectPet = (petID) => {
    // console.log(petID);
    const newPets = this.state.petList;
    const foundPet = newPets.find(k => k.id === petID);
    // console.log(foundPet);

    this.setState({
      currentPet: foundPet
    });

  }


  render() {
    const { currentPet } = this.state;
    console.log(this.state);
    console.log(this.setState)
    let selectedPet = '';
    if (currentPet) {
      selectedPet = <PetDetails currentPet={currentPet} />
      console.log(selectedPet);
    }
   
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        <section className="pet-details">
          { selectedPet }
        </section>
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList 
            pets={this.state.petList}
            onSelectPet={this.selectPet}
          />

        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;

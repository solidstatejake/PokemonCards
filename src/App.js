import React from 'react';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';
import './sass/components/App.scss';


/* POKEMON DEFAULTS */
const charmander = "id='4' name='charmander'";


function App() {
  return (
    <div className="App">
      {/*<Pokecard id={4} name="Charmander" />*/}
      <Pokedex/>
    </div>
  );
}

export default App;


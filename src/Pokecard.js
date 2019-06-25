import React, { Component } from 'react';
import './sass/main.scss';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//Use enchanced if want non-sprite drawings of pokemon.
// const enhanced_POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// let padPokemonId = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {

  render() {

    const props = this.props;
    let img = `${POKE_API}${props.id}.png`;
    // let img = `${enhanced_POKE_API}${padPokemonId(props.id)}.png`;


    return (
      <div className='Pokecard'>

        <header className="Pokecard__header">
          <div>
            <h3 className="Pokecard__name">{ props.name }</h3>
          </div>

          <div className={`Pokecard__img--wrapper Pokecard__img--${props.type}`}>
            <img src={ img } alt={ props.name }/>
          </div>
        </header>

        <main className="Pokecard__moves">
          <h3 className="moves__header">Moves</h3>
          <div className="moves__body">
           {props.moves.map( move => <p className="moves__move">{move}</p>)}
          </div>
        </main>

        <footer className="Pokecard__stats">

            <p>Type: { props.type } </p>
            <p>EXP: { props.xp }</p>

        </footer>
      </div>
    )

  }
}

export default Pokecard;
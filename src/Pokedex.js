import React, { Component } from 'react';
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4, name: 'Charmander', type: 'Fire', base_experience: 62,
        moves: [ 'fire-punch', 'scratch', 'swords-dance', 'bite' ]
      },

      {
        id: 7, name: 'Squirtle', type: 'Water', base_experience: 63,
        moves: [ 'bubble-beam', 'headbutt', 'bite', 'withdraw' ]
      },
      {
        id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178,
        moves: [ 'psychic', 'sleep-powder', 'supersonic', 'gust' ]
      },
      {
        id: 19, name: 'Rattata', type: 'Normal', base_experience: 72,
        moves: [ 'body-slam', 'quick-attack', 'bite', 'tail-whip' ]
      },
      {
        id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112,
        moves: [ 'thunderbolt', 'quick-attack', 'tail-whip', 'thunder-wave' ]
      },
      {
        id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95,
        moves: [ 'pound', 'sing', 'mimic', 'defense-curl' ]
      },
      {
        id: 94, name: 'Gengar', type: 'Poison', base_experience: 225,
        moves: [ 'psywave', 'dream-eater', 'toxic', 'nightmare' ]
      },
      {
        id: 133, name: 'Eevee', type: 'Normal', base_experience: 65,
        moves: [ 'sand-attack', 'tackle', 'bite', 'tail-whip' ]
      },
    ]
  };

  /*
   * IDs     a
   *  charmander: 4
   *    moves: fire-punch, scratch, swords-dance, bite
   *  pikachu:    25
   *    moves: thunderbolt, quick-attack, tail-whip, thunder-wave
   *  rattata:    19
   *  vulpix:     37
   *  bellsprout: 69
   *  poliwag:    60
   *  */

  render() {
    return (
      <div className="Pokedex">

        { this.props.pokemon.map((p) => (
          <Pokecard
            id={ p.id }
            name={ p.name }
            type={ p.type }
            xp={ p.base_experience }
            moves={p.moves}
          />

        )) }

      </div>
    );
  }
}

export default Pokedex;


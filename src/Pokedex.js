import React, { Component } from 'react'
import Pokecard             from './Pokecard'


class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {
        id:    4, name: 'Charmander', type: 'Fire', base_experience: 62,
        moves: [ 'Fire-punch', 'Scratch', 'Swords-dance', 'Bite' ]
      },

      {
        id:    7, name: 'Squirtle', type: 'Water', base_experience: 63,
        moves: [ 'Bubblebeam', 'Headbutt', 'Bite', 'Withdraw' ]
      },
      {
        id:    12, name: 'Butterfree', type: 'Flying', base_experience: 178,
        moves: [ 'Psychic', 'Sleep-powder', 'Supersonic', 'Gust' ]
      },
      {
        id:    19, name: 'Rattata', type: 'Normal', base_experience: 72,
        moves: [ 'Body-slam', 'Quick-attack', 'Bite', 'Tail-whip' ]
      },
      {
        id:    25, name: 'Pikachu', type: 'Electric', base_experience: 112,
        moves: [ 'Thunderbolt', 'Quick-attack', 'Tail-whip', 'Thunder-wave' ]
      },
      {
        id:    39, name: 'Jigglypuff', type: 'Normal', base_experience: 95,
        moves: [ 'Pound', 'Sing', 'Mimic', 'Defense-curl' ]
      },
      {
        id:    94, name: 'Gengar', type: 'Poison', base_experience: 225,
        moves: [ 'Psywave', 'Dream-eater', 'Toxic', 'Nightmare' ]
      },
      {
        id:    133, name: 'Eevee', type: 'Normal', base_experience: 65,
        moves: [ 'Sand-attack', 'Tackle', 'Bite', 'Tail-whip' ]
      }
    ]
  }

  render () {
    return (
      <div className="Pokedex">
        <div className="Pokedex__pokecard-container">
          { this.props.pokemon.map((p) => (
            <Pokecard
              id={ p.id }
              name={ p.name }
              type={ p.type }
              xp={ p.base_experience }
              moves={ p.moves }
            />

          )) }

        </div>

      </div>
    )
  }
}

export default Pokedex

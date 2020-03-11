import React   from 'react'
import Pokedex from './Pokedex'

/* TODO March 11, 2020
*       Coming back to this project after its creation, it's clear that the poke-data
*     (aside from the picture which is retrieved from an API) should not be hard-coded
*     into the program. There does exist an API which has all of the relevant poke-
*     statistics which could be used to generate an entire pokedex.
*       In fact, that is what I would like to do with this project. I'd like to create
*     an entire pokedex which looks like it does on the tv-show, and make the pokemon's
*     sound when the user switches to said pokemon.
*       That would be a really fun project.
* */
function App () {
  return (
    <>
      <Pokedex/>
    </>
  )
}

export default App


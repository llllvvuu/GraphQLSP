import { graphql } from './graphql';

// prettier-ignore
export const PokemonFields = graphql(`
  fragment pokemonFields on Pokemon {
    id
    name
    fleeRate

  }
`);

export const Pokemon = () => {};

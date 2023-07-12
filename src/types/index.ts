export type PokemonTypeName =
  | 'fighting'
  | 'electric'
  | 'psychic'
  | 'dragon'
  | 'ground'
  | 'normal'
  | 'flying'
  | 'poison'
  | 'ghost'
  | 'steel'
  | 'fairy'
  | 'water'
  | 'grass'
  | 'dark'
  | 'rock'
  | 'fire'
  | 'ice'
  | 'bug'

export type StatTypeName =
  | 'special-defense'
  | 'special-attack'
  | 'defense'
  | 'attack'
  | 'speed'
  | 'hp'

type Stat = {
  value: number
  name: string
}

export type Pokemon = {
  tags: PokemonTypeName[]
  animatedImage: string
  smallImage: string
  abilities: string
  number: number
  height: number
  weight: number
  stats: Stat[]
  name: string
  id: number
}

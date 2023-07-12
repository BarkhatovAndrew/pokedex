import { StatTypeName } from '@/types'

interface Stat {
  color: string
  name: string
}

export const statTypeMap: Record<StatTypeName, Stat> = {
  'special-defense': { color: 'bg-green-400', name: 'SpD' },
  'special-attack': { color: 'bg-sky-500', name: 'SpA' },
  defense: { color: 'bg-orange-500', name: 'DEF' },
  speed: { color: 'bg-yellow-400', name: 'SPD' },
  attack: { color: 'bg-sky-300', name: 'ATK' },
  hp: { color: 'bg-red-500', name: 'HP' },
}

// Tipos básicos:

let age: number = 5
const fisrtName: string = 'Herminio'
const isValid: boolean = true
let idk: any = 'Qualquer coisa'

idk = 5
idk = false
idk = 'Anything'

const IDs: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, false, true]
const names: string[] = ['Herminio', 'Neto']

// Tupla:

const person: [number, string] = [22, 'Herminio']

// Lista de tuplas:

const persons: [number, string][] = [
  [22, 'Herminio'],
  [19, 'Apoena']
]

// Intersections:

const productId: string | number = 42

// Enum:

enum Direction {
  up = 1,
  down = 2
}

const direction = Direction.up

// Type assertions:

const productName: any = 'Boné'

// let itemId = productName as string
let itemId = <string>productName
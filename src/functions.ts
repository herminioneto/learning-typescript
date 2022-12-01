// Básico de funções:

const sum = (x: number, y: number): string | number => {
  return (x + y).toString()
}

const value = sum(2, 3)

// Função void (não retorna nada):

const log = (message: string): void => {
  console.log(message)
}

// Após entender interfaces (em objects.ts), vamos aplicar em funções:

interface MathFunc {
  (x: number, y: number): number
}

const soma: MathFunc = (z: number, w: number) => {
  return z + w
}

const sub: MathFunc = (a: number, b: number) => {
  return a - b
}
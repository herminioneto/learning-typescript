// Type:

type Order = {
  productId: string,
  price: number
}

type User = {
  firstName: string,
  lastName?: string, // propriedade opcional
  age: number,
  email: string,
  password: string,
  orders: Order[],
  register(): string
}

const user: User = {
  firstName: 'Herminio',
  age: 22,
  email: 'johnson@gmail.com',
  password: 'JOHNNSONN',
  orders: [{
    productId: '1',
    price: 200
  }],
  register() {
    return 'abc'
  },
}

const printLog = (message: string) => {} // podemos colocar o parâmetro message como opcinal

printLog(user.lastName!)

// Unions:

type Author = {
  books: string[]
}

const author: Author & User = {
  firstName: 'Herminio',
  age: 22,
  email: 'johnson@gmail.com',
  password: 'JOHNNSONN',
  orders: [{
    productId: '1',
    price: 200
  }],
  register() {
    return 'abc'
  },
  books: ['LOTR', 'HOBBIT']
}

// Interfaces:

interface UserInterface {
  readonly firstName: string, // apenas leitura, não pode ser alterado
  email: string
}

const emailUser: UserInterface = {
  firstName: 'Herminio',
  email: 'johnson@gmail.com'
}

emailUser.email = 'outroemail@gmail.com'

interface Authors {
  books: string[]
}

const newAuthor: UserInterface | Authors = {
  firstName: 'Herminio',
  email: 'author@gmail.com',
  books: []
}

// Particularidade dos types:

type Grade = number | string

const grade: Grade = 1
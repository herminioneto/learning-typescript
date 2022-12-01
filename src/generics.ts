// Example:

const returnValue = <T>(value: T) => value // o 'T' é uma convenção, mas podemos usar outros termos

const message = returnValue<string>('Hello World')
const count = returnValue<number>(5)

// Another Example:

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(['1', '2'])
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20])

// OBS: Podemos utilizar quantos generics forem necessários.

// Promises:

const returnPromise = async (): Promise<number> => {
  return 5
}

// Classes:

class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y
})

// Shorthand classes:

class Reference {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Forma curta:

class otherReference {
  constructor(
    name: string,
    age: number
  ) {}
}

// Uma maneira mais simples de se declarar classes.
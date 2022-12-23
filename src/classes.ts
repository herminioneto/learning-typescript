interface IPerson {
  id: number,
  sayMyName(): string
}

class Person implements IPerson {
  readonly id: number; // apenas leitura, sem alterações
  protected name: string; // com o protected, só acessamos a variável dentro da classe ou sub-classe
  private age: number; // com o private, só acessamos a variável dentro da classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name
  }

}

// Sub-classes:

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age)
  }

  whoAmI() {
    return this.name // conseguimos acessar o this.name, mas não o this.age
  }
}

const newPerson = new Person(1, 'Herminio', 22)
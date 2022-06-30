const username: string = 'Nombre de prueba';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(2,3);

// class Person {
//   age: number;
//   lastName: string;

//   constructor(age: number, lastName: string){
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

class Person {
  constructor(public age: number, public lastName: string) {}             //es lo mismo que el codigo de encima
}


const nico = new Person(15, 'Castaño');

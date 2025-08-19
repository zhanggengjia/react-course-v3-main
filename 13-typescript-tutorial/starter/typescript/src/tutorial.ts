// function test({ num, name, id }: { num: number; name: string; id: number }): {
//   oNum: number;
//   oName: string;
// } {
//   return { oNum: id + num, oName: name };
// }

// function reverseStringLoop(str: string): string {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === 'string') {
//     if (config.reverse) {
//       return reverseStringLoop(input.toUpperCase());
//     } else {
//       return input.toUpperCase();
//     }
//   } else {
//     return input * input;
//   }
// }

// let config = { reverse: true };
// console.log(processData(5));
// console.log(processData('this is kevin'));
// console.log(processData('this is su', config));

// =================================================================================

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(num: number): number;
// }

// let personalComputer: Computer = {
//   id: 55688,
//   brand: 'asus',
//   ram: 999,
//   storage: 1,
//   upgradeRam(amount: number): number {
//     return this.ram + amount;
//   },
// };

// =================================================================================

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogname: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//   const randNum = Math.random();
//   if (randNum < 0.33) {
//     return { name: 'kevin' };
//   } else if (randNum >= 0.33 && randNum < 0.66) {
//     return { name: 'josh', dogname: 'lucky' };
//   } else {
//     return {
//       name: 'bob',
//       managePeople() {
//         console.log('Managing people...');
//       },
//       delegateTasks() {
//         console.log('Delegating tasks');
//       },
//     };
//   }
// }

// const employee: Person | DogOwner | Manager = getEmployee();

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return 'managePeople' in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

// const propName = 'age';

// interface Animal {
//   [propName]: number;
// }

// let tiger: Animal = { [propName]: 5 };

// console.log(tiger);

// =================================================================================

// const enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(user: User): User {
//   return user;
// }

// const user: User = createUser({
//   id: 1,
//   name: 'john doe',
//   role: UserRole.Admin,
//   contact: ['kkk@gmail.com', '1234-1123-333'],
// });

// console.log(user);

// =================================================================================

// type IncrementAction = {
//   type: 'increment';
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: 'decrement';
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action): number {
//   switch (action.type) {
//     case 'increment':
//       return state + action.amount;
//     case 'decrement':
//       return state - action.amount;

//     default:
//       const unexpectedAction: never = action;
//       throw new Error(`Unexpected action: ${unexpectedAction}`);
//   }
// }

// =================================================================================

// function genericFuntion<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFuntion<string>('Hello');
// const someNumberValue = genericFuntion<number>(10);

// function createArray<T>(num: number, input: T): T[] {
//   let array: Array<T> = [];
//   array = Array(num).fill(input);
//   return array;
// }

// console.log(createArray(5, 77));
// console.log(Array(6));

// function processValue<T extends string | number>(value: T): T {
//   return value;
// }

// type Car = {
//   brand: string;
//   model: string;
// };

// type Product = {
//   name: string;
//   price: number;
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const car: Car = {
//   brand: 'ford',
//   model: 'mustang',
// };

// const product: Product = {
//   name: 'shoes',
//   price: 999,
// };

// const student: Student = {
//   name: 'peter',
//   age: 20,
// };

// function printName<T extends { name: string }>(input: T): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4],
// };

// const randomStuff: StoreData = {
//   data: ['random', 1],
// };

// =================================================================================

// import { z } from 'zod';

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
//   somethign: z.string(),
// });

// type Tour = z.infer<typeof tourSchema>;

// const url = 'https://www.course-api.com/react-tours-project';

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status:${response.status}`);
//     }
//     const rawData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rawData);
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }

//     return result.data;
//   } catch (error) {
//     const errorMsg =
//       error instanceof Error ? error.message : 'there was an error';
//     console.log(errorMsg);
//     return [];
//   }
// }

// const tours: Tour[] = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });
// =================================================================================

// class Book {
//   public readonly title: string;
//   author: string;
//   private checkedOut: boolean = false;
//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//   }

//   public checkOut(): void {
//     this.checkedOut = this.toggleCheckedOutStatus();
//   }

//   public isCheckedOut(): boolean {
//     return this.checkedOut;
//   }

//   private toggleCheckedOutStatus(): boolean {
//     return !this.checkedOut;
//   }
// }

// const deepWork = new Book('This is good Book', 'kevin');
// console.log(deepWork);

// =================================================================================

// class Book {
//   private checkedOut: boolean = false;
//   constructor(
//     readonly title: string,
//     public author: string,
//     private someValue: number
//   ) {}
//   public getSomeValue() {
//     return this.someValue;
//   }

//   get info() {
//     return `${this.title} by ${this.author}`;
//   }

//   private set checkOut(checkedOut: boolean) {
//     this.checkedOut = checkedOut;
//   }

//   get checkOut() {
//     return this.checkedOut;
//   }

//   public get someInfo() {
//     this.checkOut = true; //this can execute "set checkOut"
//     return `${this.title} by ${this.author}`;
//   }
// }

// const deepWork = new Book('Deep Work', 'Cal Newport', 45);
// console.log(deepWork.getSomeValue());
// console.log(deepWork.info);
// // deepWork.checkOut = true;

// =================================================================================

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person('shakeAndBake', 100);

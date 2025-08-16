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

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `this person is a manager and has ${staff.employees.length} poor employee`
    );
  } else {
    console.log(
      `this person is a poor employee and is belonged to ${staff.department}`
    );
  }
}

let jerry: Employee = { id: 23, name: 'jerry', department: 'home' };
let su: Employee = { id: 18, name: 'su', department: 'company' };
let kevin: Manager = { id: 23, name: 'kevin', employees: [jerry, su] };
printStaffDetails(kevin);
printStaffDetails(su);
printStaffDetails(jerry);

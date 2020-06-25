class Department {
  //   private id: string;
  //   public name: string;
  protected employees: string[] = []; // modifier private => only accessible and can be changed inside the class
//protectes is for all the extended classes too
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // when extending the existing class, we have to add it's own constructor
  //   admins: string[];
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
    // this.admins = admin;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name)
  }
  addReports(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);
accounting.addReports("Something went wrong... ");
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Miroslav');
accounting.printEmployeeInformation();

// console.log(accounting);

const it = new ITDepartment("d2", ["Zox"]);

it.addEmployee("Zox"); //forsing people to use addEMployee method and keep methods consistent
it.addEmployee("Max");

// it.employees[2] = 'Anna';

console.log(it);

it.describe();
it.printEmployeeInformation();

// const accountingCopy = {
//     name: 'DUMMY',
//     describe: accounting.describe
// }

// accountingCopy.describe()

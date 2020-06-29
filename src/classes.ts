abstract class Department {
  static fiscalYear  = 2020;
  //   private id: string;
  //   public name: string;
  protected employees: string[] = []; // modifier private => only accessible and can be changed inside the class
  //protectes is for all the extended classes too
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEMployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log('IT department - ID ' + this.id);
    
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in another value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) { // private => means we can only have 1 accounting instance
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstanceAccounting() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d1', [] );
    return this.instance;
  }

  describe() {
    console.log("accounting Department ID: " + this.id);
    
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstanceAccounting();

accounting.mostRecentReport = "Your end report here...";

accounting.addReports("Something went wrong... ");
console.log("Recent report: " + accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Max");
// accounting.addEmployee("Miroslav");
// accounting.printEmployeeInformation();

accounting.describe();
// console.log(accounting);


const employee1 = Department.createEMployee("George");
console.log(employee1, Department.fiscalYear);


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

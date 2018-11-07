

var employeeList = [];

function employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    this.print = function(){
        console.log(`Name: ${this.name} Title: ${this.title} Salary: ${this.salary} Employment Status: ${this.status}`)
    }
}

var employee1 = new employee('Joe', 'Network Admin', 50000, 'Full Time');
var employee2 = new employee('Sally', 'IT Director', 150000, 'Full Time');
var employee3 = new employee('Sam', 'Sales', 40000, 'Part-Time');

// console.log(employee1);
// employee1.print();

// console.log(employee2);
// employee2.print();

// console.log(employee3);
// employee3.print();

employeeList.push(employee1, employee2, employee3);
console.log(employeeList);

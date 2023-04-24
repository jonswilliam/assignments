const employees = []
function Employee (Name, Title, Salary, Status = "Full Time") {
    this.Name = Name
    this.Title = Title
    this.Salary = Salary
    this.Status = Status
    this.printEmployeeForm = function() {
        console.log("Name: " + this.Name)
        console.log("Title: " + this.Title)
        console.log("Salary: " + this.Salary)
        console.log("Status: " + this.Status)
  }
}
const employeeNumber1 = new Employee("Raab Himself", "Site Foreman", "$68k/year")
const employeeNumber2 = new Employee("Brandon DiCamillo", "Journeyman Electrician", "$55k/year", "Contract")
const employeeNumber3 = new Employee("Rake Yohn", "Electrician's Helper", "$25k/year")
employeeNumber1.printEmployeeForm()
employeeNumber2.printEmployeeForm()
employeeNumber3.printEmployeeForm()
employees.push(employeeNumber1, employeeNumber2, employeeNumber3)
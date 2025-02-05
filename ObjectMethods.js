let employee={
    empname:"abc",
    empid:12345,
    job:"SDET",
    salary:55000,
    //method creation
    bonus: function bonusamt() {
        return((this.salary)*10/100);
    }
}
console.log(employee.empid);
//access method from the object
console.log(employee.bonus());
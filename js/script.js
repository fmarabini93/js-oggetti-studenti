// First point
var student = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "3/28/2000"
}
for (var key in student) {
    console.log(student[key]);
}
// --First point

// Students list
var students = [
    {
        firstName: "Jim",
        lastName: "Dean",
        birthDate: "1/12/1999"
    },
    {
        firstName: "Jane",
        lastName: "Dave",
        birthDate: "2/4/2001"
    },
    {
        firstName: "Janet",
        lastName: "Dick",
        birthDate: "9/27/1998"
    },
    {
        firstName: "Jason",
        lastName: "Dawn",
        birthDate: "10/2/2002"
    },
    {
        firstName: "Jack",
        lastName: "Dawson",
        birthDate: "7/29/1998"
    }
];
// --Students list

var stdsPrint = document.getElementById("students"); // --> Students list print in html
var newStd = Object.create(student); // --> User added student

// User type student generalities that will be added to the students list
document.getElementById("add").addEventListener("click", function() {
    newStd.firstName = prompt("Please insert first name");
    newStd.lastName = prompt("Please insert last name");
    newStd.birthDate = prompt("Please insert birth date");
    alert("Student successfully added. Thanks!")
    students.push(newStd);
    for (var key in students) {
        stdsPrint.innerHTML += "<li>" + students[key].firstName + " " + students[key].lastName + "</li>";
    }
});
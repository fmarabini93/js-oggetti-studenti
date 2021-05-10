var student = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "3/28/2000"
}
var stdPrint = document.getElementById("student");
for (var key in student) {
    stdPrint.innerHTML += "<li>" + student[key] + "</li>";
}

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
var stdsPrint = document.getElementById("students");
for (var key in students) {
    stdsPrint.innerHTML += "<li>" + students[key].firstName + " " + students[key].lastName + "</li>";
}

document.getElementById("add").addEventListener("click", myFunction);

function myFunction(firstName, lastName, birthDate) {
    var firstName;
    var lastName;
    var birthDate;
    firstName = prompt("Please insert first name");
    lastName = prompt("Please insert last name");
    birthDate = prompt("Please insert birth date");
}
// First point
var child = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "3/28/2000"
}
for (var key in child) {
    console.log(child[key]);
}

// Children list
var children = [
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
        lastName: "Doe",
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

var chlnPrint = document.getElementById("students"); // --> Students list print in HTML
var newChd = Object.create(child); // --> User's added student

// User type student generalities that will be added to the students list
document.getElementById("add").addEventListener("click", function() {
    document.getElementById("add").classList.add("hidden");
    document.getElementById("h1").classList.add("hidden");
    newChd.firstName = prompt("Please insert first name");
    newChd.lastName = prompt("Please insert last name");
    newChd.birthDate = prompt("Please insert birth date");
    alert("Student successfully added. Thanks!")
    children.push(newChd);
    document.getElementById("p").classList.add("visible");
    for (var key in children) {
        chlnPrint.innerHTML += "<li>" + children[key].firstName + " " + children[key].lastName + "</li>";
    }
});
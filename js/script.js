// First point
var child = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "3-28-2000"
}

for (var key in child) {
    console.log(child[key]);
}

// Children list
var children = [
    {
        firstName: "Jim",
        lastName: "Dean",
        birthDate: "1-12-1999"
    },
    {
        firstName: "Jane",
        lastName: "Dave",
        birthDate: "2-4-2001"
    },
    {
        firstName: "Janet",
        lastName: "Doe",
        birthDate: "9-27-1998"
    },
    {
        firstName: "Jason",
        lastName: "Dawn",
        birthDate: "10-2-2002"
    },
    {
        firstName: "Jack",
        lastName: "Dawson",
        birthDate: "7-29-1998"
    }
];

var chlnPrint = document.getElementById("students"); // --> Students list print in HTML
var newChd = Object.create(child); // --> User's added student

// Function to check date
String.prototype.isValidDate = function()   {

    const match = this.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);
    if (!match || match.length !== 4) {
        return false
    }

    const test = new Date(match[3], match[1] - 1, match[2]);

    return (
        (test.getMonth() == match[1] - 1) &&
        (test.getDate() == match[2]) &&
        (test.getFullYear() == match[3])
    );
}
// --Function to check date

// User type student generalities that will be added to the students list
document.getElementById("add").addEventListener("click", function() {
    
    document.getElementById("add").classList.add("hidden"); // --> Hide button
    document.getElementById("h1").classList.add("hidden"); // --> Hide title
    
    var fN;
    var lN;
    var date;

    do {
        fN = prompt("Please insert first name");
    } while (fN.length < 3 || !isNaN(parseInt(fN)))
    do {
        lN = prompt("Please insert last name");
    } while (lN.length < 4 || !isNaN(parseInt(lN)))
    do {
        date = prompt("Insert a date MM/DD/YYYY");
    } while (!date.isValidDate() )

    newChd.firstName = fN;
    newChd.lastName = lN;
    newChd.birthDate = date;

    alert("Student successfully added. Thanks!")
    
    children.push(newChd);

    document.getElementById("p").classList.add("visible"); // --> Show paragraph
    
    for (var key in children) {
        chlnPrint.innerHTML += "<li>" + children[key].firstName + " " + children[key].lastName + "</li>";
    }
});
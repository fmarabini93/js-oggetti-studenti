var student = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "3/28/2000"
}
var stdPrint = document.getElementById("student");
for (var key in student) {
    stdPrint.innerHTML += "<li>" + student[key] + "</li>";
}
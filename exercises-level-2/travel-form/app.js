const form = document.travelForm
const submit = document.getElementById("submit")
function formAlert() {
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.travelLocation.value
    const diet = []
    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value)
    }
    if (form.lactose.checked) {
        diet.push(document.getElementById("lactose").value)
    }
    if (form.kosher.checked) {
        diet.push(document.getElementById("kosher").value)
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDietary Restriction(s): " + diet)
}
submit.addEventListener("click",formAlert)
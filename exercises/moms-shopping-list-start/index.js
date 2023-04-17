const inputForm = document.getElementById("title")
const form = document.getElementById("add-todo")
form.addEventListener("submit", addItem)
function addItem(event) {
	event.preventDefault()
    const formInputValue = inputForm.value
	const newListItem = document.createElement("li")
    const textValueDiv = document.createElement("div")
    textValueDiv.textContent = formInputValue
    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    editButton.addEventListener("click", function() {
        const newInputForm = document.createElement("input")
        newInputForm.value = textValueDiv.textContent
        newListItem.replaceChild(newInputForm, textValueDiv)
        editButton.textContent = "Save"
        editButton.addEventListener("click", function() {
            textValueDiv.textContent = newInputForm.value
            newListItem.replaceChild(textValueDiv, newInputForm)
            editButton.textContent = "Edit"
        })
    })
    deleteButton.addEventListener("click", function() {
        newListItem.remove()
    })
    newListItem.appendChild(textValueDiv)
    newListItem.appendChild(editButton)
    newListItem.appendChild(deleteButton)
	document.getElementById("list").append(newListItem)
    inputForm.value = ""
}
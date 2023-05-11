function getData() {
    axios.get("https://api.vschool.io/jonwilliam/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        const newListItem = document.createElement("div")
        newListItem.classList.add("listContainer")
        const titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        titleDiv.textContent = data[i].title
        const descriptionDiv = document.createElement("div")
        descriptionDiv.classList.add("description")
        descriptionDiv.textContent = data[i].description
        const priceDiv = document.createElement("div")
        descriptionDiv.classList.add("price")
        priceDiv.textContent = `$ ${data[i].price}`
        const albumImg = document.createElement("img")
        albumImg.src = data[i].imgUrl
        albumImg.alt = data[i].title
        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.addEventListener("click", event => {
            const newTitleDiv = document.createElement("input")
            newTitleDiv.value = titleDiv.textContent
            newListItem.replaceChild(newTitleDiv, titleDiv)
            const newDescriptionDiv = document.createElement("input")
            newDescriptionDiv.value = descriptionDiv.textContent
            newListItem.replaceChild(newDescriptionDiv, descriptionDiv)
            const newPriceDiv = document.createElement("input")
            newPriceDiv.value = data[i].price
            newListItem.replaceChild(newPriceDiv, priceDiv)
            const newAlbumImg = document.createElement("input")
            newAlbumImg.value = albumImg.src
            newListItem.replaceChild(newAlbumImg, albumImg)
            editButton.textContent = "Save"
            editButton.addEventListener("click", event => {
                titleDiv.textContent = newTitleDiv.value
                newListItem.replaceChild(titleDiv, newTitleDiv)
                descriptionDiv.textContent = newDescriptionDiv.value
                newListItem.replaceChild(descriptionDiv, newDescriptionDiv)
                priceDiv.textContent = `$ ${newPriceDiv.value}`
                newListItem.replaceChild(priceDiv, newPriceDiv)
                albumImg.src = newAlbumImg.value
                newListItem.replaceChild(albumImg, newAlbumImg)
                albumImg.alt = titleDiv.textContent
                editButton.textContent = "Edit"
                const updatedToDo = {
                    title: titleDiv.textContent,
                    description: descriptionDiv.textContent,
                    price: priceDiv.textContent,
                    imgUrl: albumImg.src
                }
                axios.put(`https://api.vschool.io/jonwilliam/todo/${data[i]._id}`, updatedToDo)
                    .then(response => getData())
                    .catch(error => console.log(error))
            })
        })
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "X"
        deleteButton.addEventListener("click", event => {
            event.preventDefault()
            axios.delete(`https://api.vschool.io/jonwilliam/todo/${data[i]._id}`)
                .then(response => getData())
                .catch(error => console.log(error))
        })
        const completedCheckbox = document.createElement("input")
        completedCheckbox.type = "checkbox"
        completedCheckbox.addEventListener("click", event => {
            console.log(completedCheckbox)
            if (completedCheckbox.checked === false) {
                newListItem.style.textDecoration = "none"
                axios.put(`https://api.vschool.io/jonwilliam/todo/${data[i]._id}`, {
                    completed: false
                })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => console.log(error))
            } else {
                newListItem.style.textDecoration = "line-through"
                axios.put(`https://api.vschool.io/jonwilliam/todo/${data[i]._id}`, {
                completed: true
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
            }
        })
        const concert = document.createElement("label")
        concert.textContent = "Seen in Concert??"
        const concertDiv = document.createElement("div")
        concertDiv.classList.add("concertDiv")
        const buttonsDiv = document.createElement("div")
        buttonsDiv.classList.add("buttonsDiv")
        newListItem.appendChild(concertDiv)
        concertDiv.appendChild(completedCheckbox)
        concertDiv.appendChild(concert)
        newListItem.appendChild(titleDiv)
        newListItem.appendChild(descriptionDiv)
        newListItem.appendChild(priceDiv)
        newListItem.appendChild(albumImg)
        newListItem.appendChild(buttonsDiv)
        buttonsDiv.appendChild(editButton)
        buttonsDiv.appendChild(deleteButton)
        document.getElementById("list").append(newListItem)
        if (data[i].completed === true) {
            newListItem.style.textDecoration = "line-through"
            completedCheckbox.checked = true
        }
    }
}

function clearList() {
    const clear = document.getElementById("list")
    while (clear.firstChild) {
        clear.removeChild(clear.firstChild)
    }
}

getData()

const toDoForm = document.toDoForm
toDoForm.addEventListener("submit", event => {
    event.preventDefault()
    const createToDo = {
        title: toDoForm.title.value,
        description: toDoForm.description.value,
        price: toDoForm.price.value,
        imgUrl: toDoForm.imgUrl.value
    }
    toDoForm.title.value = ""
    toDoForm.description.value = ""
    toDoForm.price.value = ""
    toDoForm.imgUrl.value = ""
    axios.post("https://api.vschool.io/jonwilliam/todo", createToDo)
        .then(response => getData())
        .catch(error => console.log(error))
})
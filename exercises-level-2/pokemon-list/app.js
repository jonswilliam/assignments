const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data)
    } 
}

function showData(data) {
    for (let i = 0; i < data.objects.length; i++) {
       for (let j = 0; j < data.objects[i].pokemon.length; j++) {
           const div = document.createElement("div")
           div.textContent = data.objects[i].pokemon[j].name
           document.body.appendChild(div)
       }
    }
}


fetch("https://restcountries.com/v2/all")
    .then(result => result.json())
    .then(apidata => myfun(apidata))
    .catch(err => console.log("Error:", err))


const body = document.body;
const element = document.createElement("div")
element.id = "container"
body.append(element)
const div = document.getElementById("container")

function myfun(apidata) {
    let data = apidata.forEach((elem) => {
        div.innerHTML += `
        <div class="sub-container">
        <img src="${elem.flag}" alt="">
        <p><span>Name:</span>${elem.name} </p>
        <p><span>Population:</span>${elem.population} </p>
        <p><span>Region:</span>${elem.region} </p>
        <p><span>Capital:</span> ${elem.capital}</p>
    
    </div>
            
        `

    })
}


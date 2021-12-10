

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
    let data = apidata.forEach((flag, name, population, region, capital) => {
        div.innerHTML += `
        <div class="sub-container">
        <img src="${flag}" alt="">
        <p><span>Name:</span>${name} </p>
        <p><span>Population:</span>${population} </p>
        <p><span>Region:</span>${region} </p>
        <p><span>Capital:</span> ${capital}</p>
    
    </div>
            
        `

    })
}


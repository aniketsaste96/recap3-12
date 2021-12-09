let countriesInfo = [
    {
        name: "India",
        population: " 1,394,975,829",
        region: "Asia",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
        capital: "New delhi"
    },
    {
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        flag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        capital: "Berlin"
    },
    {
        name: "United states",
        population: "323,947,000",
        region: "Americas",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
        capital: "Washington D.C"
    },
    {
        name: "Brazil",
        population: "206,135,893",
        region: "Americas",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
        capital: "Brasilia"
    },
    {
        name: "Iceland",
        population: "334,300",
        region: "Europe",
        flag:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
        capital: "Reykjavik"
    }
];


const body = document.body;
const element = document.createElement("div")
element.id = "container"
body.append(element)
const div = document.getElementById("container")



let data = countriesInfo.forEach((elem) => {
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
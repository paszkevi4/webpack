import { getPlanets, getCharacters } from './axios'



const root = document.querySelector("#root");
const btnPlanets = document.querySelector(".planetsBtn");
const charsBtn = document.querySelector(".charsBtn");
let characters1 = ''
window.characters1 = characters1


const setPlanets = async () => {
    root.innerHTML = ''
    const planets = await getPlanets()
    planets.results.map(el => {
        root.innerHTML += `<p>${el.name}</p>`
    })
    console.log(planets.results)
}

const setCharacters = async () => {
    root.innerHTML = ''
    let characters = await getCharacters()
    characters.map(el => {
        root.innerHTML += `<p>
        <span>${el.name}</span>
        <span>${el.birth_year}</span>
        <span>${el.gender}</span>
      </p>`
    })

    characters1 = characters
    console.log(characters)
}


btnPlanets.addEventListener("click", setPlanets)
charsBtn.addEventListener("click", setCharacters)


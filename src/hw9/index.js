const root = document.querySelector("#root");
import './index.sass'

for (let i = 0; i < 5; i++) {
    const className = `row${i}`

    root.innerHTML += `<div class = ${className} }></div>`;
    for (let j = 0; j < 5; j++) {
        const color = "#" + ((1 << 24) * Math.random() | 0).toString(16)
        const row = document.querySelector(`.row${i}`);
        row.innerHTML += `<div class='cell' style = 'background-color : ${color}' ></div>`;
    }
}

console.log(root)
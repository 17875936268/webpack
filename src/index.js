import test from './test';
import "./index.css";
document.body.insertAdjacentHTML("beforeend",`<img src="/src/an.jpg" />`)
document.body.insertAdjacentHTML("beforeend","<h1>hhhhhhhhh号啊!</h1>")
// document.body.insertAdjacentHTML("beforeend",`n<img src="${An}" />`)
let a = 12;
let b = 12;

function add(x, y) {
    return x + y;
}

let c = add(a, b);
console.log(c);
console.log(1);

test();

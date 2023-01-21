import './style.css'
import buttonStyle from './button.module.css';
import imageStyle from './img.module.css';
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import rayo from './rayo.jpeg'
import data from "./data.json";

const modules = import.meta.glob('./modules/*.js');

console.log(modules);

for (const path in modules) {
  modules[path]().then(m =>{
    m.load();
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Gersomsim!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">Click Me</button>
    <img id="img">
    <pre>${JSON.stringify(data)}</pre>
  </div>
`

setupCounter(document.querySelector('#counter'))
document.querySelector('#btn').className = buttonStyle.btn;
const img = document.querySelector('#img');
img.src = rayo;
img.className = imageStyle.img;


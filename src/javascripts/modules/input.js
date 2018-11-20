import 'gsap';

const userInput = document.querySelector('#input');
const mirrorInput = document.querySelector('#mirror-input');

const svgSquare = `
<div class="shape"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M0 0h100v100H0z" fill-rule="evenodd"/></svg></div>`

let index = 0;

const input = {
  init() {
    userInput.addEventListener('keyup', function(e) {
      index++
      // const charArray = ([...this.value]);

      // for (let i = 0; i < charArray.length; i++) {
        // charArray[i]
        // markup += charArray[i];
        const letterDiv = `<div id="char${index}" class="char">${e.key}</div>`;
        mirrorInput.innerHTML += letterDiv;
        TweenLite.to(`#char${index}`, 1, {opacity:1});
      // }
    });
  }
}

export { input }

import 'gsap';
import { utils } from './utils';

const userForm = document.querySelector('#form');
const userInput = document.querySelector('#input');
const mirrorInput = document.querySelector('#mirror-input');
const submitButton = document.querySelector('#submit-button')

const letterAnim = (letter, i) => {
  const letterTl = new TimelineMax({delay: 0.1*i});

  letterTl
  .to(letter, 0.1, {
    scaleX: 1.25,
    scaleY: 0.75,
    transformOrigin: "50% 100%",
    repeat: 1,
    yoyoEase: Power1.easeIn,
  })
  .to(letter, 0.1, {
    y: -150,
    repeat: 1,
    yoyoEase: Power1.easeIn,
  })
  .to(letter, 0.1, {
    rotation: 360
  }, "-=0.15")
  .to(letter, 0.1, {
    scaleX: 1.25,
    scaleY: 0.75,
    transformOrigin: "50% 100%",
    repeat: 1,
    yoyoEase: Power1.easeIn,
  })
}

const btnPressAnim = new TimelineMax({paused:true});
btnPressAnim.to(submitButton, 0.02, {
  scale: 0.8,
  yoyo: true,
  repeat: 1
})

const input = {
  init() {
    userInput.focus();

    userForm.addEventListener('submit', function(e) {
      submitButton.focus();
      btnPressAnim.restart();
      e.preventDefault();

      let markup = '';
      const charArray = [...this.elements['user-input'].value];

      for (let i = 0; i < charArray.length; i++) {
        const charMarkup = charArray[i] == " " ? `<div class="char">&nbsp;</div>` : `<div class="char js-char">${charArray[i]}</div>`;
        markup += charMarkup;
      }

      mirrorInput.innerHTML = markup;
      utils.addClass(userInput, 'is-hidden');
      utils.removeClass(mirrorInput, 'is-hidden');

      const addedEls = Array.from(document.querySelectorAll('.js-char'));

      for (var i = 0; i < addedEls.length; i++) {
        const letter = addedEls[i];
        letterAnim(letter, i);
      }
    });

    mirrorInput.addEventListener('click', function() {
      utils.removeClass(userInput, 'is-hidden');
      utils.addClass(mirrorInput, 'is-hidden');
      userInput.focus();
    })
  }
}

export { input }

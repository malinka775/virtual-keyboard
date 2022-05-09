document.addEventListener('DOMContentLoaded', () => {
  const BODY = document.querySelector('body');
  class Keyboard {
    constructor(lang) {
      this.keys = lang === 'en'
        ? [
          { label: '`', value: '`', additional: '~' },
          { label: '1', value: '1', additional: '!' },
          { label: '2', value: '2', additional: '@' },
          { label: '3', value: '3', additional: '#' },
          { label: '4', value: '4', additional: '$' },
          { label: '5', value: '5', additional: '%' },
          { label: '6', value: '6', additional: '^' },
          { label: '7', value: '7', additional: '&' },
          { label: '8', value: '8', additional: '*' },
          { label: '9', value: '9', additional: '(' },
          { label: '0', value: '0', additional: ')' },
          { label: '-', value: '-', additional: '_' },
          { label: '=', value: '=', additional: '+' },
          {
            label: 'backspace', value: null, last: true, id: 'Backspace',
          },

          { label: 'tab', value: '   ', id: 'Tab' },
          { label: 'q', value: 'q' },
          { label: 'w', value: 'w' },
          { label: 'e', value: 'e' },
          { label: 'r', value: 'r' },
          { label: 't', value: 't' },
          { label: 'y', value: 'y' },
          { label: 'u', value: 'u' },
          { label: 'i', value: 'i' },
          { label: 'o', value: 'o' },
          { label: 'p', value: 'p' },
          { label: '[', value: '[', additional: '{' },
          { label: ']', value: ']', additional: '}' },
          {
            label: '\\', value: '\\', additional: '|', last: true,
          },

          { label: 'caps lock', value: '', id: 'CapsLock' },
          { label: 'a' },
          { label: 's' },
          { label: 'd' },
          { label: 'f' },
          { label: 'g' },
          { label: 'h' },
          { label: 'j' },
          { label: 'k' },
          { label: 'l' },
          { label: ';', additional: ':' },
          { label: "'", additional: '"' },
          { label: 'enter', last: true, id: 'Enter' },

          { label: 'shift', id: 'ShiftLeft' },
          { label: 'z' },
          { label: 'x' },
          { label: 'c' },
          { label: 'v' },
          { label: 'b' },
          { label: 'n' },
          { label: 'm' },
          { label: ',', additional: '<' },
          { label: '.', additional: '>' },
          { label: '/', additional: '?' },
          { label: 'up', id: 'ArrowUp' },
          { label: 'shift ', last: true, id: 'ShiftRight' },

          { label: 'ctrl', id: 'ControlLeft' },
          { label: 'win', id: 'MetaLeft' },
          { label: 'alt', id: 'AltLeft' },
          { label: 'space', value: ' ', id: 'Space' },
          { label: 'alt', id: 'AltRight' },
          { label: 'ctrl', id: 'ControlRight' },
          { label: 'left', id: 'ArrowLeft' },
          { label: 'down', id: 'ArrowDown' },
          { label: 'right', id: 'ArrowRight' },
        ]
        : [
          { label: 'ё' },
          { label: '1', additional: '!' },
          { label: '2', additional: '"' },
          { label: '3', additional: '№' },
          { label: '4', additional: ';' },
          { label: '5', additional: '%' },
          { label: '6', additional: ':' },
          { label: '7', additional: '?' },
          { label: '8', additional: '*' },
          { label: '9', additional: '(' },
          { label: '0', additional: ')' },
          { label: '-', additional: '_' },
          { label: '=', additional: '+' },
          { label: 'backspace', last: true },

          { label: 'tab' },
          { label: 'й' },
          { label: 'ц' },
          { label: 'у' },
          { label: 'к' },
          { label: 'е' },
          { label: 'н' },
          { label: 'г' },
          { label: 'ш' },
          { label: 'щ' },
          { label: 'з' },
          { label: 'х' },
          { label: 'ъ' },
          { label: '\\', additional: '/', last: true },

          { label: 'caps lock' },
          { label: 'ф' },
          { label: 'ы' },
          { label: 'в' },
          { label: 'а' },
          { label: 'п' },
          { label: 'р' },
          { label: 'о' },
          { label: 'л' },
          { label: 'д' },
          { label: 'ж' },
          { label: 'э' },
          { label: 'enter', last: true },

          { label: 'shift' },
          { label: 'я' },
          { label: 'ч' },
          { label: 'с' },
          { label: 'м' },
          { label: 'и' },
          { label: 'т' },
          { label: 'ь' },
          { label: 'б' },
          { label: 'ю' },
          { label: '.', additional: ',' },
          { label: 'up', id: 'up' },
          { label: 'shift', last: true },

          { label: 'ctrl' },
          { label: 'win' },
          { label: 'alt' },
          { label: 'space' },
          { label: 'alt' },
          { label: 'ctrl' },
          { label: 'left', id: 'left' },
          { label: 'down', id: 'down' },
          { label: 'right', id: 'right' },
        ];
    }

    capsLock = false;

    shift = false;

    ctlr = false;

    meta = false;

    alt = false;

    value = '';

    textarea = null;

    init() {
      const keyboardWrapper = document.createElement('div');
      keyboardWrapper.classList.add('wrapper');
      const keyboardEl = document.createElement('div');
      keyboardEl.classList.add('keyboard');
      const container = document.createElement('div');
      container.classList.add('container');
      const textarea = document.createElement('textarea');
      textarea.classList.add('text');
      textarea.setAttribute('autofocus', true);
      textarea.rows = '10';
      textarea.value = this.value;
      this.textarea = textarea;
      keyboardWrapper.append(keyboardEl);
      container.append(textarea);
      container.append(keyboardWrapper);
      BODY.append(container);
      BODY.addEventListener('blur', () => textarea.focus());
      textarea.addEventListener('blur', () => {
        textarea.focus();
      });
      this.keys.forEach((key) => {
        const keyButton = document.createElement('div');
        keyButton.classList.add('key');
        // add size-classes, id
        switch (key.label) {
          case 'tab':
          case 'shift':
          case 'backspace':
          case 'ctrl':
          case 'enter':
          case 'caps lock':
          case 'alt':
          case 'win': keyButton.classList.add('key_custom-size'); keyButton.id = key.id; break;
          case 'space': keyButton.classList.add('key_xl'); keyButton.id = key.id; break;
          case 'up':
          case 'left':
          case 'down':
          case 'right': keyButton.id = key.id; break;
          default: break;
        }
        // if key has additional value on it
        if (key.id) {
          keyButton.id = key.id;
        }
        if (key.additional) {
          keyButton.setAttribute('data-additional', key.additional);
          keyButton.setAttribute('data-value', key.label);
          keyButton.innerHTML = `${key.label.toUpperCase()}<div class="key_additional">${key.additional}</div>`;
          keyButton.addEventListener('click', () => {
            this.value += this.shift ? key.additional : key.label;
            textarea.value = this.value;
          });
        // arrows
        } else if (key.label === 'up' || key.label === 'right' || key.label === 'down' || key.label === 'left') {
          const className = `icon-${key.id}`;
          keyButton.innerHTML = `<span class=${className}></span>`;
          switch (key.label) {
            case 'right':
              keyButton.addEventListener('click', () => {
                this.textarea.selectionStart += 1;
                this.textarea.selectionEnd = this.textarea.selectionStart;
              }); break;
            case 'left':
              keyButton.addEventListener('click', () => {
                this.textarea.selectionStart -= 1;
                this.textarea.selectionEnd -= 1;
              }); break;
            case 'up':
              keyButton.addEventListener('click', () => {
                this.value += 'up';
                this.onChangeHandler();
              }); break;
            case 'down':
              keyButton.addEventListener('click', () => {
                this.value += 'down';
                this.onChangeHandler();
              }); break;
            default: break;
          }
        } else {
          switch (key.label) {
            case 'tab':
              keyButton.innerText = key.label.toUpperCase();
              keyButton.addEventListener('click', () => {
                this.value += '\t';
                this.onChangeHandler();
              });
              break;
            case 'caps lock':
              keyButton.innerHTML = `<div id="toggle"></div>${key.label.toUpperCase()}`;
              keyButton.addEventListener('click', () => {
                this.capsLock = !this.capsLock;
                keyButton.classList.toggle('on');
              }); break;
            case 'enter':
              keyButton.innerText = key.label.toUpperCase();
              keyButton.addEventListener('click', () => {
                this.value += '\n';
                this.onChangeHandler();
              }); break;
            case 'backspace':
              keyButton.innerText = key.label.toUpperCase();
              keyButton.addEventListener('click', () => {
                this.value = this.value.slice(0, -1);
                this.onChangeHandler();
              });
              break;
            case 'shift':
            case 'ctrl':
            case 'alt': keyButton.innerText = key.label.toUpperCase(); break;
            default:
              keyButton.innerText = key.label.toUpperCase();
              keyButton.addEventListener('click', () => {
                if (this.capsLock) {
                  this.value += this.shift ? key.label.toLowerCase() : key.label.toUpperCase();
                } else {
                  this.value += this.shift ? key.label.toUpperCase() : key.label.toLowerCase();
                }
                this.onChangeHandler();
              });
          }
        }
        keyboardEl.append(keyButton);
        if (key.last) {
          const BREAKLINE = document.createElement('div');
          BREAKLINE.classList.add('break');
          keyboardEl.append(BREAKLINE);
        }

        document.addEventListener('keydown', (e) => {
          if (e.code === key.id) {
            console.log(keyButton);
            keyButton.classList.add('key_active');
            switch (e.code) {
              case ('Backspace'): this.value = this.value.slice(0, -1); break;
              case ('ShiftLeft'):
              case ('ShiftRight'): this.shift = true; console.log(this.shift); break;
              case ('Enter'): this.value += '\n'; break;
              case ('Tab'): e.preventDefault(); this.value += '\t'; break;
              case ('CapsLock'): this.capsLock = !this.capsLock; keyButton.classList.toggle('on'); break;
              case ('ControlLeft'):
              case ('ControlRight'): this.ctlr = true; break;
              case ('MetaLeft'): this.meta = true; break;
              case ('AltLeft'):
              case ('AltRight'): this.alt = true; break;
              case ('ArrowLeft'):
                this.textarea.selectionStart -= 1;
                this.textarea.selectionEnd -= 1;
                break;
              case ('ArrowRight'):
                this.textarea.selectionStart += 1;
                this.textarea.selectionEnd = this.textarea.selectionStart;
                break;
              case ('ArrowDown'):
              case ('ArrowUp'):
              default: break;
            }
          } else if (this.shift && e.key === key.additional) {
            keyButton.classList.add('key_active');
            this.value += key.additional;
          } else if (e.key === key.label) {
            keyButton.classList.add('key_active');
            this.value += key.label;
          }
        });
        document.addEventListener('keyup', (e) => {
          if (e.code === key.id) {
            keyButton.classList.remove('key_active');
            switch (e.code) {
              case ('ShiftLeft'):
              case ('ShiftRight'): this.shift = false; break;
              case ('ControlLeft'):
              case ('ControlRight'): this.ctlr = false; break;
              case ('MetaLeft'): this.meta = false; break;
              case ('AltLeft'):
              case ('AltRight'): this.alt = false; break;
              default: break;
            }
          } else if (e.key === key.label) {
            keyButton.classList.remove('key_active');
          } else if (this.shift && e.key === key.additional) {
            keyButton.classList.remove('key_active');
          }
        });
      });
    }

    onChangeHandler() {
      this.textarea.value = this.value;
      console.log(this.textarea.selectionStart, this.textarea.selectionEnd);
    }
  }
  const keyboard = new Keyboard('en');
  keyboard.init();
  // const keys = document.querySelectorAll('.key');
  // const capsLock = document.querySelector('#CapsLock');
  // const textarea = document.querySelector('.text');
  // textarea.addEventListener('input', () => {
  //   console.log(textarea.value);
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 'CapsLock') {
  //     keyboard.capsLock = !keyboard.capsLock;
  //     capsLock.classList.toggle('on');
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   for (let i = 0; i < keys.length; i += 1) {
  //     if (e.key === keys[i].getAttribute('data-value')) {
  //       keys[i].classList.add('key_active');
  //       keyboard.value += keys[i].getAttribute('data-value');
  //     }
  //     if (keyboard.shift && keys[i].getAttribute('data-additional') === e.key) {
  //       keyboard.value += keys[i].getAttribute('data-additional');
  //       keys[i].classList.add('key_active');
  //     }
  //     if (keyboard.capsLock && e.key === keys[i].innerText) {
  //       keyboard.value += keyboard.shift ? e.key.toLowerCase() : e.key;
  //       keys[i].classList.add('key_active');
  //     }
  //     if ((!keyboard.capsLock && keyboard.shift && e.key === keys[i].innerText.toLowerCase())
  //       || (!keyboard.capsLock && !keyboard.shift
  // && e.key === keys[i].innerText.toLowerCase())) {
  //       keyboard.value += keyboard.shift ? e.key : e.key.toLowerCase();
  //       keys[i].classList.add('key_active');
  //     } else if (keys[i].id === e.code) {
  //       keys[i].classList.add('key_active');
  //       if (e.code === 'Tab') {
  //         e.preventDefault();
  //         keyboard.value += '\t';
  //         keyboard.onChangeHandler();
  //       }
  //       if (e.code === 'Backspace') {
  //         keyboard.value = keyboard.value.slice(0, -1);
  //       }
  //       if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
  //         keyboard.shift = true;
  //       }
  //     }
  //   }
  // });
  // document.addEventListener('keyup', (e) => {
  //   for (let i = 0; i < keys.length; i += 1) {
  //     if (e.key === keys[i].getAttribute('data-value')) {
  //       keys[i].classList.remove('key_active');
  //     }
  //     if (keyboard.shift && keys[i].getAttribute('data-additional') === e.key) {
  //       keys[i].classList.remove('key_active');
  //     }
  //     if (keyboard.shift && e.key === keys[i].innerText === e.key) {
  //       keys[i].classList.remove('key_active');
  //     }
  //     if (keyboard.shift && e.key === keys[i].innerText.toLowerCase() === e.key) {
  //       keys[i].classList.remove('key_active');
  //     }

  //     if (keyboard.capsLock && e.key === keys[i].innerText) {
  //       keys[i].classList.remove('key_active');
  //     } else if (!keyboard.capsLock && e.key === keys[i].innerText.toLowerCase()) {
  //       keys[i].classList.remove('key_active');
  //     }
  //     if (keys[i].id === e.code) {
  //       keys[i].classList.remove('key_active');
  //       if (e.code === 'Tab') {
  //         e.preventDefault();
  //       }
  //       if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
  //         keyboard.shift = false;
  //       }
  //     }
  //   }
  // });
});

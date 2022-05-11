const BODY = document.querySelector('body');
class Keyboard {
  constructor(lang) {
    this.language = lang;
    this.keys = this.language === 'en' ? this.en : this.ru;
  }

  en = [
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

    { label: 'tab', value: '\t', id: 'Tab' },
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
  ];

  ru = [
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
    {
      label: 'backspace', value: null, last: true, id: 'Backspace',
    },

    { label: 'tab', value: '\t', id: 'Tab' },
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

    { label: 'caps lock', value: '', id: 'CapsLock' },
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
    { label: 'enter', last: true, id: 'Enter' },

    { label: 'shift', id: 'ShiftLeft' },
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
  ];

  container = null;

  language = '';

  capsLock = false;

  shift = false;

  ctlr = false;

  meta = false;

  alt = false;

  value = '';

  textarea = null;

  render() {
    // add main elements
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('wrapper');
    const keyboardEl = document.createElement('div');
    keyboardEl.classList.add('keyboard');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    const textarea = document.createElement('textarea');
    textarea.classList.add('text');
    textarea.setAttribute('autofocus', true);
    textarea.rows = '10';
    textarea.value = this.value;
    this.textarea = textarea;
    keyboardWrapper.append(keyboardEl);
    this.container.append(textarea);
    this.container.append(keyboardWrapper);
    BODY.append(this.container);
    BODY.addEventListener('blur', () => textarea.focus());
    this.textarea.addEventListener('blur', () => {
      textarea.focus();
    });

    // add keys
    this.keys.forEach((key) => {
      const keyButton = document.createElement('div');
      keyButton.classList.add('key');
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
      if (key.id) {
        keyButton.id = key.id;
      }
      // if key has additional value on it
      if (key.additional) {
        keyButton.setAttribute('data-additional', key.additional);
        keyButton.setAttribute('data-value', key.label);
        keyButton.innerHTML = `${key.label.toUpperCase()}<div class="key_additional">${key.additional}</div>`;

      // arrows
      } else if (key.label === 'up' || key.label === 'right' || key.label === 'down' || key.label === 'left') {
        const className = `icon-${key.id}`;
        keyButton.innerHTML = `<span class=${className}></span>`;
      } else {
        // modificators
        switch (key.label) {
          case 'tab':
            keyButton.innerText = key.label.toUpperCase();
            break;
          case 'caps lock':
            keyButton.innerHTML = `<div id="toggle"></div>${key.label.toUpperCase()}`;
            break;
          case 'enter':
            keyButton.innerText = key.label.toUpperCase();
            break;
          case 'backspace':
            keyButton.innerText = key.label.toUpperCase();
            break;
          case 'shift':
          case 'ctrl':
          case 'alt': keyButton.innerText = key.label.toUpperCase(); break;
          default:
            keyButton.innerText = key.label.toUpperCase();
        }
      }
      keyboardEl.append(keyButton);
      // eslint-disable-next-line no-param-reassign
      key.button = keyButton;
      if (key.last) {
        const BREAKLINE = document.createElement('div');
        BREAKLINE.classList.add('break');
        keyboardEl.append(BREAKLINE);
      }
    });
  }

  addOnClickHandlers() {
    this.keys.forEach((key) => {
      const keyButton = key.button;
      keyButton.addEventListener('click', () => {
        switch (key.id) {
          case 'ArrowRight':
            this.textarea.selectionStart += 1;
            this.textarea.selectionEnd = this.textarea.selectionStart;
            break;
          case 'ArrowLeft':
            this.textarea.selectionStart -= 1;
            this.textarea.selectionEnd = this.textarea.selectionStart;
            break;
          case 'ArrowUp':
            this.textarea.selectionEnd = this.textarea.setSelectionRange(0, 0);
            break;
          case 'ArrowDown':
            this.textarea.selectionEnd = this.value.length;
            this.textarea.selectionStart = this.value.length;
            this.textarea.focus();
            break;
          case 'Tab':
            this.value += '\t';
            this.onChangeHandler();
            break;
          case 'CapsLock':
            this.capsLock = !this.capsLock;
            keyButton.classList.toggle('on');
            break;
          case 'Enter':
            this.value += '\n';
            this.onChangeHandler();
            break;
          case 'Backspace':
            this.value = this.value.slice(0, -1);
            this.onChangeHandler();
            break;
          case 'Space':
            this.value += ' ';
            this.onChangeHandler();
            break;
          case 'ShiftRight':
          case 'ShiftLeft':
          case 'MetaLeft':
          case 'ControlLeft':
          case 'ControlRight':
          case 'AltLeft':
          case 'AltRight': break;
          default:
            if (key.additional) {
              this.value += this.shift ? key.additional : key.label;
              this.textarea.value = this.value;
            } else if (this.capsLock) {
              this.value += this.shift ? key.label.toLowerCase() : key.label.toUpperCase();
            } else {
              this.value += this.shift ? key.label.toUpperCase() : key.label.toLowerCase();
            }
            this.onChangeHandler();
        }
      });
    });
  }

  onKeyDown = (e) => {
    this.keys.forEach((key) => {
      const keyButton = key.button;
      if (e.code === key.id) {
        keyButton.classList.add('key_active');
        switch (e.code) {
          case ('Backspace'): this.value = this.value.slice(0, -1); break;
          case ('ShiftLeft'):
          case ('ShiftRight'):
            e.preventDefault();
            this.shift = true;
            if (this.alt) {
              e.preventDefault();
              this.onLanguageChange();
              this.addOnKeyEventHandlers();
              this.textarea.focus();
            }
            break;
          case ('Enter'): this.value += '\n'; break;
          case ('Tab'): e.preventDefault(); this.value += '\t'; this.onChangeHandler(); break;
          case ('CapsLock'): this.capsLock = !this.capsLock; keyButton.classList.toggle('on'); break;
          case ('ControlLeft'):
          case ('ControlRight'): this.ctlr = true; break;
          case ('MetaLeft'):
            this.meta = true;
            break;
          case ('AltLeft'):
          case ('AltRight'): e.preventDefault(); this.alt = true; break;
          case ('ArrowLeft'):
            this.textarea.selectionStart -= 1;
            this.textarea.selectionEnd -= 1;
            break;
          case ('ArrowRight'):
            this.textarea.selectionStart += 1;
            this.textarea.selectionEnd = this.textarea.selectionStart;
            break;
          // case ('Space'):
          case ('ArrowDown'):
          case ('ArrowUp'):
          default: break;
        }
      } else if (this.shift && e.key === key.additional) {
        keyButton.classList.add('key_active');
        this.value += key.additional;
      } else if (e.key.toLocaleLowerCase() === key.label) {
        if (!key.id) {
          keyButton.classList.add('key_active');
          this.value += e.key === key.label ? key.label : key.label.toUpperCase();
        }
      }
    });
  };

  addOnMouseDown() {
    document.addEventListener('mousedown', (e) => {
      if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight') {
        this.shift = true;
        console.log(this.shift);
      }
    });
  }

  addOnMouseUp() {
    document.addEventListener('mouseup', (e) => {
      if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight') {
        this.shift = false;
        console.log(this.shift);
      }
    });
  }

  onKeyUp = (e) => {
    this.keys.forEach((key) => {
      const keyButton = key.button;
      if (e.code === key.id) {
        keyButton.classList.remove('key_active');
        switch (e.code) {
          case ('ShiftLeft'):
          case ('ShiftRight'): this.shift = false; break;
          case ('ControlLeft'):
          case ('ControlRight'): this.ctlr = false; break;
          case ('MetaLeft'): this.meta = false; break;
          case ('AltLeft'):
          case ('AltRight'): e.preventDefault(); this.alt = false; break;
          default: break;
        }
      } else if (e.key.toLocaleLowerCase() === key.label) {
        keyButton.classList.remove('key_active');
      } else if (this.shift && e.key === key.additional) {
        keyButton.classList.remove('key_active');
      }
    });
  };

  addOnKeyEventHandlers() {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  onChangeHandler() {
    this.textarea.value = this.value;
  }

  onLanguageChange() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keydown', this.onKeyUp);
    this.container.remove();
    this.keys = this.keys === this.en ? this.ru : this.en;
    this.render();
    this.addOnClickHandlers();
    localStorage.setItem('lang', this.keys === this.en ? 'en' : 'ru');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  const keyboard = new Keyboard(lang);
  const infoDiv = document.createElement('div');
  infoDiv.style.color = 'yellow';
  infoDiv.innerText = 'Layout change: Alt + Shift \n This app was created on Windows OS \n Please make sure your device keyboard layout is English when first use';
  BODY.append(infoDiv);
  keyboard.render();
  keyboard.addOnClickHandlers();
  keyboard.addOnKeyEventHandlers();
  keyboard.addOnMouseDown();
  keyboard.addOnMouseUp();
});

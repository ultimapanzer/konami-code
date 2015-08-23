const codeMap = {"up": 38, "down": 40, "left": 37, "right": 39, "b": 66, "a": 65, "enter": 13};
const code = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a", "enter"];

class Konami {
  constructor(callbackFn, elem) {
    this.callbackFn = callbackFn;
    this.listen(elem);
  }
  curIndex = 0;
  timeoutId = null;
  getCodeAt(index) {
    return codeMap[code[index]];
  }
  listener = (event) => {
    let key = event.which || event.keyCode;
    this.curIndex = key === this.getCodeAt(this.curIndex) ? this.curIndex + 1 : 0;

    if (this.curIndex === code.length) {
      this.callbackFn();
    }
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.curIndex = 0;
    }, 1000);
  }
  listen(elem) {
    this.elem = elem || document;
    this.elem.onkeyup = this.listener;
  }
  unlisten() {
    this.elem.onkeyup = undefined;
  }
}

export default Konami;

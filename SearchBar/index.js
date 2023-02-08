let count = 0;

function keyDownHandler(event) {
  console.log(event.target.value, " pressed");
}

function delayHOC(fn, delay) {
  let timerId;
  return function () {
    let args = arguments;
    let self = this;
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
}

let keyHandlerDelayed = delayHOC(keyDownHandler, 300);

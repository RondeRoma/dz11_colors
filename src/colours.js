const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
  };
  
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  
  };
  let timerId = null;
  
  refs.btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.btnStart.disabled = true;
      refs.btnStop.disabled = false;
      console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
    }, 1000);
  });
  
  
  refs.btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
      refs.btnStop.disabled = true;
  });
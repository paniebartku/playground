// const time = () => {
//   const date = new Date().getHours();
//   console.log(date);
// };
// time();

const clock = () => {
  const time = new Date();
  console.log(time.toLocaleString());
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  document.querySelector(
    ".clock span"
  ).textContent = `${hours}: ${minutes} : ${seconds}`;
};

setInterval(clock, 1000);

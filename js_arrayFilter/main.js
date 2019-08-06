const numbers = [1, 2, 44, 55, 74, 234, 111];
const oddNumbers = numbers.filter(item => item % 2);
console.log(oddNumbers);
const evenNumbers = numbers.filter(item => !(item % 2));
console.log(evenNumbers);

(() => {
  const input = document.querySelector("input");
  const ul = document.querySelector(".listWrapper ul");
  const liElems = [...document.querySelectorAll(".listWrapper ul li")];

  const searchFn = e => {
    const searchText = e.target.value.toLowerCase();
    const results = liElems.filter(item => {
      return item.textContent.toLowerCase().includes(searchText);
    });
    console.log(results);
    ul.textContent = "";
    results.forEach(item => ul.appendChild(item));
  };
  input.addEventListener("input", searchFn, false);
})();

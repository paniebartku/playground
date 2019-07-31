const table = document.querySelector("#myTable"),
  ths = [...table.querySelectorAll("thead th")],
  trs = [...table.querySelectorAll("tbody tr")];
const df = document.createDocumentFragment();
ths.forEach(item => {
  item.addEventListener("click", function(e) {
    let target = e.target;

    trs.sort((a, b) => {
      const tdA = a.children[ths.indexOf(target)].textContent;
      const tdB = b.children[ths.indexOf(target)].textContent;
      console.log(tdA);
      console.log(tdB);
      if (tdA < tdB) {
        return -1;
      } else if (tdA > tdB) {
        return 1;
      }
    });
    console.log(trs);
    trs.forEach(item => {
      df.appendChild(item);
    });
    table.querySelector("tbody").appendChild(df);
  });
});

document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  fetch("text.txt")
    .then(res => {
      return res.text();
    })
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson() {
  fetch("posts.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(item => {
        output += `<li>${item.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getExternal() {
  fetch("http://api.icndb.com/jokes/random/4")
    .then(res => res.json())
    .then(data => {
      console.log(data.value);
      const jokes = data.value;
      let output = "";
      jokes.forEach(item => {
        output += `<li>${item.joke}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

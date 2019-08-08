//$ npm install -g json-server
//$ json-server --watch db.json
// open this folder in terminal ofkorz...

(function() {
  const btn = document.querySelector("button");
  const addBtn = document.querySelector(".addToJSON");

  const giveMeJSON = () => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => console.log(data));
  };

  btn.addEventListener("click", giveMeJSON);

  const newData = {
    id: "2",
    firstName: "exampleFirstName",
    lastName: "exampleLastName"
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const giveMe = () => {
    fetch("http://localhost:3000/employees", options2)
      .then(response => response.json())
      .then(json => console.log(json));
  };
  addBtn.addEventListener("click", giveMe);

  const data = {
    id: "",
    first_name: "elo",
    last_name: "melo",
    email: "elo@melo.com"
  };

  const options2 = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
})();

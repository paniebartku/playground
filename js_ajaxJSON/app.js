let url = "http://api.icndb.com/jokes/random/";

const getFn = function(e) {
  e.preventDefault();

  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${url}${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.type === "success") {
        response.value.forEach(item => {
          output += `<li>${item.joke}</li>`;
        });
      } else {
        output += "<li>Nope, nope, nope</li>";
      }
      document.querySelector("ul").innerHTML = output;
    }
  };

  xhr.send();
};

const button = document
  .querySelector(".get-jokes")
  .addEventListener("click", getFn, false);

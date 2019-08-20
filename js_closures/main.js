const giveMeANumber = 3;

function simpleAdd() {
  const inner = 2;
  return inner + giveMeANumber;
}

console.dir(simpleAdd);

// function simpleAdd(giveMeANumber) {
//   const inner = 2;
//   return inner + giveMeANumber;
// }

// console.log(simpleAdd(3));

const addTo = function(passed) {
  const add = function(inner) {
    return passed + inner;
  };
  return add;
};
console.log(addTo(1));

const addThree = new addTo(3);
const addFour = new addTo(4);

console.log(addThree(1));
console.log(addFour(1));

//lexical scope is fucking fun, yeah?

let f;

if (true) {
  let i = 1;

  f = () => console.log(i);
}
//console.log(i); - err
f();

let z = () => {
  let y = 1;
  let q = 2; // it is not a clousure, why? Bcs function dosen't use this variable.
  return () => {
    console.log(y);
  };
};

console.dir(z());

for (let i = 0; i < 3; i++) {
  const f = () => {
    console.log(i);
  };
  f();
}

//something with block scope... is fun
for (let i = 999; i < 1002; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("after the loop");

//something with function scope... like var is... not fun

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("after loop with var"); //3x3

//for fix this, use let...or function

for (var i = 0; i < 3; i++) {
  (i => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

function makeAdjectifier(adjective) {
  return function(string) {
    return adjective + " " + string;
  };
}
let coolifier = makeAdjectifier("extra");

console.log(coolifier("confernece"));

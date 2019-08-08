async function myFn() {
  //return "hello";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("elo melo"), 1000);
  });
  const error = false;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("nope nope nope"));
  }
}
myFn()
  .then(res => console.log(res))
  .catch(err => console.log(err));

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  return data;
}
getUsers().then(users => console.log(users));

async function myFunc() {
  // Await for the promise to resolve
  await new Promise(resolve => {
    setTimeout(() => {
      // Resolve the promise
      resolve(console.log("hello"));
    }, 3000);
  });
  // Once the promise gets resolved continue on
  console.log("hi");
}

// Call the function
myFunc();

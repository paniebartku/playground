const posts = [
  { title: "post one", content: "this is post one" },
  { title: "post two", content: "this is post two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("smth went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(item => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post three", content: "This is post three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });

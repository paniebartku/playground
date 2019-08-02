const posts = [
  { title: "post one", content: "this is post one" },
  { title: "post two", content: "this is post two" }
];

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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

createPost({ title: "post three", content: "This is post three" }, getPosts);

//Basic structure

// (function() {
//   //private uber alles

//   return {
//     // declare public var and funcs
//   };
// })();

//Standard module pattern

const UICtrl = (function() {
  let text = "hello, we are going to die";
  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();

//Revealing module pattern

const ItemCtrl = (function() {
  let data = [];
  function add(item) {
    data.push(item);
    console.log("item added....");
  }
  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: "devil" });
console.log(ItemCtrl.get(1));

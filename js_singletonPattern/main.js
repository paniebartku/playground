const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: "john" });
    return object;
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1);
console.log(instance2);

// always the same instance

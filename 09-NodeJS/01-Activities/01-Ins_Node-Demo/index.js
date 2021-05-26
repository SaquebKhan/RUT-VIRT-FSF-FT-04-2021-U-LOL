// Run this from the command line using 'node index.js'
(function () {
  console.log(this);
})();

(
    function () {
      console.log("Hello!")
    }
) ();

console.log(this);

// Define a function, iterativeLog(), that accepts an array. Call .forEach() on this array, and inside the callback, log each element with the format ${index}: ${element}.
// Define a function, iterate, that accepts a callback. Within the iterate() function, you should initialize an array. It can contain anything you want, but make sure that it is not empty! Call .forEach() on this array, passing the callback to .forEach(). Then return the array that you initialized.
// Define a function, doToArray that accepts an array and a callback. Call .forEach() on the array, passing the callback as the forEach callback.

function iterativeLog(getA) {
  getA.forEach(function(element,index) {
    console.log(`${index}: ${element}`);
  });
}

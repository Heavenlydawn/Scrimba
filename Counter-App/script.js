// initialize count
// listen for clicks
// increment the count when button is clicked
// Change the count-el in the html file to the new count

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function decrement() {
  count -= 1;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = 0;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  console.log(count);

//   in place of the reset button we can rewrite the code like this

//     countEl.textContent = 0
//     count = 0
}

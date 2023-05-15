let count = 0;
let totalNumber = document.getElementById("countNumber");
let saveNumber = document.getElementById("saveNumber");

function increment() {
  count += 1;
  totalNumber.textContent = count;
}

function save() {
  let space = count + " - ";
  saveNumber.textContent += space;
  count = 0;
  totalNumber.textContent = 0;
}

function reload() {
  saveNumber.textContent = "Save: ";
  count = 0;
  totalNumber.textContent = 0;
}

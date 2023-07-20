function decrement() {
  //fetch the value from the html content  which returns the string value
  //   .. to convert the string into number we use the parseint method

  let value = parseInt(document.querySelector("#count").innerHTML);
  value = value - 1;
  document.querySelector("#count").textContent = value;
}
decrement();

function increment() {
  let value = parseInt(document.querySelector("#count").innerHTML);
  value = value + 1;
  document.querySelector("#count").textContent = value;
}

increment();

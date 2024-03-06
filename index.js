/*let numberOfPeople = 24;
//let numberOfPeople = document.getElementsByName("numberOfPeople")
const SLICE_PER_PERSON = 2;
const SLICE_PER_PIZZA = 12;
const COST_PER_PIZZA = 18.75;
*/
//let cost =
//  ((numberOfPeople * SLICE_PER_PERSON) / SLICE_PER_PIZZA) * COST_PER_PIZZA;
//let msg = `The cost of pizza is for ${numberOfPeople} peeps is:${cost}`;
//alert(msg);
//document.getElementById("total").innerHTML = msg;
// const el= document.getElementById("total")
// el.textContent=msg;

//document.getElementById("total").textContent = msg;
const btnCal = document.getElementById("btnCalculate");
/////
function Calculation() {
  //let describe variable just use in block?!
  //name input specific in the form
  //id unique ID
  let numberOfPeople = document.getElementById("numberOfPeople").value;
  //let numberOfPeople = document.getElementsByName("numberOfPeople")
  const SLICE_PER_PERSON = 2;
  const SLICE_PER_PIZZA = 12;
  const COST_PER_PIZZA = 18.75;
  alert(document.getElementById("numberOfPeople").value);
  //numberOfPeople = document.getElementById("numberOfPeople").value;
  let cost =
    ((numberOfPeople * SLICE_PER_PERSON) / SLICE_PER_PIZZA) * COST_PER_PIZZA;
  let msg = `The cost of pizza is for ${numberOfPeople} peeps is:${cost}`;
  document.getElementById("total").textContent = msg;
}
btnCal.addEventListener("click", Calculation);

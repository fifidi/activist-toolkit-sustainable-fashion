/* .js files add interaction to your website */

/*key feature fact list*/
var factList = ["In the US, about 2,150 pieces of clothing are thrown away each second",/*0*/
  "On average, people throw away articles of clothing after 7 to 10 wears",/*1*/
  "Textiles account for 15% of all petrochemical products",/*2*/
  "Less than 1% of recycled garments are then turned into new textiles",/*3*/
  "There is approximately $100 billion of material loss each year due to underutilization",/*4*/
  "Each year, 215 liters of water are wasted to make textiles"];/*5*/

console.log (factList[0])

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

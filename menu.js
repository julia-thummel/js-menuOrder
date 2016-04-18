// begin with a blank/new order
var order = '';
var l = 'lettuce';


// build a function to ask questions
function question(questiontext) {
  //what our function will do
  var answerinput = prompt(questiontext);
  order = order + ", " + answerinput;

} // taco, black beans, chicken, white rice, peppers
function questionYN(ingredient) {
  //what our function will do
  var myPrompt = "Do you want: " + ingredient + "?";
  var answerinput = prompt(myPrompt);
  if (answerinput.toUpperCase() === "YES"){
    order = order + ", " + ingredient;
  }
} // taco, black beans, chicken, white rice, peppers

// call the QUESTION function with the order options
question("Do you want a burrito, a bowl, or a taco?");
question("Do you want black beans or pinto beans?");
question("Do you want chicken, beef, or carnitas?");
question("Do you want white rice or brown rice?");
questionYN("lettuce");
questionYN("guac");

// output their order
document.write("<p>You ordered: " + order + "<p>");

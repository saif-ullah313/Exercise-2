//Question No 1
//1) Create a function to convert Celsius to Fahrenheit. Use it to convert the temperatures below:
function Convert(){
    let degree =parseFloat( document.getElementById("Deg").value);
    let fah=(degree*9/5)+32;
    document.getElementById("para").innerHTML= `The Fahrenheit of Celsius  ${degree} is ${fah}`;
}

/************************************************************************ */
//Question No 2
//2) The array below is the classification of students in a contest. It is ordered from lowest to highest grades.
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
var newarray = classification.slice(-3,);

document.getElementById("TopThree").innerHTML="The name of three best students are:<br> 1. " + newarray[2] + "<br> 2. " +newarray[1] + "<br> 3. "+ newarray[0];



/************************************************************************** */
//Question No 3
//3) Consider the object below:
  var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

//a) Show the course title in the box below:
document.getElementById("title").innerHTML = `1. The Course:   ${course.title}`;

//b) The main category is the first element of the categories array. Show it in the box below:
document.getElementById("categories").innerHTML = `2. The main Category: ${course.categories}`;

//c) Create a method to calculate the percentage of 5 stars reviews rounded with no decimal places and show the result below:
document.getElementById("percentage").innerHTML= `3. Percentage of 5 stars reviews: ${course["5_stars_reviews"]}`;



/******************************************************************************* */
//Question No 4:
//4) See the shopping list below:
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
var newshoppingList = shoppingList.slice(0,7);
var shoppingList1 =newshoppingList.unshift("Chocolate");

document.getElementById("removelastitem").innerHTML ="The new string is " + "[" + newshoppingList + "]";

//b) Add two more items at the end of the list: Cheese and Eggs
var  shoppingList2 = shoppingList.push("Cheese","Eggs");
console.log(shoppingList); 
document.getElementById("addmoreitem").innerHTML = "The new string is " + "[" + shoppingList + "]";



/***************************************************************************************** */


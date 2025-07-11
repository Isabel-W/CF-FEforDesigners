// alert("Hello, noce to have you here!");

console.log("Hi. nice to have you around!")


/* ======= playground ======= */
var me = { name: "Isabel", age: 29, location: "Munich" };
console.log(me);
console.log(me.name);

var mustermensch = { name: "Alex", age: 21, location: "Vienna" };

console.log((me.age + mustermensch.age) / 2);

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function times(number1, number2) {
  return number1 * number2;
}

var result = add(100, times(2, 10));

function check(value) {
  if (value < 200) {
    value = "not calculated";
  } else {
    value == value;
  }
  return value;
}

console.log("Calculated result is: " + check(result) + ".");


function loop(number) {
  if (number > 0) {
    for (var i = 1; i <= 3; i++) {
      sum = number + i;
      console.log(i);
    }
    return sum;
  }
}

console.log("Try loop, with result: " + loop(2) + ".");

function checkvalue(checknumber){
  if (checknumber > 0 && (checknumber <10)){
    return true;
  } else {
    return false;
  }
}

var checknumber = 10;

console.log("Checking number "+checknumber+", with result: " + checkvalue(10)+": Number is smaller than 0 or bigger than 9.")
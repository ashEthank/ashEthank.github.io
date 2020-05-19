$(() => {

let value = [200, 400, 600, 800, 1000];
let one = Math.ceil(Math.random() * 63);
let two = Math.ceil(Math.random() * 63);
let three = Math.ceil(Math.random() * 63);
let four = Math.ceil(Math.random() * 63);
let five = Math.ceil(Math.random() * 63);
let six = Math.ceil(Math.random() * 63);

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);
// console.log(six);

let $firstCat = $('#first');
let $secondCat = $('#second');
let $thirdCat = $('#third');
let $fourthCat = $('#fourth');
let $fifthCat = $('#fifth');
let $sixthCat = $('#sixth');

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : one,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $firstCat.text(data[0].category.title);
});

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : two,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $secondCat.text(data[0].category.title);
});

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : three,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $thirdCat.text(data[0].category.title);
});

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : four,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $fourthCat.text(data[0].category.title);
});

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : five,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $fifthCat.text(data[0].category.title);
});

$.ajax({
    url: "http://www.jservice.io/api/clues",
    type: "GET",
    data: {
      "category" : six,
      "$count" : 1
    }
}).done(function(data) {
  console.log(data[0].category.title);
  $sixthCat.text(data[0].category.title);
});

$('#01').on('click', () => {
  console.log('Hello')
  window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/home.html')
})

})

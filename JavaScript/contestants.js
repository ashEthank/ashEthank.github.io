$(() => {

  let score = 0;

  sessionStorage.setItem('score', score)

  let one = Math.ceil(Math.random() * 63);
  let two = Math.ceil(Math.random() * 63);
  let three = Math.ceil(Math.random() * 63);
  let four = Math.ceil(Math.random() * 63);
  let five = Math.ceil(Math.random() * 63);
  let six = Math.ceil(Math.random() * 63);

  sessionStorage.setItem('one', one);
  sessionStorage.setItem('two', two);
  sessionStorage.setItem('three', three);
  sessionStorage.setItem('four', four);
  sessionStorage.setItem('five', five);
  sessionStorage.setItem('six', six);

$('#name').text(sessionStorage.getItem('name'));
$('#occupation').text(sessionStorage.getItem('occupation'));
$('#city').text(sessionStorage.getItem('city'));

})

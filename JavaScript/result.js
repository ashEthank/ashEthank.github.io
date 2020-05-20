$(() => {

console.log(sessionStorage.getItem('name'));
console.log(`$${sessionStorage.getItem('score')}`);

$('#one').text(sessionStorage.getItem('name'));
$('#two').text(`$${sessionStorage.getItem('score')}`);

})

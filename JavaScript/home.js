$(() => {

sessionStorage.clear();

console.log('Test');
console.log($);

$('.submitBtn').on('click', () => {
let $name = $('#name');
let $occupation = $('#occupation');
let $city = $('#city');
let $difficulty = $('input:radio[name=difficulty]:checked', '.difficulty').val();

document.querySelector('.difficulty').textContent = $difficulty;

sessionStorage.setItem('name', (($name).val()));
sessionStorage.setItem('occupation', (($occupation).val()));
sessionStorage.setItem('city', (($city).val()));
sessionStorage.setItem('difficulty', $difficulty);
})

})

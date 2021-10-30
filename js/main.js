//establish skill variable in global scope for localStorage purposes, pass a number to retrieve the key
//loop through localStorage and display/append any element names to the main div

const skill = localStorage.key(1)
// this statement will retrieve the value of the second item in localStorage.
//The key() can also be used in a loop statement to retrieve all the items in the local storage.

    for (i = 0; i < localStorage.length; i++){
    $('.main').append(`<div id="text"><span id="box">X</span>${localStorage.key(i)}</div>`);
    };

//upon click of add button, append the input into the main div and set the item in localStorage    

$('#add').on('click', function() {
    let $input = $('input').val();
    $('.main').append(`<div id="text"><span id="box">X</span>${$input}</div>`);
    //in this case $input is the key and the value for localStorage
    localStorage.setItem($input, $input)
    $('input').val('');
})

//upon click of main element, remove text from main div
$('.main').on('click', function() {
    let $listText = $('#text');
    $listText.remove();
})
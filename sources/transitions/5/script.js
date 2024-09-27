let container = document.querySelector('#container');
container.addEventListener('click', function(e) {
    container.classList.toggle('pizza');

    setTimeout(function() {
        container.classList.toggle('pizza');
    }, 5000);
    setTimeout(function() {
        container.classList.toggle('pizza');
    }, 6000);
});


let container2 = document.querySelector('#container2');
container2.addEventListener('click', function(e) {
    container2.classList.toggle('pasta');
    // container2.classList.add('pasta');
});

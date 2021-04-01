const click = document.querySelector('.menu-toggler');
const link = document.querySelector('.link');

click.addEventListener('click', function() {
    click.classList.toggle('active');
    link.classList.toggle('active');  
})
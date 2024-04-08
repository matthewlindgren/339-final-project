
document.querySelector('.search').addEventListener('click', function() {
    document.querySelector('.main-bar').classList.toggle('fade-in');
    document.querySelector('.main-bar').classList.toggle('fade-out');
    document.querySelector('#search-field').classList.toggle('enlarge-search');
    document.querySelector('#search-field').classList.toggle('shrink-search');
    document.querySelector('.search').classList.toggle('spin');
    document.querySelector('.search').classList.toggle('spin-reverse');
})
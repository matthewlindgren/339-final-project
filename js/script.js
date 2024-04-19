
document.querySelector('.search').addEventListener('click', function() {
    document.querySelector('.main-bar').classList.toggle('fade-in');
    document.querySelector('.main-bar').classList.toggle('fade-out');
    document.querySelector('#search-field').classList.toggle('enlarge-search');
    document.querySelector('#search-field').classList.toggle('shrink-search');
    document.querySelector('.search').classList.toggle('spin');
    document.querySelector('.search').classList.toggle('spin-reverse');
});

collapsed = false;
document.querySelector('.sidebar-button').addEventListener('click', function() {
    document.querySelectorAll('nav a')[1].classList.toggle('hidden');
    document.querySelectorAll('nav a')[3].classList.toggle('hidden');
    document.querySelectorAll('nav a')[5].classList.toggle('hidden');
    if (!collapsed) {
        document.querySelector('header').style.width = "50px";
        this.style.left = "60px";
        this.style.rotate = "0deg";
        document.querySelector('main').style.marginLeft = "80px";
        collapsed = true;
    } else {
        document.querySelector('header').style.width = "120px";
        this.style.left = "128px";
        this.style.rotate = "180deg";
        document.querySelector('main').style.marginLeft = "150px";
        collapsed = false;
    }
});
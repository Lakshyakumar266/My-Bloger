console.log('Mybloger.com');
console.log('You Are Free To Use Console');
let burger =document.getElementById('showhide');
let navbar =document.getElementById('navigation');
let navlist =document.getElementById('navlist');
let leftnav =document.getElementById('leftnav');
let rightnav =document.getElementById('rightnav');

// console.log(burger);
// console.log(leftnav);
// console.log(rightnav);
// console.log(navbar);
// console.log(navlist);

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp')
    navlist.classList.toggle('v-class-resp')
    leftnav.classList.toggle('v-clas-resp')
    rightnav.classList.toggle('v-inp-resp')
})
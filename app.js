
const modalOpen = document.getElementById('modalbtn')
const modalBg = document.getElementById('modalbg')
const modalcCose = document.getElementById('modalclose')
const bookPage = document.getElementById('bookpage')
const bookModal = document.getElementById('modalbg2')
const bookClose = document.getElementById('bookclose')

modalOpen.addEventListener('click',() => {
    modalBg.classList.add('show')
});
modalcCose.addEventListener('click',() => {
    modalBg.classList.remove('show')
});
bookPage.addEventListener('click',() =>{
    bookModal.classList.add('show')
});
bookClose.addEventListener('click',() => {
    bookModal.classList.remove('show')
});




















var burger = document.getElementById('hamburger')
var nav = document.getElementById('navbar')
const close = document.getElementById('close')

burger.addEventListener('click',()=>{
    nav.classList.toggle('active')
});
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})

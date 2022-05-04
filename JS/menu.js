const menu = document.querySelector('.menu');
const men = document.querySelector('.menu-nav');

console.log(men)
console.log(menu)


menu.addEventListener('click', ()=>{
    men.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(men.classList.contains('spread') && e.target != men && e.target != menu){
        men.classList.toggle("spread")
    }
})
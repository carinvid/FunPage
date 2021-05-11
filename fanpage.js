
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});
// hide the display of other DIV(music and award)

const musicDiv = document.getElementById("musicDiv")

musicLink.addEventListener("click", function(){
    musicDiv.style.display = "block";
    awardsDiv.style.display = "none";
})

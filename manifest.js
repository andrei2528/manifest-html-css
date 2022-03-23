const popUp = document.getElementById("popUp");
const blur = document.getElementById("blur");
const btn = document.getElementsByClassName("btncont");
const header = document.getElementById("hamburger-hide");
const headerBtn = document.getElementsByClassName("icons8-menu");
const page = document.getElementsByClassName("page");
console.log(popUp);

btn[1].addEventListener("click", () => {

    blur.classList.toggle('active');
    popUp.style.visibility = 'visible';


})
const popUpInregistrare = document.getElementsByClassName("popUp");

btn[0].addEventListener("click", () => {
    blur.classList.toggle('active');
    popUpInregistrare[0].style.visibility = 'visible';
})
const closePopUpInregistrare = document.getElementsByClassName("closePopUp");
closePopUpInregistrare[0].addEventListener("click", () => {
    popUpInregistrare[0].style.visibility = 'hidden';
    blur.classList.toggle('active');
    document.getElementById("header").classList.toggle("active");


})

const closePopUp = document.getElementById("closePopUp");
closePopUp.addEventListener("click", () => {
    popUp.style.visibility = 'hidden';
    blur.classList.toggle('active');


})

headerBtn.addEventListener("click", () => {
    if (header.style.display == 'flex') {
        header.style.display == 'none';
        console.log('a');
    } else {
        header.style.display == 'flex';
        console.log('b');
    }
})
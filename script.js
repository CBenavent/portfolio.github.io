let menuIcon = document.querySelector('#menuIcon'); 
let navbar = document.querySelector('.navBar'); 

//Alternar ícono de la barra de navegación y cambiar la clase de la barra de navegación

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
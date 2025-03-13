const btnMobile = document.getElementById('btnMobile')
const btnIcon = document.getElementById('btnIcon')

if(btnMobile){
    const menuMobile = document.getElementById('menuMobile')
    btnMobile.addEventListener('click',()=>{
        if(menuMobile.classList.contains('hidden')){
            document.querySelector('#btn_nav svg path').setAttribute('d','M6 18 18 6M6 6l12 12')
            menuMobile.classList.remove('hidden')
            menuMobile.classList.add('block')
        }else{
            document.querySelector('#btn_nav svg path').setAttribute('d','M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
            menuMobile.classList.remove('block')
            menuMobile.classList.add('hidden')
        }
    })
}

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.remove("lg:bg-transparent")
        navbar.classList.add("lg:bg-gray-800"); // Agrega clase si se ha hecho scroll
    } else {
        navbar.classList.remove("lg:bg-gray-800")
        navbar.classList.add("lg:bg-transparent"); // Remueve la clase si vuelve arriba
    }
});
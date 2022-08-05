//constantes
const nav_height = 80



let sous_navs_elements = document.querySelectorAll(".sous_nav_element")
let all_nav_elements = document.querySelectorAll(".nav_element")

sous_navs_elements.forEach(element => {
    element.addEventListener('click', function(){
        let a = element.querySelector('.sous_menu')       
        let all_sous_menu = element.parentElement.parentElement.querySelectorAll('.sous_menu')
        let open = false
        if(a.classList.contains('open')){
            open = true
        }
        all_sous_menu.forEach(function(sous_menu){
            sous_menu.classList.remove('open')
            sous_menu.parentElement.querySelector('.element_title').classList.remove('arrow')
        })
        
        if (!open){
            a.parentElement.querySelector('.element_title').classList.add('arrow')
            a.classList.add('open')
        }
    })
});

all_nav_elements.forEach(function(element){
    element.addEventListener('mouseleave', function(){  // sourie sort du menu tous est remis a zero
        console.log("hoverout")
        let all_sous_menu = element.querySelectorAll('.sous_menu')
        for (let i = 0; i < all_sous_menu.length; i++){
            all_sous_menu[i].classList.remove('open')
            // all_sous_menu[i].parentElement.classList.remove('closed')
            all_sous_menu[i].parentElement.querySelector('.element_title').classList.remove('arrow')
        }
    })
})

//permet de voir la nav sans cacher le titre
window.addEventListener("hashchange", function () {
    document.getElementById('don').scrollIntoView({behavior: "smooth", block: "end"});
});

let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
burger.addEventListener("click", function (e) {
    nav.classList.toggle('open')
})



window.addEventListener('resize', function () {
    if(window.innerWidth < 1100){
        all_nav_elements.forEach((element) => {
            element.classList.add('nohover')
            element.querySelector('a').removeAttribute('href')
        })
    }
})
window.addEventListener('load', function () {
    if(window.innerWidth < 1100){
        all_nav_elements.forEach((element) => {
            element.classList.add('nohover')
            element.querySelector('a').removeAttribute('href')
        })
    }
})

all_nav_elements.forEach(element => {
    let nav_button = element.querySelector('.nav_button')
    console.log(nav_button)
    if (nav_button){

        nav_button.addEventListener('click', function(){
            console.log("click")
            let a = nav_button.parentElement.querySelector('.menu')       
            let all_menu = nav_button.parentElement.parentElement.querySelectorAll('.menu')
            let open = false
            if(a.classList.contains('open')){
                open = true
            }
            all_menu.forEach(function(menu){
                menu.classList.remove('open')
                menu.parentElement.querySelector('.element_title').classList.remove('arrow')
            })
            
            if (!open){
                a.parentElement.querySelector('.element_title').classList.add('arrow')
                a.classList.add('open')
            }
        })
    }
});
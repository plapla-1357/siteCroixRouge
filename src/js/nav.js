//constantes
const nav_height = 80



let sous_navs_elements = document.querySelectorAll(".sous_nav_element")
console.log(sous_navs_elements)
let all_nav_elements = document.querySelectorAll(".nav_element")

sous_navs_elements.forEach(element => {
    element.addEventListener('click', function(){
        
        let a = element.querySelector('.sous_menu')
        if (a.classList.contains('open')){
            a.parentElement.classList.add('closed')
        }
        a.classList.toggle('open')
        a.parentElement.querySelector('.element_title').classList.toggle('arrow')
        
        let all_sous_menu = element.parentElement.parentElement.querySelectorAll('.sous_menu:not(.open)')
        console.log(all_sous_menu)
        for (let i = 0; i < all_sous_menu.length; i++){
            all_sous_menu[i].parentElement.classList.toggle('closed')
            all_sous_menu[i].classList.remove('open')          
        }
    })
});

all_nav_elements.forEach(function(element){
    element.addEventListener('mouseleave', function(){  // sourie sort du menu tous est remis a zero
        console.log("hoverout")
        let all_sous_menu = element.querySelectorAll('.sous_menu')
        for (let i = 0; i < all_sous_menu.length; i++){
            all_sous_menu[i].classList.remove('open')
            all_sous_menu[i].parentElement.classList.remove('closed')
            all_sous_menu[i].parentElement.querySelector('.element_title').classList.remove('arrow')
        }
    })
})

//permet de voir la nav sans cacher le titre
window.addEventListener("hashchange", function () {
    document.getElementById('don').scrollIntoView({behavior: "smooth", block: "end"});
});
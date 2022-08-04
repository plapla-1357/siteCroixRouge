console.log("hello")
let img_landingpage = document.getElementsByClassName("img_landingpage")
let descriptions = document.getElementsByClassName("titre")
let selector = document.getElementById("selector")
let animation_time = 75
let all_button_nav_carrousel = document.querySelectorAll('.button_nav_carrousel')

let landingpage = document.getElementById("landingpage")

let paused = false;


let toggle_pause = () => {
    if (!paused){
        
        for (let i = 0; i < img_landingpage.length; i++) {
            console.log(img_landingpage[i])
            img_landingpage[i].style.animationPlayState = "paused"
        }
        for (let i = 0; i < descriptions.length; i++) {
            console.log(descriptions[i].querySelector('h1'))
            descriptions[i].querySelector('h1').style.animationPlayState = "paused"
            descriptions[i].querySelector('p').style.animationPlayState = "paused"
            descriptions[i].querySelector('.button').style.animationPlayState = "paused"
            
        }
        selector.style.animationPlayState = "paused"
        paused = true;
    }else{
        selector.style.animationPlayState = 'running'
        for (let i = 0; i < descriptions.length; i++) {
            console.log(descriptions[i].querySelector('h1'))
            descriptions[i].querySelector('.button').style.animationPlayState = "running"
            descriptions[i].querySelector('p').style.animationPlayState = "running"
            descriptions[i].querySelector('h1').style.animationPlayState = "running"
            
        }
        for (let i = 0; i < img_landingpage.length; i++) {
            console.log(img_landingpage[i])
            img_landingpage[i].style.animationPlayState = "running"
        }
        paused = false;   
    }
}


let add_delay = (delay) => {
    let style, 
        cur
    for (let i = 0; i < img_landingpage.length; i++) {
        style = window.getComputedStyle(img_landingpage[i])
        cur = style.getPropertyValue('animation-delay')
        cur = Number(cur.replace(/[^?-\d\.]/g, ''));
        img_landingpage[i].style.setProperty('animation-delay', (cur + delay) + 's')
    }
    for (let i = 0; i < descriptions.length; i++) {
        let h1 = descriptions[i].querySelector('h1')
        style = window.getComputedStyle(h1)
        cur = style.getPropertyValue('animation-delay')
        cur = Number(cur.replace(/[^?-\d\.]/g, ''));
        h1.style.setProperty('animation-delay', (cur + delay) + 's')
        let p =descriptions[i].querySelector('p')
        style = window.getComputedStyle(p)
        cur = style.getPropertyValue('animation-delay')
        cur = Number(cur.replace(/[^?-\d\.]/g, ''));
        p.style.setProperty('animation-delay', (cur + delay) + 's')
        let button =descriptions[i].querySelector('.button')
        style = window.getComputedStyle(button)
        cur = style.getPropertyValue('animation-delay')
        cur = Number(cur.replace(/[^?-\d\.]/g, ''));
        button.style.setProperty('animation-delay', (cur + delay) + 's')
    }
    style = window.getComputedStyle(selector)
    cur = style.getPropertyValue('animation-delay')
    cur = Number(cur.replace(/[^?-\d\.]/g, ''));
    selector.style.setProperty('animation-delay', (cur + delay) + 's')
}

let getCurrentStateAnimation = () => {
    let styl = window.getComputedStyle(selector)
    return styl.getPropertyValue('left').replace("px","") /51
}



all_button_nav_carrousel.forEach(button => {
    button.addEventListener('click', () =>{
        let index = window.getComputedStyle(button).getPropertyValue('--i')
        add_delay((getCurrentStateAnimation() - index) * (animation_time / 8))
    })
})

let rightJump = () => {
    add_delay(animation_time / 8 * -1)
}
let leftJump = () => {
    add_delay(animation_time / 8)
}



landingpage.addEventListener("click", function(e) {
    if((! (getCurrentStateAnimation() < 1)) && e.clientX < 100){ //todo end this
        add_delay(animation_time / 8)
    }else if((! (getCurrentStateAnimation() > 7)) && e.clientX > window.innerWidth - 100){
        rightJump()
    }
})
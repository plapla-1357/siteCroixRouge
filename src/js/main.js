console.log("hello")
let img_landingpage = document.getElementsByClassName("img_landingpage")
let descriptions = document.getElementsByClassName("titre")
let selector = document.getElementById("selector")

let landingpage = document.getElementById("landingpage")

let paused = false;
let toogle_pause = () => {
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
        for (let i = 0; i < img_landingpage.length; i++) {
            console.log(img_landingpage[i])
            img_landingpage[i].style.animationPlayState = "running"
        }
        for (let i = 0; i < descriptions.length; i++) {
            console.log(descriptions[i].querySelector('h1'))
            descriptions[i].querySelector('h1').style.animationPlayState = "running"
            descriptions[i].querySelector('p').style.animationPlayState = "running"
            descriptions[i].querySelector('.button').style.animationPlayState = "running"
            
        }
        selector.style.animationPlayState = 'running'
        paused = false;   
    }
}
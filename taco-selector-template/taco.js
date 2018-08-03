var allDaTacos = document.querySelectorAll ('.taco')

allDaTacos.forEach( taco => {
    taco.addEventListener ('click' , e => {
        taco.classList.toggle ('active')
    })
})
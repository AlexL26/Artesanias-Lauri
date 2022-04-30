let agendas = document.getElementById("pantallaAgendas")
let mates = document.getElementById("pantallaMates")
let cuadernos = document.getElementById("pantallaCuadernos")
let botonAgendas = document.getElementById("botonAgendas")
let botonMates = document.getElementById("botonMates")
let botonCuadernos = document.getElementById("botonCuadernos")

botonAgendas.addEventListener("click", (e)=>{
    agendas.classList.add("slide-out-right")
    e.target.classList.add("slide-out-right")
    setTimeout(()=>{
        agendas.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})

botonMates.addEventListener("click", (e)=>{
    mates.classList.add("slide-out-left")
    e.target.classList.add("slide-out-left")
    setTimeout(()=>{
        mates.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})

botonCuadernos.addEventListener("click", (e)=>{
    cuadernos.classList.add("slide-out-right")
    e.target.classList.add('slide-out-right')
    setTimeout(()=>{
        cuadernos.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})
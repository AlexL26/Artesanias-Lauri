const data = `[{"id": 1, "nombre": "Agenda 1", "precio": 300, "img":"../Imagenes/Agendas/agenda1.jpg"},
                {"id": 2, "nombre": "Agenda 2", "precio": 200, "img":"../Imagenes/Agendas/agenda2.jpg"},
                {"id": 3, "nombre": "Agenda 3", "precio": 400, "img":"../Imagenes/Agendas/agenda3.jpg"}
]`
const agenda = JSON.parse(data)

let carrito = []
let ls_db = localStorage.getItem("carrito") || []
console.log(ls_db)

if (ls_db.length > 0){
  carrito = JSON.parse(ls_db)
  console.log(carrito);
}

const carousel_agenda = document.getElementById("carousel-agenda")
for(const i of agenda){
    let div = document.createElement("div")
    div.innerHTML = `<div class="card" style="width: 18rem;" id="agenda${i.id}">
    <img src="${i.img}" class="card-img-top" alt="agenda1">
    <div class="card-body">
      <h5 class="card-title">${i.nombre}</h5>
      <p class="card-text">Te gusta esta agenda? COMPRALA MACHO</p>
      <button class="btn btn-primary" type="button" id="btnCarrito${i.id}">Agregar al Carrito</button>
    </div>
  </div>`
  carousel_agenda.append(div)
  document.getElementById(`btnCarrito${i.id}`).addEventListener("click", ()=>{
    carrito.push(i)
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
  })
}
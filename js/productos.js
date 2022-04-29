fetch("./js/productos.json")
.then(datos => datos.json())
.then(x=> cargarElementos(x))

const carousel_agenda = document.getElementById("carousel-agenda")
const carousel_mates = document.getElementById("carousel-mates")
const carousel_cuadernos = document.getElementById("carousel-cuadernos")
const verCarrito = document.getElementById("carrito")
const btnFinalizarCompra = document.getElementById("finalizarCompra")
const btnCancelarCompra = document.getElementById("cancelarCompra")

let carrito = []
let lsCarrito = localStorage.getItem("carrito") || []

lsCarrito.length > 0 ? carrito = JSON.parse(lsCarrito) : false

async function formularioCompra(){
  const { value: formValues } = await Swal.fire({
    title: 'Formulario para la entrega',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    html:
      'Gracias por habernos elegido. Te invitamos a que llenes este formulario para que podamos ponernos en contacto con vos y coordinemos la entrega y formas de pago.<input placeholder="Numero de celular (obligatorio)" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="swal-input1" class="swal2-input" required>' +
      '<input placeholder="Nombre" type="text" id="swal-input2" class="swal2-input">' +
      '<input placeholder="Direccion de envio" type="text" id="swal-input3" class="swal2-input">' +
      '<input placeholder="email" type="email" id="swal-input4" class="swal2-input">',
    focusConfirm: false,
  })
  
  if (formValues) {
    Swal.fire("Gracias por su compra. A la brevedad nos comunicaremos con usted para coordinar la entrega. Que tenga un bonito dia")
  }
}


function cargarElementos(x){
  for(const i of x[0]){
    let {id, nombre, precio, img, texto} = i
    let div = document.createElement("div")
    div.setAttribute("class", "swiper-slide card")
    div.setAttribute("id", `agenda${id}`)
    div.innerHTML = `<div class="card-content">
                        <div class="image">
                          <img src="${img}" alt="agenda${id}">
                        </div>
                        <div class="name-profession">
                          <span class="name">${nombre}</span>
                          <span class="profession">${texto}. Te sale $${precio}</span>
                        </div>
                        <div class="button">
                          <button class="aboutMe" id="btnCarritoAgenda${id}">Añadir al carrito</button>
                        </div>
                      </div>`
    carousel_agenda.append(div)
    document.getElementById(`btnCarritoAgenda${id}`).addEventListener("click", ()=>{
      carrito.push(i)
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
      agregarLinea(i)
      calcularPrecio(carrito)
    })
  }
  
  for(const i of x[1]){
    let {id, nombre, precio, img, texto} = i
      let div = document.createElement("div")
      div.setAttribute("class", "swiper-slide card")
      div.setAttribute("id", `mates${id}`)
      div.innerHTML = `<div class="card-content">
                          <div class="image">
                            <img src="${img}" alt="mate${id}">
                          </div>
                          <div class="name-profession">
                            <span class="name">${nombre}</span>
                            <span class="profession">${texto}. Te sale $${precio}</span>
                          </div>
                          <div class="button">
                            <button class="aboutMe" id="btnCarritoMate${id}">Añadir al carrito</button>
                          </div>
                        </div>`
      carousel_mates.append(div)
    document.getElementById(`btnCarritoMate${id}`).addEventListener("click", ()=>{
      carrito.push(i)
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
      agregarLinea(i)
      calcularPrecio(carrito)
    })
  }

  for(const i of x[2]){
    let {id, nombre, precio, img, texto} = i
      let div = document.createElement("div")
      div.setAttribute("class", "swiper-slide card")
      div.setAttribute("id", `cuaderno${id}`)
      div.innerHTML = `<div class="card-content">
                          <div class="image">
                            <img src="${img}" alt="cuaderno${id}">
                          </div>
                          <div class="name-profession">
                            <span class="name">${nombre}</span>
                            <span class="profession">${texto}. Te sale $${precio}</span>
                          </div>
                          <div class="button">
                            <button class="aboutMe" id="btnCarritoCuaderno${id}">Añadir al carrito</button>
                          </div>
                        </div>`
      carousel_cuadernos.append(div)
    document.getElementById(`btnCarritoCuaderno${id}`).addEventListener("click", ()=>{
      carrito.push(i)
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
      agregarLinea(i)
      calcularPrecio(carrito)
    })
  }
}

for (const el of carrito){
  let tr = document.createElement("tr")
  tr.innerHTML = `
  <td>${el.nombre}</td>
  <td>${el.precio}</td>
  `
  verCarrito.append(tr)
}

function agregarLinea(obj){
  let tr = document.createElement("tr")
    tr.innerHTML = `
    <td scope="row">${obj.nombre}</td>
    <td>${obj.precio}</td>
    `
    verCarrito.append(tr)
}

function calcularPrecio (obj){
  let tf = document.getElementById("precioTotal")
  let precioTotal = 0
  for (let a of obj){
    precioTotal += a.precio
  }
  tf.innerHTML = `Total = $${precioTotal}`
}
calcularPrecio(carrito)

btnFinalizarCompra.addEventListener("click", ()=>{
  formularioCompra()
  .then(() => {
      carrito = []
      verCarrito.innerHTML = ""
      calcularPrecio(carrito)
      localStorage.removeItem("carrito")
  })
})

btnCancelarCompra.addEventListener("click", ()=>{
  Swal.fire({
  title: '¿Esta seguro que desea vaciar el carrito?',
  text: "Esta accion no podra revertirse",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, estoy seguro'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Borrado!',
      'El carrito esta vacio',
      'success'
    )
    carrito = []
    verCarrito.innerHTML = ""
    calcularPrecio(carrito)
    localStorage.removeItem("carrito")
  }
})})
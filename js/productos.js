fetch("./js/productos.json")
.then(datos => datos.json())
.then(x=> cargarElementos(x))

const carousel_agenda = document.getElementById("carousel-agenda")
const carousel_mates = document.getElementById("carousel-mates")
const verCarrito = document.getElementById("carrito")
const btnFinalizarCompra = document.getElementById("finalizarCompra")
const btnCancelarCompra = document.getElementById("cancelarCompra")

let precioTotal = 0

let carrito = []
let lsCarrito = localStorage.getItem("carrito") || []

lsCarrito.length > 0 ? carrito = JSON.parse(lsCarrito) : false

function cargarElementos(x){
  for(const i of x[0]){
    let {id, nombre, precio, img} = i
      let div = document.createElement("div")
      div.innerHTML = `<div class="card" style="width: 18rem;" id="agenda${id}">
      <img src="${img}" class="card-img-top" alt="agenda${id}">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Te gusta esta agenda? COMPRALA MACHO. Te sale $${precio}</p>
        <button class="btn btn-primary" type="button" id="btnCarritoAgenda${id}">Agregar al Carrito</button>
      </div>
    </div>`
    carousel_agenda.append(div)
    document.getElementById(`btnCarritoAgenda${id}`).addEventListener("click", ()=>{
      carrito.push(i)
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
      agregarLinea(i)
    })
  }
  
  for(const i of x[1]){
    let {id, nombre, precio, img} = i
      let div = document.createElement("div")
      div.innerHTML = `<div class="card" style="width: 18rem;" id="mates${id}">
      <img src="${img}" class="card-img-top" alt="mate${id}">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Te gusta este Mate? COMPRALA MACHO. Te sale $${precio}</p>
        <button class="btn btn-primary" type="button" id="btnCarritoMate${id}">Agregar al Carrito</button>
      </div>
    </div>`
    carousel_mates.append(div)
    document.getElementById(`btnCarritoMate${id}`).addEventListener("click", ()=>{
      carrito.push(i)
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
      agregarLinea(i)
    })
  }
}

for (const el of carrito){
  let tr = document.createElement("tbody")
  tr.innerHTML = `<tr>
  <td>${el.nombre}</td>
  <td>${el.precio}</td>
  </tr>`
  verCarrito.append(tr)
}

function agregarLinea(obj){
  let tr = document.createElement("tbody")
    tr.innerHTML = `<tr>
    <td scope="row">${obj.nombre}</td>
    <td>${obj.precio}</td>
    </tr>`
    verCarrito.append(tr)
}

function calcularPrecio (obj){
  let tf = document.getElementById("precioTotal")
  tf.innerHTML = `Total = $${precioTotal}`
  for (let a of obj){
    precioTotal += a.precio
    tf.innerHTML = `Total = $${precioTotal}`
  }
}


calcularPrecio(carrito)


//function confirmarCompra(){
  // const { value: formValues } = await Swal.fire({
  //   title: 'Ingrese sus datos',
  //   text: `Nostros nos pondremos en contacto con usted para coordinar mejor <3`,
  //   html:
  //     '<input placeholder="Numero de telefono" type=number id="swal-input1" class="swal2-input">' +
  //     '<input placeholder="Direccion" id="swal-input2" class="swal2-input">',
  //   focusConfirm: false,
  //   preConfirm: () => {
  //     return [
  //       document.getElementById('swal-input1').value,
  //       document.getElementById('swal-input2').value
  //     ]
  //   }
  // })
  
  // if (formValues) {
  //   Swal.fire(JSON.stringify(formValues))
  // }
//}

btnFinalizarCompra.addEventListener("click", ()=>{
  Swal.fire(
    'Su compra ha sido confirmada',
    'Gracias por confiar en nosotros! vuelva pronto',
    'success'
  )
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
    localStorage.removeItem("carrito")
  }
})})
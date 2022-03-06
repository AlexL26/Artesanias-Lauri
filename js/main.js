class Agenda {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.enviar = false;
        this.vendido = false;
    }
    envio() {
        this.enviar = true;
        this.precio = this.precio + 200;
    }
    vender() {
        this.vendido = true;
    }
}

const agenda1 = new Agenda("color rosa", 200);
const agenda2 = new Agenda("color azul", 150);
const agenda3 = new Agenda("semanal", 300);
const agenda4 = new Agenda("calendario", 175);
const agenda5 = new Agenda("diaria", 400);

const agendaArray = [{ id: 1, name: agenda1 }, { id: 2, name: agenda2 }, { id: 3, name: agenda3 }, { id: 4, name: agenda4 }, { id: 5, name: agenda5 }]

let idAgenda = (function () {
    const array = [];
    for (let x of agendaArray) {
        array.push(x.id);
    }
    return array;
})()

function MostrarAgendas() {
    let agendas = ''
    for (let i of agendaArray) {
        agendas += `${i.id} --> ${i.name.nombre} -- ${i.name.precio}$\n`
    }
    console.log(agendas)
    return agendas
}

class Mate {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.enviar = false;
        this.vendido = false;
    }
    envio() {
        this.enviar = true;
        this.precio = this.precio + 200;
    }
    vender() {
        this.vendido = true;
    }
}

const mate1 = new Mate("color liso", 200);
const mate2 = new Mate("con diseño", 300);
const mate3 = new Mate("grande", 450);

const mateArray = [{ id: 1, name: mate1 }, { id: 2, name: mate2 }, { id: 3, name: mate3 }]

let idMate = (function () {
    const array = [];
    for (let x of mateArray) {
        array.push(x.id);
    }
    return array;
})()

function MostrarMates() {
    let mates = ''
    for (let i of mateArray) {
        mates += `${i.id} --> ${i.name.nombre} -- ${i.name.precio}$\n`
    }
    console.log(mates)
    return mates
}

class Carrito {
    constructor(cliente) {
        this.productosComprados = [];
        this.cliente = cliente;
        this.precioTotal = 0
    }
    setTotal() {
        if (this.productosComprados.length > 0) {
            this.productosComprados.forEach(x => {
                this.precioTotal += x.precio
            });
        }
    }
}

const usuario = new Carrito()
let comprar = prompt("Bienvenido a Artesanias Lauri! Desea comprar algo?: (si/no)")

while ((comprar != "si") && (comprar != "no")) {
    alert("Por favor ingrese una de las opciones señaladas para continuar")
    comprar = prompt("Bienvenido a Artesanias Lauri! Desea comprar algo?: (si/no)")
}

if (comprar != "si") {
    alert("Te invitamos a que visites nuestro perfil de instagram 'artesanias.lauri' para que puedas ver nuestros productos y hacernos la consulta que quieras <3")
} else {
    usuario.cliente = prompt("Ingrese su nombre:")
    function realizarCompra() {
        let producto = prompt("Hola " + usuario.cliente + "!" + " Que te gustaria comprar?: (agendas/mates)")

        while ((producto != "agendas") && (producto != "mates")) {
            alert("Por favor ingrese una de las opciones señaladas para continuar")
            producto = prompt("Que te gustaria comprar?: (agendas/mates)")
        }

        if (producto == "agendas") {
            let comprarAgenda = parseInt(prompt("Tenemos estas agendas para ofrecerte:\n" + MostrarAgendas() + "\nCual desea comprar?:"))

            function venderAgenda(x) {
                let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")

                while ((enviarAgenda != "si") && (enviarAgenda != "no")) {
                    alert("Por favor ingrese una de las opciones señaladas para continuar")
                    enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
                }

                if (enviarAgenda != "si") {
                    alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                } else {
                    x.envio();
                    alert("El envio cuesta $200. El nuevo precio del produco que compro es: " + x.precio + ". Gracias por su compra :)");
                }
                x.vender()
                usuario.productosComprados.push(x)
            }
            if (idAgenda.includes(comprarAgenda)) {
                switch (comprarAgenda) {
                    case 1:
                        venderAgenda(agenda1);
                        break;
                    case 2:
                        venderAgenda(agenda2);
                        break;
                    case 3:
                        venderAgenda(agenda3);
                        break;
                    case 4:
                        venderAgenda(agenda4);
                        break;
                    case 5:
                        venderAgenda(agenda5);
                        break;
                    default:
                        alert("Debe ingresar una de las opciones mostradas para continuar comprando");
                        comprarAgenda = parseInt(prompt("Tenemos estas agendas para ofrecerte:\n" + MostrarAgendas() + "\nCual desea comprar?:"));
                        break;
                }
            }
        } else if (producto == "mates") {
            let comprarMate = parseInt(prompt("Tenemos estos mates para ofrecerte:\n" + MostrarMates() + "\nCual desea comprar?:"))

            function venderMate(x) {
                let enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")

                while ((enviarMate != "si") && (enviarMate != "no")) {
                    alert("Por favor ingrese una de las opciones señaladas para continuar")
                    enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
                }

                if (enviarMate != "si") {
                    alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                } else {
                    x.envio();
                    alert("El envio cuesta $200. El nuevo precio del produco que compro es: " + x.precio + ". Gracias por su compra :)");
                }
                x.vender()
                usuario.productosComprados.push(x)
            }
            if (idMate.includes(comprarMate)) {
                switch (comprarMate) {
                    case 1:
                        venderMate(mate1);
                        break;
                    case 2:
                        venderMate(mate2);
                        break;
                    case 3:
                        venderMate(mate3);
                        break;
                    default:
                        alert("Debe ingresar una de las opciones mostradas para continuar comprando");
                        comprarMate = parseInt(prompt("Tenemos estos mates para ofrecerte:\n" + MostrarMates() + "\nCual desea comprar?:"));
                        break;
                }
            }
        }
        usuario.setTotal()
        let comprados = usuario.productosComprados.map((x) => x.nombre)
        alert(usuario.cliente+", ha comprado lo siguiente:\n"+JSON.stringify(comprados)+"\nEsto hace un total de: "+usuario.precioTotal+"$")
    }

    do {
        realizarCompra();
        nuevaCompra = prompt("Desea comprar algo mas?: (si/no)");
    } while (nuevaCompra == "si")

    if ((nuevaCompra != "si") && (nuevaCompra != "no")) {
        alert("Debe ingresar una de las opciones mostradas para continuar comprando");
        nuevaCompra = prompt("Desea comprar algo mas?: (si/no)")
    } else {
        alert("Gracias por su compra! Lo esperamos pronto.")
    }
}
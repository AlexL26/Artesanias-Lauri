class Agenda{
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.enviar = false;
        this.vendido = false;
    }
    envio(){
        this.enviar = true;
        this.precio = this.precio + 200;
    }
    vender(){
        this.vendido = true;
    }
}

const agenda1 = new Agenda ("color rosa", 200);
const agenda2 = new Agenda ("color azul", 150);
const agenda3 = new Agenda ("semanal", 300);
const agenda4 = new Agenda ("calendario", 175);
const agenda5 = new Agenda ("diaria", 400);

class Mate{
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.enviar = false;
        this.vendido = false;
    }
    envio(){
        this.enviar = true;
        this.precio = this.precio + 200;
    }
    vender(){
        this.vendido = true;
    }
}

const mate1 = new Mate ("color liso", 200);
const mate2 = new Mate ("con diseño", 300);
const mate3 = new Mate ("grande", 450);

let comprar = prompt("Bienvenido a Artesanias Lauri! Desea comprar algo?: (si/no)")
while ((comprar != "si") && (comprar != "no")) {
    alert("Por favor ingrese una de las opciones señaladas para continuar")
    comprar = prompt("Bienvenido a Artesanias Lauri! Desea comprar algo?: (si/no)")
}
if (comprar != "si"){
    alert("Te invitamos a que visites nuestro perfil de instagram 'artesanias.lauri' para que puedas ver nuestros productos y hacernos la consulta que quieras <3")
} else {
    let producto = prompt("Que te gustaria comprar?: (agendas/mates)")
    while ((producto != "agendas") && (producto != "mates")){
        alert("Por favor ingrese una de las opciones señaladas para continuar")
        producto = prompt("Que te gustaria comprar?: (agendas/mates)")
    }
    if (producto == "agendas"){
        let comprarAgenda = parseInt(prompt("Tenemos estas agendas para ofrecerte:\n"+"1 -> "+agenda1.nombre+"-"+agenda1.precio+"$"+"\n2 -> "+agenda2.nombre+"-"+agenda2.precio+"$"+"\n3 -> "+agenda3.nombre+"-"+agenda3.precio+"$"+"\n4 -> "+agenda4.nombre+"-"+agenda4.precio+"$"+"\n5 -> "+agenda5.nombre+"-"+agenda5.precio+"$"+"\nCual desea comprar?:"))
        while ((comprarAgenda != 1) && (comprarAgenda != 2) && (comprarAgenda != 3) && (comprarAgenda != 4) && (comprarAgenda != 5)){
            alert("Debe ingresar una de las opciones mostradas para continuar comprando")
            comprarAgenda = parseInt(prompt("Tenemos estas agendas para ofrecerte:\n"+"1 -> "+agenda1.nombre+"-"+agenda1.precio+"$"+"\n2 -> "+agenda2.nombre+"-"+agenda2.precio+"$"+"\n3 -> "+agenda3.nombre+"-"+agenda3.precio+"$"+"\n4 -> "+agenda4.nombre+"-"+agenda4.precio+"$"+"\n5 -> "+agenda5.nombre+"-"+agenda5.precio+"$"+"\nCual desea comprar?:"))
        }
        if (comprarAgenda == 1){
            let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarAgenda != "si") && (enviarAgenda != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarAgenda != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                agenda1.vender()
            } else {
                agenda1.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+agenda1.precio+". Gracias por su compra :)");
                agenda1.vender()
            }
        } else if (comprarAgenda == 2){
            let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarAgenda != "si") && (enviarAgenda != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarAgenda != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                agenda2.vender()
            } else {
                agenda2.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+agenda2.precio+". Gracias por su compra :)");
                agenda2.vender()
            }
        } else if (comprarAgenda == 3){
            let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarAgenda != "si") && (enviarAgenda != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarAgenda != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                agenda3.vender()
            } else {
                agenda3.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+agenda3.precio+". Gracias por su compra :)");
                agenda3.vender()
            }
        } else if (comprarAgenda == 4){
            let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarAgenda != "si") && (enviarAgenda != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarAgenda != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                agenda4.vender()
            } else {
                agenda4.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+agenda4.precio+". Gracias por su compra :)");
                agenda4.vender()
            }
        } else if (comprarAgenda == 5){
            let enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarAgenda != "si") && (enviarAgenda != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarAgenda = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarAgenda != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                agenda5.vender()
            } else {
                agenda5.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+agenda5.precio+". Gracias por su compra :)");
                agenda5.vender()
            }
        } else{

        }
    } else if (producto == "mates"){
        let comprarMate = parseInt(prompt("Tenemos estos mates para ofrecerte:\n"+"1 -> "+mate1.nombre+"-"+mate1.precio+"$"+"\n2 -> "+mate2.nombre+"-"+mate2.precio+"$"+"\n3 -> "+mate3.nombre+"-"+mate3.precio+"$"+"\nCual desea comprar?:"))
        while ((comprarMate != 1) && (comprarMate != 2) && (comprarMate != 3)){
            alert("Debe ingresar una de las opciones mostradas para continuar comprando")
            comprarMate = parseInt(prompt("Tenemos estos mates para ofrecerte:\n"+"1 -> "+mate1.nombre+"-"+mate1.precio+"$"+"\n2 -> "+mate2.nombre+"-"+mate2.precio+"$"+"\n3 -> "+mate3.nombre+"-"+mate3.precio+"$"+"\nCual desea comprar?:"))
        }
        if (comprarMate == 1){
            let enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarMate != "si") && (enviarMate != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarMate != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                mate1.vender()
            } else {
                mate1.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+mate1.precio+". Gracias por su compra :)");
                mate1.vender()
            }
        } else if (comprarMate == 2){
            let enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarMate != "si") && (enviarMate != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarMate != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                mate2.vender()
            } else {
                mate2.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+mate2.precio+". Gracias por su compra :)");
                mate2.vender()
            }
        } else if (comprarMate == 3){
            let enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            while ((enviarMate != "si") && (enviarMate != "no")){
                alert("Por favor ingrese una de las opciones señaladas para continuar")
                enviarMate = prompt("Desea que le enviemos el producto a su hogar?: (si/no)")
            }
            if (enviarMate != "si"){
                alert("Lo esperamos en nuestro local para que retire el producto a partir de las 24 horas de haberlo comprado :). Gracias por su compra");
                mate3.vender()
            } else {
                mate3.envio();
                alert("El envio cuesta $200. El nuevo precio del produco que compro es: "+mate3.precio+". Gracias por su compra :)");
                mate3.vender()
            }
        } else{

        }
    }
}
//----------------------- Producto -------------------------------

class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrar(indice) {
        console.log(`${indice}) ${this.nombre} tiene un precio de $${this.precio} y hay ${this.stock} unidades`)

    }
}

//--------------------------------------------------------------
console.log("Bienvenido a Pocima De Luna ")
 
const productos = [new Producto("Sahumerio", 1500, 20), new Producto("Vela", 2500, 5), new Producto("Perfume", 3500, 15)]

console.log("Los productos disponibles son:")
for (let i = 0; i < productos.length; i++) {
    //console.log(`${i+1}) `)
    productos[i].mostrar(i+1)
}



let respuesta = "si"
while (respuesta == "si"){
    let total_desc 
    let cant_prod = parseInt (prompt ("Igrese su cantidad de productos"));
    let total = 0;
    for (let i = 1 ; cant_prod >= i; i++){
        total = total + parseInt(prompt("Ingrese el precio de producto numero " + i ));
    
    }
     
   
    total_desc = AplicarDescuento(total)
    alert(`El precio total es ${total} Y con descuento es ${total_desc}`);
    

    respuesta = prompt("Desea realizar otra compra? (si/no)")
    
}

//-----------------------------------------------------------------
function AplicarDescuento (total){
    let desc = 0
    if (total >= 50000 || cant_prod > 10){
         desc= total - (total * 0.20)
    }
    else if ( total >= 25000 || cant_prod > 5){
        desc= total - (total * 0.10)
    }
    
return desc
}
 



    


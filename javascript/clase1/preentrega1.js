console.log("Bienvenido al simulador de compras")

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
 


    


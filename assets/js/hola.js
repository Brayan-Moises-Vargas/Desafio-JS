let precio = 250000

let primer= document.querySelector("#primer-input")
let colores= document.querySelector("#color")

let boton= document.querySelector("#total") 

boton.addEventListener("click", () =>{
    document.querySelector("#p-muestra").innerHTML= primer.value * precio
    document.querySelector("#s-muestra").innerHTML= primer.value
    document.querySelector("#colorpendiente").style.backgroundColor= colores.value
   
} )
let icono =  document.querySelector("#icono")

icono.addEventListener("click",() =>{
    document.querySelector("#p-muestra").innerHTML=0
    document.querySelector("#s-muestra").innerHTML="0"
    document.querySelector("#colorpendiente").value= ""
    document.querySelector("#color").value=""
    document.querySelector("#colorpendiente").style.backgroundColor= colores.value
    

} )
 boton = document.querySelectorAll(".boton");
pantalla = document.querySelector(".pantalla");


boton.forEach((element,index,arreglo)=>{

    contenido = pantalla.innerHTML

    console.log(element.value)
    

    element.addEventListener("click",()=>{
        

        if(pantalla.innerHTML == 0){
            pantalla.innerHTML = ""
        }

        if (element.value == "C"){
            pantalla.innerHTML = ""

            return
        }

        if (element.value == "x"){
            element.value = "*"

        }

        if (element.value == "="){

                            //Eval: Esta funcion evalua el texto y da el resultado segun lo que tenga 
            pantalla.innerHTML = eval(pantalla.innerHTML)
            return
        }


        pantalla.innerHTML += element.value

     

    })
});
console.log(pantalla.innerHTML)

console.log(pantalla.innerHTML.length)






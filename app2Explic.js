//Declaración de parametros

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/*let titulo = document.querySelector('h1'); /*Una parte de la explicación de esta línea esta en el notion. Recordar que al tomar el valor de h1 este debe asignarsele
a una variable que se declara como let titulo. Como dato adicional en esta situación la variable no esta tomando valores numericos, de texto, ni algo similar.. esta 
esta tomando valores de tipo objeto 
titulo.innerHTML = 'Juego del numero secreto';*/
//Para optimizar el uso del objeto document se puede hacer ingresandolo dentro de una función, como se pueder ver a partir de la línea 12. Lo primero se dejara en comentarios

/* let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Elige un numero del 1 al 10';
*/

// Las líneas 7 y 8 tambien se comentan gracias a que ya se cuenta con la función asingarTextoElemento que se ve reflejado en la línea 30

// La siguiente línea es una función que se llama en la línea 26 del script de html

function asignarTextoElemento(elemento, texto){ // Se agregan los parametros de esta forma para hacer la función lo mas generica posible
    
    let elementoHTML = document.querySelector(elemento); /* Aquí se puede notar una diferencia con las primeras líneas de código y es el cambio
    de la variable titulo por elementoHTML. Esto se hace por el cambio de parametros que ingresan a la función ademas de formar parte de las buenas practicas de programación*/
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    
    /*let numeroDeUsuario = document.querySelector('input'); /*Input es la etiqueta que se encuentra en el script de HTML en la línea 24 para generar la caja blanca 
    que se encuentra en la pagina creada*/
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(`Vas ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);
    if(numeroDeUsuario === numeroSecreto){  /*Al adicionar un tercer igual la función de la comparación que se realizara sera tanto del valor
        como del tipo de dato que se este manejando en la comparación (Recordar que por lo general los datos numericos la pagina los lee como String)*/

        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); /*Con esta línea se permite la habilitación del boton creado en la línea 29 del script de HTML
        donde se quita el atributo disabled que no permite el manejo de este boton*/
    } else {
        if(numeroDeUsuario > numeroSecreto) {

            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    /*let valorCaja = document.querySelector('#valorUsuario'); /*En esta línea el querySelector esta cumpliendo la misma función que el getElementById, con la diferencia
    en que para que cumpla esta misma función se le debe adicionar un # antes de valorUsuario
    valorCaja.value = ''; //Al llamar a la variable de esta forma lo que se hace es limpiar la caja blanca que se mmuestra en la pagina del navegador
    
    //La siguiente modificación que se mostrara resume las dos líneas de código anteriores*/

    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
    console.log(`El numero secreto es ${numeroGenerado}`);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    //Condición para la lista: Si el numero generado esta incluido en la lista
    } else if(listaNumerosSorteados.includes(numeroGenerado)){ //La función includes se encargara de hacer un barrido para verificar de que el numero que se haya generado ha sido usado en el juego o no
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Bievenido al juego del numero secreto');
    asignarTextoElemento('p',`Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //*******Atributos con los que debe contar la función*******

    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervarlo de números, generar numero secreto aleatorio e intentos iniciales. En resumen, las condiciones iniciales
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}


// Llamar función asignarTextoElemento()
// Las siguientes líneas se pasaran dentro de una función debido a que se tratan de los mensajes iniciales con los que aparece la pantalla de inicio de la página
/*
asignarTextoElemento('h1','Bievenido al juego del numero secreto'); /*Recordar que las funciones se llaman de esta forma tanto en JS 
como en algunos otros lenguajes como M
asignarTextoElemento('p','Elige un numero del 1 al 10');*/

//Llamado de la función de condiciones iniciales

condicionesIniciales();
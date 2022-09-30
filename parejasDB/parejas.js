const imgArray = [
    'resources/bowie.png', 'resources/Butler.png',
    'resources/Chewbacca.png', 'resources/Chihiro.png',
    'resources/escarlata.png', 'resources/grogu.png',
    'resources/haku.png', 'resources/hansolo.png',
    'resources/laberinto.png', 'resources/mandalorian.png',
    'resources/Neo.png', 'resources/Trinity.png',
    'resources/dark1.png', 'resources/dark2.png',
    'resources/moto.png', 'resources/tetsuo.png',
    'resources/alien.png', 'resources/ripley.png',
];
var order = [];
var selector = document.getElementById("selector");
var contenedor = document.getElementById('contenedor');

//PREGUNTAR JON 2 OBJETOS MISMO ID??????????????????? SE PUEDEEEEE????
//he probado un array pero me peta.
var surrender = document.getElementById("rendicion");
var surrender2 = document.getElementById("rendicion2");

var contador = document.getElementById('contador');
var txtcabecera=document.getElementById('textocabecera');
var evil = document.getElementById('evil');
var musica = document.getElementById('musica');
var aplauso = document.getElementById('aplauso');
var puntosBox= document.getElementById('boxPuntos');
var enviarForm=document.getElementById("formPuntos");

var pareja1 = "";
var pareja2 = "";
var puntos = 0;
var globalPuntos=0;
var contsurrender=0;

txtcabecera.className="";
txtcabecera.innerHTML="Selecciona dificultad";
surrender.disabled=true;
surrender.innerHTML="Rendirse";
surrender.className="button1";
surrender2.disabled=true;
surrender2.innerHTML="Rendirse";
surrender2.className="button1";
//aquí al recargar la página a veces no coge el valor????????????????
selector.options[selector.selectedIndex].value='0';


//definimos un booleano para que permita (o no) hacer click 
//sobre cada elemento 
var clickable = true;

//cada vez que cambia el valor del option extrae el .value (string)
selector.addEventListener('change', () => {
    numero = selector.options[selector.selectedIndex].value;
    seleccion = parseInt(numero);   
        StartGame();        
})

//elegimos el número de casillas
function StartGame() {    
    musica.play();
    surrender.disabled=false;
    surrender2.disabled=false;
    //al empezar el juego ocultamos el selector si el valor no es reset
    if(seleccion==0){
        txtcabecera.innerHTML="Selecciona dificultad";
        selector.disabled=false;
    }else{
        selector.disabled=true;
    }    

    //vaciamos arrays y variables
    puntos = 0;
    order = [];
    contenedor.innerHTML = "";
    switch (seleccion) {
        case 12:
            contenedor.classList.replace("gridcontainer0","gridcontainer1");            
            Refill();
            break;
        case 24:
            contenedor.classList.replace("gridcontainer0","gridcontainer2");        
            Refill();
            break;
        case 36:
            contenedor.classList.replace("gridcontainer0","gridcontainer3");            
            Refill();
            break;
        default:
            contenedor.className = 'gridcontainer0';            
    }
    
}
function Refill() {
    
    txtcabecera.innerHTML=
        "Empareja las imágenes iguales haciendo click sobre ellas."
    //como va por parejas se selecciona la mitad del array de img y se repite
    for (let i = 0; i < seleccion / 2; i++) {
        order.push(i);
        console.log("primer for");
    }
    for (let i = 0; i < seleccion / 2; i++) {
        order.push(i);
        console.log("segundo for");
    }
    // Reordenar el array aleatoriamente
    order = order.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    console.log("random");

    /*creamos las imágenes y añadimos al HTML el contador 'e' en las ids para
    que funcionen como parámetro de la función visibility() identificando específicamente
    cada objeto*/
    for (let e = 0; e < order.length; e++) {
        imagen = "<div class='fondoimagenes'><img id ='" + e + "' class='invisible tamaño' onclick='visibilidad(" + e + ")' src= '" +
            imgArray[order[e]] + "'></div>";
        contenedor.innerHTML += imagen;
    }
}

function visibilidad(id) {
    // aquí cambiamos directamente la opacidad como propiedad del objeto,
    // sin necesidad de usar el css y comprobamos que la imagen se puede clickar
    //(o sea, que no está ya emparejada)
    if (clickable) {
        elemento = document.getElementById(id);
        elemento.style.opacity = 1;

        //aquí comprobamos que el objeto guardado en pareja1 no sea él mismo o esté vacío
        //y lo rellenamos
        if (pareja1 == "" || pareja1 == elemento) {
            pareja1 = elemento;
        
        //si pareja1 ya tiene un valor, pasamos a rellenar pareja2 para hacer la comparativa
        } else {
            pareja2 = elemento;
            clickable = false;

            emparejar();
        }
    }
}

/*los parámetros en las funciones solucionan problemas como
que se sobreescriban las variables (en este caso 'elemento') y para meter
valores externos ---sarcasmo off---*/
// ocultamos las imágenes pasado cierto tiempo si no coinciden  
function invisibilidad(x) {
    setTimeout(() => {
        pareja1.style.opacity = 0;
        pareja2.style.opacity = 0;
        //vaciamos los valores de pareja1 y 2 y volvemos a permitir clicks
        pareja1 = "";
        pareja2 = "";
        clickable = true;
    }, 1000);
}

function emparejar() {
    /*como daba errores, es mejor usar los atributos directamente en vez de 
    almacenarlos en variables*/
    //comparamos los src para ver si son iguales y dejamos las parejas visibles
    if (pareja1.src == pareja2.src) {
        pareja1.style.opacity = 1;
        pareja2.style.opacity = 1;
        
        //sumamos los puntos
        puntos++;
        puntosBox.value = puntos;

        //comprobamos el contador de puntos por si ha ganado
        if (puntos>=6 && contenedor.classList.contains('gridcontainer1')) {
            Ganar();
        }else if (puntos>=12 && contenedor.classList.contains('gridcontainer2')) {
            Ganar();
        } else if (puntos>=18 && contenedor.classList.contains('gridcontainer3')) {
            Ganar();
        }

        //desactivamos el onclick con setAttribute para que no se pueda volver
        //a clickar sobre las imágenes ya emparejadas
        pareja1.setAttribute('onclick', '');
        pareja2.setAttribute('onclick', '');
        //vaciamos las variables
        pareja1 = "";
        pareja2 = "";
        elemento = "";
        //devolvemos la posibilidad de clickar
        clickable = true;

    } else {
        contsurrender++;
        switch (contsurrender) {
            case 2:
                surrender.className="button2";
                surrender2.className="button2";
                break;
            case 5:
                surrender.className="button3";
                surrender2.className="button3";
                break;
            case 8:
                surrender.innerHTML="¡Ríndete!";
                surrender2.innerHTML="¡Ríndete!";
                surrender.className="button4";
                surrender2.className="button4";
                break;
            case 10:
                surrender.innerHTML="¡¡Ríndete ya!!";
                surrender2.innerHTML="¡¡Ríndete ya!!";
                surrender.className="button5";
                surrender2.className="button5";
                break;            
        }
        
        invisibilidad(elemento);
    }
}
function Ganar() {
    //necesitamos una fórmula para calcular diferentes puntuaciones
    globalPuntos= parseInt((puntos / contsurrender+1)*100);
    puntosBox.value=globalPuntos;
    surrender.className="button1";
    surrender.disabled=true;
    surrender2.className="button1";
    surrender2.disabled=true;
    txtcabecera.className="ganar";
    txtcabecera.innerHTML="¡HAS GANADO!";
    musica.src="";
    aplauso.play();
    selector.disabled=false;
    /*puntos=0;*/
    /*contador.innerHTML = 'Puntos: ' + globalPuntos;   */
    selector.options[selector.selectedIndex].value='0'; 
   
    setTimeout(function(){
        enviarForm.submit(); //enviamos el formulario automáticamente para 
        //pasar el valor de los puntos a la página de récords
        /*location.assign("index_records.php");*/
     }, 5000);
}
function Rendicion() {    
    
    setTimeout(function(){
        location.reload();
     }, 2000);
     evil.play();
     surrender.disabled=true;   
     surrender2.disabled=true;   
     selector.options[selector.selectedIndex].value='0';  
}



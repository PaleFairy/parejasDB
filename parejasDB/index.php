<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="parejas.css">
</head>


<body>
    <div>
        <div class="titulo">  
            <img src="resources/total.gif" alt="" width="300">                 
            <h1>Memory Call</h1>            
        </div>
        <div class="botonera">
            <div></div>
            <div class="cabecera">            
                <h2 id="textocabecera" class="">Selecciona dificultad</h2>
                <audio id="aplauso" src="resources/whistle.wav"></audio>
            </div>   
            <div></div>         
            <div class="cabecera">
                <button id="rendicion" onclick="Rendicion()" class="button1">Rendirse</button>
                <audio id="evil" src="resources/evil.wav"></audio>
            </div>            
            <div class="cabecera">
                <select name="selector" id="selector" enabled>
                    <option value="0" default>--Reset--</option>
                    <option value="12">Fácil</option>
                    <option value="24">Normal</option>
                    <option value="36">Difícil</option>
                </select>  
            </div>
            <div class="cabecera">
                <button id="rendicion2" onclick="Rendicion()" class="button1">Rendirse</button>
                <audio id="evil" src="resources/evil.wav"></audio>
            </div> 
            <div></div>        
            <div id="contador" class="contador" name="contador">
            Puntos: 
                <div> 
                    <form id="formPuntos" method="POST" action="index_records.php">
                    <input type="text" id="boxPuntos" value="" name="boxPuntos" readonly>  
                    <!-- creamos el formulario para enviar la puntuación a la página de récords -->
                    </form>                 
                </div>
            </div>
            <div></div>
        </div>

        
        <div id="contenedor" class=" gridcontainer0 grid visible">            
        </div>
       
    </div>      

    <div class="footer">
        <div></div>
        <div >Bienvenido a Marte</div>
        <div></div>
        <div></div>
        <div>
            <audio id="musica" src="../resources/main.mp3" 
            loop controls>Bienvenido a Marte</audio>
        </div>           
    </div>  
</body>
<script src="parejas.js"></script>
</html>
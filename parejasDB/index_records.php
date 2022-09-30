<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App con Base de datos</title>
</head>
<?php
//llamamos a la DB
include "dbconn.php";

//tomamos los datos de la tabla
include "data_read.php";

if($_SERVER['REQUEST_METHOD']=='POST'){   
    $puntos=$_POST['boxPuntos'];
    echo $puntos;
}
?>
<body>
    
    <h2>Aplicación web con base de datos</h2>
    <h1>Hall of Fame</h1>
    <ul>
        <?php 
        //tomamps los datos de la tabla y los imprimimos

        $data = "";

        if($result->num_rows>0){
            //si hay al menos un resultado
            while($row=$result->fetch_assoc()){//array de un array xDDDDDD
                //imprimimos los li
                echo "<li> ". $row['recordsname'] . ' '. 
                $row['recordspoints']. "</li>";
                $data = $row['recordspoints'];
                //metemos en una variable la puntiación mínima
                
            }            
        }
        
        ?>

    </ul>
    
    <form method="POST" action="introdata.php">
        <label for="">Puntuación</label>
        <input id="puntos" type="text" name="puntos" value="<?php echo $puntos ?>" required><br>
        <label for="">Nombre</label>
        <input id="nombre" type="text" name="nombre" caption="Iniciales" maxlength="3" required><br>   
        <button id="button" type="submit">Enviar</button>   
        <?php
        echo $data;
        //guardamos data en una variable global
        

        ?>  
    </form>
    
    <div>
        <p id="errorText"></p>
    </div>
    


</body>
<!-- <script src="index.js"></script> -->

<!-- - Tenemos un input donde el usuario genera un dato numérico
     - Este dato (puntuación) se guarda en la BD con un string de 3 caracteres 
     - Cada vez que se carga la página se muestran las mayores puntuaciones
     - Un botón de enviar form para guardar los datos y otro input para el nombre
    

    - El nombre sólo lo pide si quedas entre los 10 primeros, o no se guardará-->
</html>
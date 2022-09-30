<?php


if($_SERVER['REQUEST_METHOD']=='POST'){

    include 'dbconn.php';
    //guardamos los datos en variables

    $nombre=$_POST['nombre'];
    $puntos=$_POST['puntos'];

    //creamos la query
    $sql = "INSERT INTO records (recordsname, recordspoints)
            VALUES ('$nombre', '$puntos');";
    
    //ejecutamos la query con comprobación de errores
    if($conn->query($sql)=== TRUE){
        // si todo funciona volvemos a la página principal
        header("location: index_records.php");
        exit();
        
    } else {
        echo 'Ha habido un error al introducir los datos' .$conn->error;
    }
}

$conn->close();

?>
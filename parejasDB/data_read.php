<?php

//declaramos la query para leer la tabla
$sql = "SELECT recordsname, recordspoints FROM records ORDER BY
 recordspoints DESC LIMIT 10";

//decreciente, sólo 10 filas

//ejecutamos query

$result = $conn->query($sql);

//la variable $result es un objeto mySQL, con sus
//atributos y propiedades

//num_rows es uno de ellos

?>
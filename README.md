ApiRest de la aplicacion movil de afiliaccion

RUTAS:

GET{

    //Visualizar todos los registros completos
    http://localhost:3000/api/simpatizantes/viewAll
   
    //Visualizar Simpatizantes por nombre de lider seccional
    http://localhost:3000/api/simpatizantes/view

    //Visualizar Registro Para el Primer Reporte (Simpatizantes Por Seccion)
    http://localhost:3000/api/simpatizantes/spc

    //Visualizar Registro Para el Segundo Reporte (Simpatizantes Por Lider Seccional)
    http://localhost:3000/api/simpatizantes/spl

    //Visualizar Registro Para el Tercer Reporte (Datos Ine por lider seccional)
    http://localhost:3000/api/simpatizantes/spi

    (Estos Get se hacen con una consulta mediante Query, Estos Get no se vizualizan en Swagger, solo en Postman o RapidApi)

}

POST{

    // Crear Registro de Simpatizante
    http://localhost:3000/api/simpatizantes/Screate

    //Login
    http://localhost:3000/api/login/login

    //Crear Usuario Para Login
    http://localhost:3000/api/login/create

    (Para que detecte el login primero crea un usuario en Swagger o con la url para crear y de ahi hacer el login con el usuario que acabas de crear ya que el login
    solo detecta contraseñas encriptadas)
}

DELETE{

    //Eliminar Registro
    http://localhost:3000/api/simpatizantes/delete

}

UPDATE{

    //Actualizar Registro
    http://localhost:3000/api/simpatizantes/update

    //Actualizar Registro
    http://localhost:3000/api/login/recovery
    
    
}
---
sidebar_position: 4
---

# Locales

En esta sección, se registran los locales (o tiendas) en el sistema Domicilio:   
    
![Front-end-Locales](/img/Domicilio-Front-end-Locales.png)  

El registro se realiza seleccionando la siguiente opción: ![Front-end-Locales](/img/Domicilio-Frontend-Locales-Crear.png)  

Por local, se registran los siguientes datos y acciones:
```
RSTID	
TIENDA	
UBICACIÓN	
SERVIDOR	
INSTANCIA	
PUERTO	
NOMBRE_BDD	
ACCIONES
	Editar 
	Ping BDD
	Ping Server
	Eliminar Domicilio
```  
Una vez registrado el local, se pueden modificar los datos del mismo a través de la Acción Editar:&nbsp&nbsp   ![Front-end-Locales-Editar](/img/Domicilio-Frontend-Locales-Editar.png)  
La selección de la acción Editar, activa la siguiente ventana emergente:  
![Front-end-Locales-Editar-Detalle](/img/Domicilio-Frontend-Usuarios-Editar-Detalle.png)  

:::note Editar usuario y clave de conexion
Para el local seleccionado, se puede realizar cambios a los datos del usuario y clave de conexion, como muestra la imagen:  
![Front-end-Locales-Editar-Usuario-Conexion](/img/Domicilio-Frontend-Locales-Editar-Usuario-Conexion.png) 
:::

A través de esta acción, se verifica el acceso a la base de datos: ![Front-end-Locales-BDD](/img/Domicilio-Frontend-Locales-Ping-BDD.png) 

Si la conexión es exitosa, se debe obtener un resultado como el que muestra la siguiente imagen: 
![Front-end-Locales-BDD-Resultado](/img/Domicilio-Frontend-Locales-Ping-BDD-Resultado.png)  

A través de esta acción, se verifica el acceso al servidor: ![Front-end-Locales-Server](/img/Domicilio-Frontend-Locales-Ping-Server.png) 

Si la conexión es exitosa, se debe obtener un resultado como el que muestra la siguiente imagen: 
![Front-end-Locales-Server-Resultado](/img/Domicilio-Frontend-Locales-Ping-Server-Resultado.png)  

A través de esta acción, se elimina el local de la base de datos: ![Front-end-Locales-Eliminar](/img/Domicilio-Frontend-Locales-Eliminar.png) 

Esta acción requiere confirmación, para proceder: ![Front-end-Locales-Eliminar-Confirmacion](/img/Domicilio-Frontend-Locales-Eliminar-Confirmacion.png) 

<table>
<tr>
<td>
Una vez registrado el local, se pueden modificar los datos del mismo a través de la Acción Editar. 

:::note Importante
Esta acción permite editar el nombre del usuario y la contraseña. 
:::
</td>
<td>

![Front-end-Locales-Editar](/img/Domicilio-Frontend-Locales-Editar.png)

</td>
</tr>
<tr>
<td>

![Front-end-Locales-BDD](/img/Domicilio-Frontend-Locales-Ping-BDD.png)

</td>
<td>
A través de esta acción, se verifica el acceso a la base de datos


</td>
</tr>
<tr>
<td>
A través de esta acción, se verifica el acceso al servidor 
</td>
<td>

![Front-end-Locales-Server](/img/Domicilio-Frontend-Locales-Ping-Server.png)

</td>
</tr>
<tr>
<td>

![Front-end-Locales-Eliminar](/img/Domicilio-Frontend-Locales-Eliminar.png)

</td>
<td>
A través de esta acción, se elimina el local de la base de datos


</td>
</tr>
</table>


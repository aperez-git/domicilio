---
sidebar_position: 2
---

# Pedidos no inyectados

En esta sección, se muestran 
- Total de Pedidos no inyectados      
- Lista de Pedidos no inyectados

La imagen muestra los pedidos que no han sido inyectados:    

![Front-end-Domicilio-Pedidos-no-inyectados](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados.png)

Por cada pedido, se visualizan los siguientes datos:
```
Restaurante	
Código - App	
Cliente	
Reintentos	
Tipo de Pedido	
Cloud	
Estado	
Fecha de Error	
Acciones
```
De un pedido seleccionado, se puede visualizar el payload: 
![Front-end-Domicilio-Pedidos-no-inyectados](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-Payload.png)  

El detalle del payload seleccionado:
![Front-end-Domicilio-Pedidos-no-inyectados-Payload-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-Payload-consulta.png)

:::note Nota

Existe la facilidad de editar el payload, de ser necesario.  
Esta facilidad está supeditada al rol del usuario y sólo está disponible en esta vista.

:::

Otra acción que se puede ejecutar es la consulta de los errores:
![Front-end-Domicilio-Pedidos-no-inyectados-Payload-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-errores.png)

Esta acción permite ver los errores que se han producido para un pedido especificado:
![Front-end-Domicilio-Pedidos-no-inyectados-Payload-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-errores-detalle.png)  
Para un error en particular, se puede ejecutar la acción de consultar los eventos generados:
![Front-end-Domicilio-Pedidos-no-inyectados-Payload-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-errores-detalle-mensajes.png)  

Por último, existe la posibilidad de reinyectar un pedido:
![Front-end-Domicilio-Pedidos-no-inyectados-Payload-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-reinyectar-pedido.png)

:::note Nota

Esta facilidad permite reinyectar el pedido seleccionado.  
También, existe la posibilidad de:
- Reinyectar varios pedidos
- Reinyectar todos los pedidos: ![Front-end-Domicilio-Pedidos-no-inyectados-Reinyectar-Todos](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-no-inyectados-Reinyectar-Todos.png)
:::


Los pedidos pueden ser presentados en pantalla, en listas que varían entre 10 y 100 registros:
![Front-end-Logs-Domicilio-Pedidos-encolados-presentacion](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-encolados-presentacion.png)  

:::note Recorrido
La lista de pedidos puede ser recorrida, utilizando alguna de las siguientes modalidades:
- Primero
- Anterior
- Siguiente
- Último

![Front-end-Logs-Domicilio-Pedidos-encolados-recorrido](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-encolados-recorrido.png)
:::


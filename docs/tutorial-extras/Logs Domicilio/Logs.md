---
sidebar_position: 3
---

# Logs
Esta pestaña, como se muestra en la imagen siguiente, presenta los pedidos que han terminado con algún error y los datos que se registran son:   
```
Error	
Nivel	
Fecha Error	
Servicio	
tipo de Orden	
Cloud	
Accion
```
La imagen muestra una vista de pedidos que presentan errores:  
![Front-end-Logs-Domicilio-Logs-datos](/img/Domicilio-Frontend-Logs-Domicilio-Logs-datos.png)

Para ver los errores:  ![Front-end-Logs-Domicilio-Logs-datos-errores](/img/Domicilio-Frontend-Logs-Domicilio-Logs-datos-errores.png)  

La consulta de errores presenta una ventana similar a la que se muestra a continuación: ![Front-end-Logs-Domicilio-Logs-datos-errores-detalle](/img/Domicilio-Frontend-Logs-Domicilio-Logs-datos-errores-detalle.png)  

:::note Importante
La imagen superior muestra que hay pedidos en los que se puede consultar el payload, aparte de los errores, como es el caso del pedido `Código APP: 0000002149-092501+72`:   

![Front-end-Logs-Domicilio-Logs-datos-errores-payload](/img/Domicilio-Frontend-Logs-Domicilio-Logs-datos-errores-payload.png)

:::  



# Payload inválido

La segunda pestaña, como su nombre lo indica, muestra los pedidos con payload inválido: ![Front-end-Logs-Domicilio-Logs-Payload](/img/Domicilio-Frontend-Logs-Domicilio-Logs-Payload.png)  

Aquí, se muestran los siguientes datos:  
```
Error	
Tipo de Orden	
Cloud	
Fecha de Servicio	
Acciones
```  

La imagen muestra una vista de pedidos que presentan payloads inválidos:
![Front-end-Logs-Domicilio-Logs-Payload-invalidos](/img/Domicilio-Frontend-Logs-Domicilio-Logs-Payload-invalidos.png)  

Aquí, de manera similar, existe la posibilidad de consultar el payload para un registro específico:  
![Front-end-Logs-Domicilio-Logs-Payload-invalidos-consulta](/img/Domicilio-Frontend-Logs-Domicilio-Logs-Payload-invalidos-consulta.png)  

:::note Modo de presentación
En ambas pestañas, los registros pueden ser mostrados en pantalla, en listas que varían entre 10 y 100 registros:
![Front-end-Logs-Domicilio-Pedidos-encolados-presentacion](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-encolados-presentacion.png)  
:::

:::note Recorrido
La lista de registros puede ser recorrida, utilizando alguna de las siguientes modalidades:
- Primero
- Anterior
- Siguiente
- Último

![Front-end-Logs-Domicilio-Pedidos-encolados-recorrido](/img/Domicilio-Frontend-Logs-Domicilio-Pedidos-encolados-recorrido.png)
:::

---
sidebar_position: 1
---

# Introducción

KFC tiene una cadena de suministro de pedidos que atiende solicitudes de restaurantes esparcidos a lo largo de distintos países de Suramérica: Ecuador (sede principal), Colombia, Venezuela, Chile.

<table>
<tr>
<td>

![App de pedidos KFC](/img/kfc-scr11.png) 

</td>
<td>

Para atender la demanda, KFC tiene una aplicación propia de distribución y entrega de pedidos, llamada APP DOMICILIO, que ofrece opciones de reparto y comida para llevar desde el establecimiento KFC más cercano.

Esta aplicación ha permitido atender (fin de semana), por país:

Ecuador: entre 14000 y 17000 pedidos; de 14 a 16 pedidos recibidos por minuto  
Colombia: entre 13000 y 15000 pedidos; de 15 a 17 pedidos recibidos por minuto  
Venezuela: entre 500 y 1200 pedidos; de 1 a 2 pedidos recibidos por minuto  
Chile: entre 4000 y 12000 pedidos; de 6 a 17 pedidos recibidos por minuto  


</td>
</tr>
</table>



## Introducción al proyecto 

Lo indicado en el punto anterior requiere un [análisis de los errores](https://surf.dev/cases/kfc/) que pueden provocar una experiencia negativa para un usuario de KFC. Los mismos pueden estar causados por el restaurante, el servicio de entrega o la interfaz de la aplicación.

<table>
<tr>
<td>

- Errores del restaurante. Por ejemplo, un error típico que puede cometer un restaurante es entregar algo que no se ha pedido. 

- Error de entrega. Un error de entrega habitual es el retraso en la entrega. En este caso, es importante proporcionar a los usuarios información completa sobre el estado actual de su entrega. Esto hace que los usuarios sientan que controlan la situación y les permite reaccionar cuando algo va mal. 

- Errores de la aplicación. Uno de los posibles errores de la aplicación es el siguiente: un cliente hace un pedido y se olvida de comprobar la dirección de entrega. Como resultado, el pedido se entrega en un destino equivocado. 

- Otro caso común que puede ocurrir al hacer un pedido es el siguiente: un usuario añade artículos al carrito, procede al pago y la aplicación dice que parte del pedido no se puede entregar. 

</td>
<td>

![Menú de pedidos KFC](/img/kfc-scr21.png)

</td>
</tr>
</table>



## Arquitectura del proyecto 

La siguiente imagen presenta una vista general del sistema App Domicilio:  

![Vista-general-sistema](/img/Vista-general-sistema.png)  

Para que los pedidos realizados por los clientes lleguen a su destino final (las tiendas o restaurantes), se requieren tres módulos, los cuales son:  

- **API Domicilio** 
- **Distribuidor** 
- **Queue Resolver**  

El flujo comienza en API DOMICILIO, que recibe el pedido y luego se comunica con el microservicio DISTRIBUIDOR, el cual se encarga de evaluar cuál RESOLVER está inyectando en el momento actual, en la misma tienda que la del pedido que acaba de ingresar:   

![Inyeccion-domicilio](/img/Inyeccion-domicilio.png)  

El flujo del proceso anterior requiere el apoyo de una serie de módulos complementarios que lo hacen funcionar al 100%, los cuales son:  

- **HEALTH** permite eliminar cualquier pedido que se haya estancado en la cola actual, para poder reintentarlo más tarde  
- **AUTH** para manejar el tema de autenticación de usuarios del panel  
- **ADMIN** permite crear, eliminar, actualizar las conexiones de los locales y usuarios de acceso en el panel  
- **LOGGER** gestiona los diferentes tipos de errores que se encuentren registrados en la base de datos  




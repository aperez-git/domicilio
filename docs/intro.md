---
sidebar_position: 1
---

# Introducción

KFC tiene una cadena de suministro de pedidos que atiende solicitudes de restaurantes esparcidos a lo largo de distintos países de Suramérica. 

<table>
<tr>
<td>

![App de pedidos KFC](/img/kfc-scr11.png) 

</td>
<td>

Para atender la demanda, KFC tiene una aplicación propia de distribución y entrega de pedidos, llamada APP DOMICILIO, que ofrece opciones de reparto y comida para llevar desde el establecimiento KFC más cercano.

KFC también trabaja en colaboración con competidores indirectos para ampliar su base de clientes. Aplicaciones como XXXXXX y YYYYYY cuentan con una amplia red de más de ZZZZZZ restaurantes en la región. Esto hace que sea una opción obvia para la mayoría de los consumidores.

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


Requisitos
Docker Desktop (Windows)
Descargate la versión compatible para tu sistema operativo en caso de que no uses windows.

Quarkus CLI
Es necesario el quarkus cli para ejecutar acciones de compilación del proyecto

IntelliJ IDEA
Entorno de desarrollo en el cual fue construido el sistema por preferencia se puede utilizar el mismo entorno de desarrollo.

JDK 11
Para compilar se utiliza el JDK 11

MongoDB
Base de datos de mongodb para nuestra area local

## Levantamiento del proyecto (compilación, docker, k8s)

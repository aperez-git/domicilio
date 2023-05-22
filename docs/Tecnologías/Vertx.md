# Vert.x 
# Vert.x para aplicaciones reactivas
Las aplicaciones reactivas funcionan bajo un paradigma de diseño que se basa en la lógica de programación asíncrona, para gestionar actualizaciones en tiempo real de contenidos.

Las aplicaciones reactivas son escalables, ya que la carga de trabajo crece, y también resilientes, cuando surgen fallos. Si una aplicación tiene tanto escalabilidad como resiliencia, significa que la aplicación es reactiva.

[Vert.x](https://www.symphony-solutions.eu/definitive-guide-to-vertx/#:~:text=application%20is%20responsive.-,Vert.,asynchronous%20network%20application%20framework%2C%20Vert.) es un conjunto de herramientas utilizado para construir aplicaciones reactivas en la JVM, utilizando un modelo de ejecución asíncrono y no bloqueante. 

Al estar basado en Netty, que es un framework de aplicaciones de red asíncrono y basado en eventos, Vert.x ayuda a construir aplicaciones reactivas utilizando el concepto de bucle de eventos, que es una implementación de un patrón Multi-Reactor.
Un bus de eventos siempre está a la escucha de nuevos eventos. Cada vez que llega un nuevo evento, lo envía a algún manejador que se encarga de operarlo.
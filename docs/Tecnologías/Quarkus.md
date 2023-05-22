### Quarkus:
Es una [tecnología](https://profile.es/blog/quarkus-que-es/) que permite ejecutar, de forma eficiente, aplicaciones Java en contenedores *Kubernetes*.

La arquitectura tradicional Java está basada en una capa intermedia, la llamada *máquina virtual (JVM)*, que hace las veces de mediador entre la aplicación y el sistema operativo. La JVM interpreta el bytecode Java precompilado en un entorno de hardware y sistema operativo concretos, lo que asegura la portabilidad del código fuente Java original.

![Arquitectura tradicional Java](/img/arquitectura-java-tradicional.jpg.webp)

Actualmente, se ha popularizado otra arquitectura, la *orientada a contenedores*, gracias a tecnologías como *Docker*.

En este caso, entre el sistema operativo y las aplicaciones, también se establece una capa virtual que logra la independencia respecto a la máquina —como una JVM, pero ahora no sólo respecto a Java, sino a cualquier tipo de tecnología— en la que dispone una serie de contenedores, aislados e independientes los unos de los otros.

![Arquitectura Java basada en contenedores](/img/arquitectura-java-contenedores.jpg.webp)

Así, se puede tener un contenedor que ejecute un jar en Java 6, otro con un microservicio en Java 11, otro más con un servidor de aplicaciones. Cada contenedor trabajará con su propia JVM sobre la misma capa Docker.


![Visión general del proceso en Quarkus](/img/containerization-process.png)
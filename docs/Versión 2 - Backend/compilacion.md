---
sidebar_position: 4
---

# Compilación del código

:::info
El proceso de **compilación** requiere la aplicación de los siguientes comandos:

gradlew `MODULO-NAME`:clear &nbsp;&nbsp;&nbsp;_Este comando elimina los archivos creados durante las tareas de compilación anteriores_

gradlew `MODULO-NAME`:build -Dquarkus.package.type=native &nbsp;&nbsp;&nbsp;_Este comando sirve para crear un archivo ejecutable nativo a partir de una aplicación Java_
:::

:::note
En donde `MODULO-NAME` se refiere a:
- _api-domicilio_ 
- _api-pickup_ 
- _api-status_ 
- _distribuidor-queue_ 
- _health_ 
- _log-entry_ 
- _queue-resolver_
:::

:::tip

El proceso de compilación se puede realizar
- Abriendo una ventana de la herramienta Terminal
- Abriendo el inductor de comandos (command prompt), haciendo clic en el menú Inicio y escribiendo cmd.
- Abriendo una ventana de la herramienta Power Shell
- Desde el editor

El desarrollador está en libertad de elegir la alternativa que considere más conveniente. 
:::

A continuación, se muestra el proceso realizado desde el editor IntelliJ Idea.

Selección del módulo para configurar el proceso de compilación (en este caso, api-domicilio):
![Vista-expandida-proyecto](/img/Vista-ampliada-proyecto.png)

Configuración del proceso de compilación para el módulo seleccionado:

![Modulo-compilar](/img/Configuracion-modulo-compilar.png)


Configuración del nombre del módulo, el comando de compilación y proyecto:
![Configura-compilar](/img/Configuracion-nombre-modulo-comando-proyecto.png)

:::note
Como referencia, se presentan los resultados de la compilación de varios módulos:
- health, 
- authenticator, 
- api-pickup, 
- queue-resolver y 
- log-entry
:::

![Compilacion](/img/Compilacion-health-authenticator-api-pickup-queue-resolver-log-entry.png) 

---
sidebar_position: 4
---

# Compilación del código (build)

:::caution Precaución
Antes de comenzar, se debe verificar lo siguiente:

- _Docker Desktop_ debe estar funcionando y el parámetro Memoria debe estar fijado a 10 Gb  
![Docker-Rammemory-10gb](/img/Docker-Rammemory-10gb.png)
- Verificar que la conexión a Grupo KFC se encuentre activa:  
![Conexion](/img/VPN-Conexion.png)
:::  

:::tip Modo de compilación

El proceso de compilación se puede realizar  
- Abriendo el inductor de comandos (command prompt), haciendo clic en el menú Inicio y escribiendo cmd.
- Abriendo una ventana de la herramienta Power Shell
- En IntelliJ, abriendo una ventana de la herramienta Terminal y seleccionando uno de los modos indicados anteriormente  
![Intellij-Terminal](/img/Intellij-Terminal.png)  
El desarrollador está en libertad de elegir la alternativa que considere más conveniente. 
:::


:::info Ejecución del proceso  
El proceso de **compilación** requiere la aplicación de los siguientes comandos:  

`Alternativa 1`:  
```powershell title="En PowerShell"
.\gradlew :`MODULO-NAME`:clean  

.\gradlew :`MODULO-NAME`:build -Dquarkus.package.type=native   
```  

`Alternativa 2`:  
```shell title="En CMD"
.\gradlew `MODULO-NAME`:clean 

.\gradlew `MODULO-NAME`:build "-Dquarkus.package.type=native" 
```  

En donde:  
`clean`: _Este comando elimina los archivos creados durante las tareas de compilación anteriores_
`build`: _Este comando sirve para crear un archivo ejecutable nativo a partir de una aplicación Java_
:::

:::note 
En donde `MODULO-NAME` se refiere a:
- _admin_
- _api-domicilio_ 
- _api-pickup_ 
- _authenticator_ 
- _distribuidor-queue_ 
- _health_ 
- _log-entry_ 
- _queue-resolver_
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

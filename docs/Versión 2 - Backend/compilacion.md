---
sidebar_position: 5
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
.\gradlew `MODULO-NAME`:clean  

.\gradlew `MODULO-NAME`:build "-Dquarkus.package.type=native" 
```  

`Alternativa 2`:  
```shell title="En CMD"  
.\gradlew :`MODULO-NAME`:clean  

.\gradlew :`MODULO-NAME`:build -Dquarkus.package.type=native   
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

## Resultados de la compilación de cada módulo  

```shell title="Módulo: admin"  

.\gradlew admin:build "-Dquarkus.package.type=native"

Resultado de la ejecución del comando:
Finished generating 'admin-1.0.0-SNAPSHOT-runner' in 9m 7s.

BUILD SUCCESSFUL in 10m 41s
13 actionable tasks: 1 executed, 12 up-to-date
```

```shell title="Módulo: api-domicilio"  

.\gradlew :api-domicilio:build -Dquarkus.package.type=native

Resultado del comando en CMD:
Finished generating 'api-domicilio-1.0.0-SNAPSHOT-runner' in 7m 34s.

BUILD SUCCESSFUL in 8m 29s
13 actionable tasks: 7 executed, 6 up-to-date
```  

```shell title="Módulo: api-pickup"  

.\gradlew :api-pickup:build -Dquarkus.package.type=native

Resultado de la compilación:
Finished generating 'api-pickup-1.0.0-SNAPSHOT-runner' in 7m 34s.

BUILD SUCCESSFUL in 8m 37s
13 actionable tasks: 6 executed, 7 up-to-date
```

```shell title="Módulo: authenticator"  

.\gradlew :authenticator:build -Dquarkus.package.type=native

Resultado de la compilación:
> Task :authenticator:compileJava
Note: C:\Users\f-perez\IdeaProjects\compras-programadas-rama-V2\authenticator\src\main\java\com\kfc\auth\resources\ApiAuth.java uses unchecked or unsafe operations

Note: Recompile with -Xlint:unchecked for details.
Finished generating 'authenticator-1.0.0-SNAPSHOT-runner' in 7m 43s.

BUILD SUCCESSFUL in 8m 41s
13 actionable tasks: 7 executed, 6 up-to-date
```

```shell title="Módulo: distribuidor-queue"  

.\gradlew :distribuidor-queue:build -Dquarkus.package.type=native

Resultados de la compilación:
Finished generating 'distribuidor-queue-1.0.0-SNAPSHOT-runner' in 7m 31s.                                               

BUILD SUCCESSFUL in 8m 26s
13 actionable tasks: 7 executed, 6 up-to-date
```  

```shell title="Módulo: health"  

.\gradlew :health:build -Dquarkus.package.type=native

Resultado de la compilación:
Finished generating 'health-1.0.0-SNAPSHOT-runner' in 7m 36s.

BUILD SUCCESSFUL in 8m 29s
13 actionable tasks: 7 executed, 6 up-to-date
```  

```shell title="Módulo: log-entry"  
.\gradlew :log-entry:build: -Dquarkus.package.type=native

Resultados de la compilación:
Finished generating 'log-entry-1.0.0-SNAPSHOT-runner' in 7m 52s.

BUILD SUCCESSFUL in 8m 50s
13 actionable tasks: 7 executed, 6 up-to-date
```  

```shell title="Módulo: queue-resolver"  

.\gradlew :queue-resolver:build -Dquarkus.package.type=native

Resultados de la compilación:
Finished generating 'queue-resolver-1.0.0-SNAPSHOT-runner' in 8m 16s.                                                   

BUILD SUCCESSFUL in 9m 27s
13 actionable tasks: 7 executed, 6 up-to-date  
```  

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

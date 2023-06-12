---
sidebar_position: 4
---

# Repositorio para descarga de la versión 2

Verificar que la conexión a Grupo KFC se encuentre activa:

![Conexion](/img/VPN-Conexion.png)

Repositorio donde se encuentra la versión 2:

**https://devops.kfc.com.ec/KFCCollection/InvestigacionArquitecturas/_git/compras-programadas**

Seleccionar la rama o branch:

![Rama-branch](/img/Rama-branch-seleccionada.png)


<table>
<tr>
<td>

La rama o branch se clona, y la copia se guarda en el editor:

</td>
<td>

![Vista-expandida-proyecto](/img/Vista-ampliada-proyecto.png)
</td>
</tr>
</table>

:::note
La vista muestra los módulos que componen la aplicación:
- api-domicilio 
- api-pickup 
- api-status 
- distribuidor-queue 
- health 
- log-entry 
- queue-resolver
:::

Selección del módulo para configurar el proceso de compilación (en este caso, api-domicilio):

![Modulo-compilar](/img/Configuracion-modulo-compilar.png)

:::note
**Comando de compilación**:
build -Dquarkus.package.type=native
:::

Configuración de nombre de módulo, comando de compilación y proyecto:
![Configura-compilar](/img/Configuracion-nombre-modulo-comando-proyecto.png)

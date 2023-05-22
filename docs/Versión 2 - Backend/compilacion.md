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

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

You have just learned the **basics of Docusaurus** and made some changes to the **initial template**.

Docusaurus has **much more to offer**!

Have **5 more minutes**? Take a look at **[versioning](../tutorial-extras/manage-docs-versions.md)** and **[i18n](../tutorial-extras/translate-your-site.md)**.

Anything **unclear** or **buggy** in this tutorial? [Please report it!](https://github.com/facebook/docusaurus/discussions/4610)

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)


---
hide_table_of_contents: true
---



<table >
<tr>
<th> Good </th>
<th> Bad </th>
</tr>
<tr>
<td>

```c++
int foo() {
    int result = 4;
    return result;
}
```

</td>
<td>

```c++
int foo() { 
    int x = 4;
    return x;
}
```

</td>
</tr>
</table>

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

<table border="0px">
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
  <tr>
    <td>400</td>
    <td>500</td>
    <td>600</td>
  </tr>
</table>
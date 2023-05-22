---
sidebar_position: 2
---

# Roles

En esta sección, se definen los roles que se van a asignar a los usuarios del sistema.  
![Front-end-Roles](/img/Domicilio-Frontend-Roles.jpg)  

Las acciones que se pueden realizar son:

Crear un nuevo rol: ![Front-end-Roles-usuario-crear](/img/Domicilio-Frontend-Usuarios-Rol-usuario-crear.jpg)  

Después de crear el rol, para asignar los permisos, se puede editar: ![Front-end-Roles-usuario-editar](/img/Domicilio-Frontend-Usuarios-Rol-usuario-editar.jpg)   

o eliminar del sistema: ![Front-end-Roles-usuario-eliminar](/img/Domicilio-Frontend-Usuarios-Rol-usuario-eliminar.jpg)

Como ejemplo, se ha creado el rol *Prueba*:  
![Front-end-Roles](/img/Domicilio-Front-end-Roles.png)  

  

:::note Distribución de los permisos
Los permisos se encuentran agrupados en las siguientes categorías:
- Busqueda de Pedidos
- Usuarios
- Configuracion
- Roles
- Locales
- Log Domicilio
- Dashboard
- Permisos Generales
:::

Por categoría, se tienen los siguientes permisos:  
```
Busqueda de Pedidos
	Marcar todo
	Buscar pedidos
	Ver Historial del Pedido
Usuarios
	Marcar todo
	Mostrar Tabla de Usuario
	Crear Usuario
	Editar Usuario
	Eliminar Usuario
	Asignar Rol
Configuracion
	Marcar todo
	Mostrar Configuración
	Bot de telegram
	Truncar numero celular
Roles
	Marcar todo
	Mostrar tabla de Roles
	Crear Rol
	Editar Rol
	Eliminar Rol
Locales
	Marcar todo
	Mostrar Tabla de Locales
	Crear Locales
	Editar Local
	Ping BDD
	Ping
	Eliminar Locales
Log Domicilio
	Pedidos en cola
		Mostrar Tabla de Pedidos en Cola
	Pedidos no Inyectados
		Marcar todo
		Mostrar Tabla de Pedidos en error
		Pedidos Antiguos
		Reinyectar Pedidos
		Editar Payload
	Logs
		Mostrar Logs y Pedidos Invalidos
Dashboard
	Marcar todo
	Ver Resolver
	Ver Historial
	Ver Últimos Pedidos
Permisos Generales
	Mostrar payloads de todos los pedidos
```

Al rol *Prueba* creado, se le han asignado los siguientes permisos:  
![Front-end-Roles-Permisos](/img/Domicilio-Frontend-Roles-Permisos-I.png)  

![Front-end-Roles-Permisos-II](/img/Domicilio-Frontend-Roles-Permisos-II.png)  

Let's translate `docs/intro.md` to French.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a same time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```

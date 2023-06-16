---
sidebar_position: 8
---  

# Despliegue del Panel de Control Domicilio  
:::note Requisitos: 
El sistema Domicilio requiere la instalación de:   
- node js  
- angular  
:::

:::note Herramientas a usar en el panel:  

- **Angular**: el lenguaje usado para el desarrollo  de la aplicación  
- **InttelliJ**: la herramienta usada para la clonación de la rama a usar  
- **VSCode**:  el ambiente de desarrollo, de preferencia  
- **node**: la herramienta usada para las descargas  
:::


<details>
<summary>Pasos a ejecutar, para lograr el despliegue:</summary>
<details>
  <summary>En IntelliJ:</summary>
  <p>Clonar la rama master</p>  
  <p>Efectuada la clonación, se especifica la rama del proyecto con la que se va a trabajar, a través de la opción Checkout.</p>
</details>

<details>
  <summary>En VS Code:</summary>
  <p>Ubicación de la carpeta que contiene el proyecto</p> 
  <p>En la opción Terminal, ejecutar los siguientes comandos: </p> 
  <p>npm install --force  </p>
  <p>npm run start  </p>
</details>
</details>

El resultado de la ejecución del último comando termina presentando el siguiente mensaje:  


** Angular Live Development Server is listening on localhost:90, open your browser on http://localhost:90/ **  

<details>
  <summary>** Angular Live Development Server is listening on localhost:90, open your browser on http://localhost:90/ **</summary>
  <p>Clonar la rama master</p>  
  <p>Efectuada la clonación, se especifica la rama del proyecto con la que se va a trabajar, a través de la opción Checkout.</p>


```js
> kfc-domicilio@0.0.0 start
> ng serve --port 90

⠹ Generating browser application bundles (phase: setup)...Processing legacy "View Engine" libraries:
- @swimlane/ngx-datatable [es2015/esm2015] (git+https://github.com/swimlane/ngx-datatable.git)
Encourage the library authors to publish an Ivy distribution.
✔ Browser application bundle generation complete.

Initial Chunk Files                               | Names                              |  Raw Size
vendor.js                                         | vendor                             |   3.35 MB |
scripts.js                                        | scripts                            |   2.35 MB |
styles.css, styles.js                             | styles                             |   2.13 MB |
polyfills.js                                      | polyfills                          | 319.83 kB |
main.js                                           | main                               |  21.49 kB |
runtime.js                                        | runtime                            |  14.60 kB |

                                                  | Initial Total                      |   8.18 MB

Lazy Chunk Files                                  | Names                              |  Raw Size
src_app_kfc-domicilio_kfc-domicilio_module_ts.js  | kfc-domicilio-kfc-domicilio-module |   3.72 MB |
node_modules_highlight_js_es_core_js.js           | highlight-js-lib-core              |  74.90 kB |
node_modules_highlight_js_es_languages_json_js.js | highlight-js-lib-languages-json    |   1.91 kB |

Build at: 2023-06-07T19:56:45.285Z - Hash: f2a2273b79b847b9 - Time: 44195ms

./node_modules/admin-lte/dist/css/adminlte.min.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/admin-lte/dist/css/adminlte.min.css - Warning: Module Warning (from ./node_modules/postcss-loader/dist/cjs.js):
Warning

(11:62244) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.


** Angular Live Development Server is listening on localhost:90, open your browser on http://localhost:90/ **


√ Compiled successfully.
✔ Browser application bundle generation complete  
```  

</details>  

El acceso a la aplicación Domicilio se realiza escribiendo la dirección especificada en el mensaje anterior, en el navegador, luego de lo cual aparece el siguiente formulario de entrada:  

![Front-end-Ingreso](/img/Domicilio-Front-end-Ingreso.png)  


Se procede a ingresar los datos solicitados:  
- Correo electrónico  
- Contraseña  

Si la verificación de los datos introducidos es exitosa, se podrá ingresar y ver el contenio de la aplicación:  

![App-Domicilio-Panel](/img/App-Domicilio-Panel.png)  

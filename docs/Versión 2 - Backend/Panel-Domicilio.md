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

El acceso a la aplicación Domicilio se realiza escribiendo la dirección especificada en el mensaje anterior, en el navegador, luego de lo cual aparece el siguiente formulario de entrada:  

![Front-end-Ingreso](/img/Domicilio-Front-end-Ingreso.png)  


Se procede a ingresar los datos solicitados:  
- Correo electrónico  
- Contraseña  

Si la verificación de los datos introducidos es exitosa, se podrá ingresar y ver el contenio de la aplicación.  

---
sidebar_position: 1
---

# Requerimientos del Sistema Domicilio

Para un correcto funcionamiento del sistema, la computadora a usar debe satisfacer los siguientes requerimientos:  

- **Memoria RAM**: 16 GB (recomendable)
- **Sistema operativo**: Windows 10 en adelante
- **Almacenamiento**: 125 GB (mínimo)

# Herramientas a instalar  

Para su instalación, configuración y operación, el sistema requiere, entre otras, las siguientes herramientas:  

- **Docker Desktop**: versión _Windows_, o compatible con el sistema operativo.  
- **Quarkus CLI**: para ejecutar acciones de compilación del proyecto.  
- **IntelliJ IDEA**: Entorno de desarrollo en el cual fue construido el sistema (recomendable), aunque se pueden utilizar otros entornos de desarrollo.  
- **JDK**: Para compilar se utiliza el _JDK 11_.  
- **Base de datos**: _MongoDB_, para el área local.  
- **Antivirus licenciado**, en caso de no contar con uno, se debe instalar el antivirus _Sophos empresarial_.

# Pasos  

Como se vió en la [Arquitectura](/intro.md##-Arquitectura-del-proyecto), el sistema Domicilio posee Front-end y Back-end. En el caso del Back-end, se requiere la ejecución de los siguientes pasos, para su puesta en funcionamiento:  

<ol>
  <li>Instalación de Docker</li>
  <li>Instalación de Kong</li>
  <li>Descarga de una rama (clonación) del repositorio</li>
  <li>Compilación del código clonado</li>
  <li>Despliegue del panel de control de Kubernetes</li>
  <li>Despliegue del panel de control del Sistema Domicilio</li>
</ol>  
  
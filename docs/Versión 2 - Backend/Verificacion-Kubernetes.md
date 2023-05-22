---
sidebar_position: 6
---

# Panel de Control de Kubernetes


# Verificación en Kubernetes

El panel de control de Kubernetes debe ser desplegado (deployed), antes de ser usado, para lo cual se abre una sesión de la ventana de comandos (CMD) o PowerShell y se ejecuta el siguiente comando:

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml


Habilitar el acceso al panel de control de Kubernetes (Dashboard), utilizando la herramienta de línea de comandos kubectl, ejecutando el siguiente comando:

![Acceso al panel de control](/img/Kubernetes-kubectl-proxy-acceso.png)  
Obtener un token de portador (Bearer Token) para ingresar al panel de control, ejecutando el siguiente comando:

**kubectl -n kubernetes-dashboard create token admin-user**

Debería generar un resultado como el siguiente:

![Token Dashboard de Kubernetes](/img/Token-de-acceso-al-panel-de-Kubernetes.png)

En el navegador web, mostrar el panel de control a través del comando:

**http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/**

El token generado anteriormente, se copia y pega en la línea:


![Dashboard de Kubernetes](/img/Panel-de-control-de-Kubernetes.png)

Luego, se selecciona el botón **Iniciar sesión**

Debe aparecer la pantalla de bienvenida a Kubernetes:

![Dashboard de Kubernetes](/img/Kubernetes-default.png)

En el área correspondiente a los espacios de nombres (namespaces), se selecciona app-domicilio, como muestra
la imagen:

![Espacio-de-nombres](/img/Espacio-de-nombres.png)

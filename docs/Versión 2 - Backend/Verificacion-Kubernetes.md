---
sidebar_position: 6
---

# Panel de Control de Kubernetes

El panel de control (o Dashboard) de Kubernetes es una interfaz de usuario basada en la web, por lo que se presenta al usuario como una pestaña adicional en el navegador.  

Para usar el panel, se deben ejecutar dos pasos:  
- Realizar el despliegue y 
- Habilitar el acceso  
  

:::caution Precaución  
Se debe verificar que `Docker Desktop` esté activo, antes de ejecutar cualquiera de los comandos o acciones que aparecen en esta sección. 
:::

## Despliegue del panel

En la ventana de comandos (CMD) o PowerShell, se ejecuta el siguiente comando:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

namespace/kubernetes-dashboard unchanged
serviceaccount/kubernetes-dashboard unchanged
service/kubernetes-dashboard unchanged
secret/kubernetes-dashboard-certs unchanged
secret/kubernetes-dashboard-csrf configured
Warning: resource secrets/kubernetes-dashboard-key-holder is missing the kubectl.kubernetes.io/last-applied-configuration annotation which is required by kubectl apply. kubectl apply should only be used on resources created declaratively by either kubectl create --save-config or kubectl apply. The missing annotation will be patched automatically.
secret/kubernetes-dashboard-key-holder configured
configmap/kubernetes-dashboard-settings unchanged
role.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
clusterrole.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
clusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
deployment.apps/kubernetes-dashboard unchanged
service/dashboard-metrics-scraper unchanged
deployment.apps/dashboard-metrics-scraper unchanged

```


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

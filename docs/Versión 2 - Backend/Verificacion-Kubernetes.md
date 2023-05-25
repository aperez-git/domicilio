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

Dá como resultado:

namespace/kubernetes-dashboard unchanged
serviceaccount/kubernetes-dashboard unchanged
service/kubernetes-dashboard unchanged
secret/kubernetes-dashboard-certs unchanged
secret/kubernetes-dashboard-csrf configured
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
## Acceso al panel

El acceso al panel sólo es posible si el usuario está registrado en el espacio de nombres del panel Kubernetes (kubernetes-dashboard), creado en el paso anterior, por lo que se deben ejecutar los siguientes pasos:

### Creación de la cuenta de servicio
Se crea un archivo de manifiesto, con el nombre dashboard-adminuser.yaml y se guardan las siguientes especificaciones:  
```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard  
```  

En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:
```
kubectl apply -f dashboard-adminuser.yaml  

Dá como resultado:
serviceaccount/admin-user created

```  

### Concesión de permisos de administración  
A la cuenta creada en el paso anterior, se le deben asignar permisos de administrador, para un adecuado manejo del panel de Kubernetes, para lo cual se crea un archivo de manifiesto, en donde se guardan las siguientes especificaciones:
```
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard  
```
El archivo se guarda con el nombre k8s-cluster-role-binding.yaml.

En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:
```
kubectl create -f k8s-cluster-role-binding.yaml  

Dá como resultado:

clusterrolebinding.rbac.authorization.k8s.io/admin-user created
``` 

### Generación del token de autorización
Para completar los pasos para el ingreso al panel de Kubernetes, se debe generar el token portador o de autorización (bearer token).

En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:
```
kubectl -n kubernetes-dashboard create token admin-user  
 
Generando el token de autorización de acceso:

eyJhbGciOiJSUzI1NiIsImtpZCI6IjVJR3lYdnRtNTZJSkxEMG9sY3pmWl9GNzJUZWVnTzlOSnZkOUx1VF90YTAifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjg0OTY1MTM0LCJpYXQiOjE2ODQ5NjE1MzQsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiZjU0MmM3OTgtY2M0Yi00ZWMwLTg5MzItNGIxZmQ3ZmM4ZWQxIn19LCJuYmYiOjE2ODQ5NjE1MzQsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.mi7Nff5bmA2SzDLjlKhg0j40Ul7UqvIXgyVucwW1ZT6xu-3bYgWvJvDH0lUPA8G2aAHxf61N6oC2L4mHKJ26jHS-mCgeDmtdloC24FfMrolxmwBDRV9c0HcoKKVRP04O8b_QW1E6JY2IgEWGLYcIkhkhyZtArAlDU5eU-7K8chQJGv7tgjf-KH9KuLCx5UCwsa4xRwUkjWwA9inUZSyChX7iJrJBQIcVGvb2J-Qk8dD9Ol48-gxwncKwHQwDEjj8qr90S_8pfwD33hd3ghz-7gObT36eaFYHjikGzZDHOSXWrsWyawGjS7--Z_Tk6L78xK3k4UJFic0cE8e75K6lCQ
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

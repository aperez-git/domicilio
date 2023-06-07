---
sidebar_position: 5
---

# Despliegue (deployment) del proyecto en Kubernetes

:::note Ejecución del proceso
Este proceso involucra tres pasos:  
- Configuración de bases de datos  
- Despliegue (Deployment) de las imágenes  
- Configuración del servicio 
:::

En el directorio del proyecto, (por ejemplo: C:\Users\f-perez\IdeaProjects\compras-programadas V2), se ubica el archivo:  
database-config-localhost.yaml
  
```yaml title="database-config-localhost.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: database-config-atlas
  namespace: app-domicilio
type: Opaque
stringData:
  country-name: "Chile"
  cloud-name: "azure"
  database-name: "appDomicilio"
  nosql-type: "mongodb"
  nosql-uri: "mongodb://mongodb://192.168.1.104:27017/?readPreference=primary&directConnection=true&ssl=false"
  pickup-app-monitoreo: "https://monitoreo-pickup.loca.lt"
  pickup-jwt-token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImlhdCI6MTY3ODIyOTM0OCwiZXhwIjowfQ.eyJJZCI6IktGQyBBUFAiLCJOYW1lIjoiQXBwIERvbWljaWxpbyBQaWNrdXAifQ.usRBGUuvL3BO4c-PmiP7jyXczB3DNMFTKjl4RPa5EdNXoa1SZGCJZ20B0m2cBg8cEW1tln8gB-UilfXfZAJJ3k245jXI3SklInRmoRsKlwSJ8O96hFlf9gk86zcp8Srx9xjoep8QBJKLBkwgAuisrPh9brj6wyxbw3s4kahcPFTJKF40pdJuE1jcH1GBtAlprx6WAfzVGvx_Q0IeIRFJup1FfNQybXyPig15Ey-Oywhwchgq_I6S8WmFztWrYOODcHhW_2UnaQg1S4vsghZXPs597LaVMH5ckH7gebZjoN5r-kgVNcvzqlsq9sccUiQWfYG5OnVi1twJ1d1ByorKjw"
  k8s-client-namespace: "app-domicilio"
```

Se ejecuta el siguiente comando:  
```bash  
kubectl apply -f "C:\Users\f-perez\IdeaProjects\compras-programadas V2\uk8s-resources\kubernetes\config-k8s\database-config-localhost.yaml"
```  

:::info

Resultado:  
```bash
secret/database-config-atlas configured
```  

:::

Posteriormente, se ubica el segundo archivo manifiesto, install-localhost.yaml, el cual contiene las especificaciones necesarias para efectuar el despliegue y la creación del servicio:  

```yaml title="install-localhost.yaml (fragmento)"  
apiVersion: v1
kind: Namespace
metadata:
  name: app-domicilio
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: distribuidor-queue
  namespace: app-domicilio
roleRef:
  kind: Role
  name: distribuidor-queue
  apiGroup: rbac.authorization.k8s.io
subjects:
  - kind: ServiceAccount
    name: distribuidor-queue
    namespace: app-domicilio
(...)
```

Ahora, se ejecuta el siguiente comando:  

```bash
kubectl apply -f "C:\Users\f-perez\IdeaProjects\compras-programadas V2\uk8s-resources\k8s-deployer\install-localhost.yaml"
```  

:::info
Resultado de la ejecución:
```bash

namespace/app-domicilio created
rolebinding.rbac.authorization.k8s.io/distribuidor-queue created
role.rbac.authorization.k8s.io/distribuidor-queue created
serviceaccount/distribuidor-queue created
deployment.apps/api-domicilio created
service/api-domicilio created
ingress.networking.k8s.io/api-domicilio created
deployment.apps/api-pickup created
service/api-pickup created
ingress.networking.k8s.io/api-pickup created
deployment.apps/distribuidor-queue created
service/distribuidor-queue created
deployment.apps/queue-resolver-1 created
service/queue-resolver-1 created
deployment.apps/api-auth created
service/api-auth created
ingress.networking.k8s.io/api-auth created
deployment.apps/api-admin created
service/api-admin created
ingress.networking.k8s.io/api-admin created
deployment.apps/log-entry created
service/log-entry created
ingress.networking.k8s.io/log-entry created
serviceaccount/api-health created
role.rbac.authorization.k8s.io/api-health created
rolebinding.rbac.authorization.k8s.io/api-health created
deployment.apps/api-health created
service/api-health created
ingress.networking.k8s.io/api-health created
deployment.apps/api-status created

```
:::
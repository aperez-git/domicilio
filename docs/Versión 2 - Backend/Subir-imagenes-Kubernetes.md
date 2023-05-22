---
sidebar_position: 5
---

# Subir las imágenes a Kubernetes

Desde el directorio en donde se encuentra el proyecto, (por ejemplo: 
C:\Users\f-perez\IdeaProjects\compras-programadas V2), se ejecuta el siguiente comando:

**kubectl apply -f "C:\Users\f-perez\IdeaProjects\compras-programadas V2\uk8s-resources\kubernetes\config-k8s\database-config-localhost.yaml"**

:::info

Resultado:

secret/database-config-atlas configured

:::


Ahora, se ejecuta el siguiente comando:

**kubectl apply -f "C:\Users\f-perez\IdeaProjects\compras-programadas V2\uk8s-resources\k8s-deployer\install-localhost.yaml"**

:::info
Resultado:

namespace/app-domicilio unchanged  
rolebinding.rbac.authorization.k8s.io/distribuidor-queue unchanged  
role.rbac.authorization.k8s.io/distribuidor-queue unchanged  
serviceaccount/distribuidor-queue unchanged  
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
serviceaccount/api-health unchanged  
role.rbac.authorization.k8s.io/api-health unchanged  
rolebinding.rbac.authorization.k8s.io/api-health unchanged  
deployment.apps/api-health created  
service/api-health created  
ingress.networking.k8s.io/api-health created  
deployment.apps/api-status created  
service/api-status created  
ingress.networking.k8s.io/api-status created
:::
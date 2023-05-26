---
sidebar_position: 5
---

# Subir las imágenes a Kubernetes

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

```yaml title="install-localhost.yaml"  
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
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: distribuidor-queue
  namespace: app-domicilio
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["list", "watch", "get"]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: distribuidor-queue
  namespace: app-domicilio
---
# API DOMICILIO DEPLOYMENT
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-domicilio
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: client
      tier: api-domicilio
      track: stable
  replicas: 1
  revisionHistoryLimit: 3
  template:
    metadata:
      labels:
        app: client
        tier: api-domicilio
        track: stable
    spec:
      containers:
        - name: api-domicilio
          image: "kfcregistry.azurecr.io/pedidos-app-ec/api-domicilio:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-domicilio
  namespace: app-domicilio
spec:
  selector:
    app: client
    tier: api-domicilio
  ports:
    - name: http
      protocol: "TCP"
      port: 8080
      targetPort: 80
    - name: https
      protocol: "TCP"
      port: 4443
      targetPort: 80
  type: LoadBalancer
---
###
### API DOMICILIO
###
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-domicilio
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/restApp
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-domicilio
                port:
                  number: 8080
          - path: /api/v3/restApp
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-domicilio
                port:
                  number: 8080
---
# API PICKUP DEPLOYMENT
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-pickup
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: client
      tier: api-pickup
      track: stable
  replicas: 1
  revisionHistoryLimit: 3
  template:
    metadata:
      labels:
        app: client
        tier: api-pickup
        track: stable
    spec:
      containers:
        - name: api-pickup
          image: "kfcregistry.azurecr.io/pedidos-app-ec/api-pickup:2.0.2"
          imagePullPolicy: Never
          envFrom:
            - secretRef:
                name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-pickup
  namespace: app-domicilio
spec:
  selector:
    app: client
    tier: api-pickup
  ports:
    - name: http
      protocol: "TCP"
      port: 7081
      targetPort: 80
    - name: https
      protocol: "TCP"
      port: 5443
      targetPort: 80
  type: LoadBalancer
---
###
### API PICKUP INGRESS
###
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-pickup
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /pickup/api/v3
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-pickup
                port:
                  number: 7081
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: distribuidor-queue
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: distribuidor
      tier: distribuidor-queue
      track: stable
  replicas: 1
  revisionHistoryLimit: 3
  template:
    metadata:
      labels:
        app: distribuidor
        tier: distribuidor-queue
        track: stable
    spec:
      serviceAccountName: distribuidor-queue
      containers:
        - name: distribuidor-queue
          image: "kfcregistry.azurecr.io/pedidos-app-ec/distribuidor-queue:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
###
### DISTRIBUIDOR QUEUE
###
apiVersion: v1
kind: Service
metadata:
  name: distribuidor-queue
  namespace: app-domicilio
spec:
  selector:
    app: distribuidor
    tier: distribuidor-queue
  ports:
    - protocol: "TCP"
      port: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: queue-resolver-1
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: queue-resolver
      tier: queue-resolver-1
      track: stable
  replicas: 1
  revisionHistoryLimit: 0
  template:
    metadata:
      labels:
        app: queue-resolver
        tier: queue-resolver-1
        track: stable
    spec:
      containers:
        - name: queue-resolver-1
          image: "kfcregistry.azurecr.io/pedidos-app-ec/queue-resolver:2.0.2"
          imagePullPolicy: Never
          envFrom:
            - secretRef:
                name: database-config-atlas
---
###
### QUEUE RESOLVER #1
###
apiVersion: v1
kind: Service
metadata:
  name: queue-resolver-1
  namespace: app-domicilio
spec:
  selector:
    app: queue-resolver
    tier: queue-resolver-1
  ports:
    - protocol: "TCP"
      port: 80
      targetPort: 80
---
###
### API AUTH (PANEL)
###
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-auth
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: auth
      tier: api-auth
      track: stable
  replicas: 1
  revisionHistoryLimit: 2
  template:
    metadata:
      labels:
        app: auth
        tier: api-auth
        track: stable
    spec:
      containers:
        - name: api-auth
          image: "kfcregistry.azurecr.io/pedidos-app-ec/auth:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-auth
  namespace: app-domicilio
spec:
  selector:
    app: auth
    tier: api-auth
  ports:
    - protocol: "TCP"
      port: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-auth
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/auth
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-auth
                port:
                  number: 80
---
###
### API ADMIN (PANEL)
###
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-admin
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: admin
      tier: api-admin
      track: stable
  replicas: 1
  revisionHistoryLimit: 2
  template:
    metadata:
      labels:
        app: admin
        tier: api-admin
        track: stable
    spec:
      containers:
        - name: api-admin
          image: "kfcregistry.azurecr.io/pedidos-app-ec/admin:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-admin
  namespace: app-domicilio
spec:
  selector:
    app: admin
    tier: api-admin
  ports:
    - protocol: "TCP"
      port: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-admin
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/admin
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-admin
                port:
                  number: 80
---
###
### LOG ENTRY API (PANEL)
###
apiVersion: apps/v1
kind: Deployment
metadata:
  name: log-entry
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: logger
      tier: log-entry
      track: stable
  replicas: 1
  revisionHistoryLimit: 2
  template:
    metadata:
      labels:
        app: logger
        tier: log-entry
        track: stable
    spec:
      containers:
        - name: log-entry
          image: "kfcregistry.azurecr.io/pedidos-app-ec/log-entry:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: log-entry
  namespace: app-domicilio
spec:
  selector:
    app: logger
    tier: log-entry
  ports:
    - protocol: "TCP"
      port: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: log-entry
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/logger
            pathType: ImplementationSpecific
            backend:
              service:
                name: log-entry
                port:
                  number: 80
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api-health
  namespace: app-domicilio
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: api-health
  namespace: app-domicilio
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["list", "watch", "get"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: api-health
  namespace: app-domicilio
roleRef:
  kind: Role
  name: api-health
  apiGroup: rbac.authorization.k8s.io
subjects:
  - kind: ServiceAccount
    name: api-health
    namespace: app-domicilio
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-health
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: health
      tier: api-health
      track: stable
  replicas: 1
  revisionHistoryLimit: 2
  template:
    metadata:
      labels:
        app: health
        tier: api-health
        track: stable
    spec:
      serviceAccountName: api-health
      containers:
        - name: api-health
          image: "kfcregistry.azurecr.io/pedidos-app-ec/health:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-health
  namespace: app-domicilio
spec:
  selector:
    app: health
    tier: api-health
  ports:
    - protocol: "TCP"
      port: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-health
  namespace: app-domicilio

spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/health
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-health
                port:
                  number: 80
---
# API STATUS DEPLOYMENT
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-status
  namespace: app-domicilio
spec:
  selector:
    matchLabels:
      app: status
      tier: api-status
      track: stable
  replicas: 1
  revisionHistoryLimit: 3
  template:
    metadata:
      labels:
        app: status
        tier: api-status
        track: stable
    spec:
      containers:
        - name: api-status
          image: "kfcregistry.azurecr.io/pedidos-app-ec/api-status:2.0.2"
          imagePullPolicy: Never
          env:
            - name: COUNTRY_NAME
              valueFrom:
                secretKeyRef:
                  key: country-name
                  name: database-config-atlas
            - name: CLOUD_NAME
              valueFrom:
                secretKeyRef:
                  key: cloud-name
                  name: database-config-atlas
            - name: NOSQL_TYPE
              valueFrom:
                secretKeyRef:
                  key: nosql-type
                  name: database-config-atlas
            - name: NOSQL_URI
              valueFrom:
                secretKeyRef:
                  key: nosql-uri
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_HOST
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-host
                  name: database-config-atlas
            - name: NOSQL_COSMOSDB_MASTERKEY
              valueFrom:
                secretKeyRef:
                  key: nosql-cosmosdb-masterkey
                  name: database-config-atlas
            - name: DATABASE_NAME
              valueFrom:
                secretKeyRef:
                  key: database-name
                  name: database-config-atlas
            - name: URL_AZURE_SQL_SERVER
              valueFrom:
                secretKeyRef:
                  key: url-azure-sql-server
                  name: database-config-atlas
            - name: URL_AZURE_API_DOMICILIO
              valueFrom:
                secretKeyRef:
                  key: url-azure-api-domicilio
                  name: database-config-atlas
---
apiVersion: v1
kind: Service
metadata:
  name: api-status
  namespace: app-domicilio
spec:
  selector:
    app: status
    tier: api-status
  ports:
    - name: http
      protocol: "TCP"
      port: 8080
      targetPort: 80
  type: LoadBalancer
---
###
### API STATUS
###
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-status
  namespace: app-domicilio
spec:
  ingressClassName: kong
  rules:
    - http:
        paths:
          - path: /api/status
            pathType: ImplementationSpecific
            backend:
              service:
                name: api-status
                port:
                  number: 8080
```

Ahora, se ejecuta el siguiente comando:  

```bash
kubectl apply -f "C:\Users\f-perez\IdeaProjects\compras-programadas V2\uk8s-resources\k8s-deployer\install-localhost.yaml"
```  

:::info
Resultado:
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
```
:::
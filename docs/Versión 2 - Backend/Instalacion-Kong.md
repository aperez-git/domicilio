---
sidebar_position: 2
---

# Instalación de Kong

:::note Importante
La instalación de Kong involucra la ejecución de tres pasos:
- Instalación de Chocolatey
- Instalación de Helm
- Instalación de Kong
:::  

# Instalación de Chocolatey
```bash 
En la página de Chocolatey (https://chocolatey.org/install), seleccionar el modo individual para instalar.

Abrir una sesión de PowerShell en modo administrador. 

Ejecutar el comando: **Get-ExecutionPolicy**. 

Como la respuesta fué **Restricted**, hay que ejecutar el comando **Set-ExecutionPolicy AllSigned**. 

Instalar el manejador de paquetes, **Chocolatey**. 

Ahora, se ejecuta el siguiente comando: 

**Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))** 

Después de la instalación, ejecutar el comando **choco /?**, para ver la lista de funciones. 
```

# Instalación de Helm: 

```bash
choco install kubernetes-helm** 

Ejecución del comando helm 

The Kubernetes package manager... 
```

# Instalación de Kong: 

```bash
helm repo add kong https://charts.konghq.com** 

helm repo update** 

helm install kong/kong --generate-name --set ingressController.installCRDs=false**  
```

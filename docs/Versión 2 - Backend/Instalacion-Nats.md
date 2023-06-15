---
sidebar_position: 4
---

# Instalación de NATS    

NATS (Neural Autonomic Transport System, Sistema de transporte autónomo neuronal) es un sistema de mensajería de código abierto que permite el intercambio de datos entre aplicaciones y servicios, segmentado en forma de mensajes.

Existen varias alternativas para instalar NATS:  
- Docker  
- Kubernetes  
- Package Manager  
- Release Zip  
- Development Build  


# Instalación de NATs en Kubernetes Usando HELM


```bash title="1) Agregar repo de Nats"
helm repo add nats https://nats-io.github.io/k8s/helm/charts/
```  

2) Configuración del archivo `install-config-clustering-seed.yaml`


```bash title="3)Instalación de NATS a través de NATS Helm Charts y el archivo configurado en el paso anterior"
helm install -n nats nats nats/nats --create-namespace --values install-config-clustering-seed.yaml
```  


```bash title="4)Actualización del archivo de configuración"
helm upgrade nats nats/nats -n nats --values install-config-clustering-seed.yaml
```  

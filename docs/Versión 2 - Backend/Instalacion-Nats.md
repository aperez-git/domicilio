---
sidebar_position: 4
---

# Instalación de NATS    

NATS (Neural Autonomic Transport System, Sistema de transporte autónomo neuronal) es un sistema de mensajería de código abierto que permite el intercambio de datos entre aplicaciones y servicios, segmentado en forma de mensajes.

Como se indicó en la [Introducción](intro.md), el sistema Domicilio tiene en los microservicios una de sus bases de desarrollo, específicamente:  
- API Domicilio  
- Distribuidor  
- Queue Resolver  

Dado que son los responsables de hacer que los pedidos realizados por los clientes lleguen a su destino final, es necesario que el intercambio de datos entre ellos se realice en tiempo real, de manera segura, lo cual se puede obtener a través de NATS, implementando el envío y recepción de mensajes:  

![App-Domicilio-NATS](/img/App-Domicilio-NATS.png)  

Existen varias alternativas para instalar NATS:  
- Docker  
- Kubernetes  
- Package Manager  
- Release Zip  
- Development Build  


# Instalación de NATS en Kubernetes Usando HELM


```bash title="1) Agregar repo de NATS"
helm repo add nats https://nats-io.github.io/k8s/helm/charts/
```  
---  

```bash title="2) Configuración del archivo: "
   `install-config-clustering-seed.yaml`
```  
---  

```bash title="3)Instalación de NATS a través de NATS Helm Charts y el archivo configurado en el paso anterior"
helm install -n nats nats nats/nats --create-namespace --values install-config-clustering-seed.yaml
```  
---  

```bash title="4)Actualización del archivo de configuración"
helm upgrade nats nats/nats -n nats --values install-config-clustering-seed.yaml
```  

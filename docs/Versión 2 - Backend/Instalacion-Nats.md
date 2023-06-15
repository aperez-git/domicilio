---
sidebar_position: 4
---

# Instalación de NATS    

NATS (Neural Autonomic Transport System, Sistema neuronal autónomo de transporte) es un sistema de mensajería de código abierto que permite el intercambio de datos entre aplicaciones y servicios, segmentado en forma de mensajes.

Como se indicó en la [Introducción](intro.md), el sistema Domicilio tiene en los microservicios una de sus bases de desarrollo, específicamente:  
- API Domicilio  
- Distribuidor  
- Queue Resolver  

Dado que estos microservicios son los responsables de hacer que los pedidos realizados por los clientes lleguen a su destino final, es necesario que el intercambio de datos entre ellos se realice en tiempo real, de manera segura, lo cual se puede obtener a través de NATS, implementando el envío y recepción de mensajes, como se muestra a continuación:  

![App-Domicilio-NATS](/img/App-Domicilio-NATS.png)  

Aquí, se agrega una capa de mensajeria para la comunicación entre microservicios, utilizando el esquema Publicador-Suscriptor (Pub/Sub, Publisher/Subscriber).  Esto requiere configurar un nodo como Publicador y otro como Suscriptor.

Se puede considerar, como ejemplo, la actualización de los datos de un local. Esa solicitud va a un microservicio específico, quedando pendiente el envío de esa información a los microservicios que también lo pudieran necesitar. Esta actualización se lleva a cabo utilizando NATS como cluster y el microservicio publicador será el que emita el mensaje y los microservicios subscriptores serán los que reciban los mensajes.  

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


```bash title="2) Configuración del archivo: "
   `install-config-clustering-seed.yaml`
```  


```bash title="3)Instalación de NATS a través de NATS Helm Charts y el archivo configurado en el paso anterior"
helm install -n nats nats nats/nats --create-namespace --values install-config-clustering-seed.yaml
```  


```bash title="4)Actualización del archivo de configuración"
helm upgrade nats nats/nats -n nats --values install-config-clustering-seed.yaml
```  

---
sidebar_position: 1
---

# Dashboard - APP Domicilio

La imagen muestra la parte superior del dashboard:

![Front-end-Dashboard](/img/Domicilio-Frontend-Dashboard-Parte-superior.png)

En la misma, se pueden visualizar:
## Resolvers

:::note Resolvers
Muestran los pedidos inyectados en las tiendas o restaurantes.  
- En forma general  
- Distribuido por nube: 
  - AWS 
  - AZURE
  - GCLOUD 
:::

## Historial

:::note Historial
Permite mostrar los pedidos almacenados, distribuidos en las siguientes categorías:  
- _Pedidos procesados_: Pedidos que fueron procesados en la tienda correctamente
- _Pedidos no inyectados_: Pedidos que no fueron procesados por algun motivo
- _Pedidos solucionados_: Pedidos que tuvieron una eventualidad, pero que fueron solventados
- _Payload inválidos_: Payload que no cumplen con las validaciones necesarias

La historia de pedidos almacenados puede ser consultada, aplicando uno de los siguientes criterios:  
- `Hoy` 
- `7 días` 
- `Mensual`  
:::

## Últimos pedidos

:::note Últimos pedidos
Permite visualizar, por pedido, los siguientes datos: 
- `Código app` 
- `Restaurante`	
- `Fecha`	
- `Tipo de Pedido`	
- `Cloud`	
- `Estado`
:::  


La imagen muestra la parte inferior del dashboard:

![Front-end-Dashboard-inferior](/img/Domicilio-Frontend-Dashboard-Parte-inferior.png)

En la sección `_Últimos pedidos_`, se puede consultar, por pedido, el payload y la línea de tiempo:  

#### Ejemplo de payload
```
{  
  "cabecera": [  
    {
      "codigoApp": "90000000011-1010101",
      "medio": "APP",
      "dispositivo": "APP",
      "codRestaurante": 2,
      "fechaPedido": "20220929",
      "telefonoCliente": "+5930962981079",
      "identificacionCliente": "1233445566789",
      "consumidorFinal": false,
      "nombresCliente": "Jhon Doe - Prueba No Despachar",
      "direccionCliente": "San Jose de Moran",
      "emailCliente": "test@gmail.com",
      "calle1Domicilio": "calle de los Geranios - Prueba No Despachar",
      "calle2Domicilio": "con Carlos Mantilla",
      "observacionesDomicilio": "Conjunto Santa Catalina - Prueba No Despachar",
      "numDirecciondomicilio": "-",
      "codZipCode": "170204",
      "tipoInmueble": 1,
      "totalFactura": 8380,
      "observacionesPedido": "-",
      "latitud": "-0.23395",
      "longitud": "-78.43358"
    }
  ],
  "detalle": [
    {
      "codigoApp": "90000000011-1010101",
      "detalleApp": "ABZ00007-009",
      "codPlu": 7,
      "cantidad": 1,
      "precioBruto": 3590
    },
    {
      "codigoApp": "90000000011-1010101",
      "detalleApp": "ABZ00008-010",
      "codPlu": 16,
      "cantidad": 1,
      "precioBruto": 4790
    }
  ],
  "modificadores": [],
  "formasPago": [
    {
      "codigoApp": "90000000011-1010101",
      "codformaPago": 4,
      "totalPagar": 8380,
      "billete": 0
    }
  ],
  "calback_url": "http://localhost:81"
}
```

#### Ejemplo de línea de tiempo
![Timeline-pedido](/img/Timeline-pedido.png)

---
sidebar_position: 5
---  

# Payload Normal - Sin Canje ni Acumulación  


# PAYLOAD DE INYECCION NORMAL  

En el Payload que se muestra a continuación, se encuentran los datos para una transacción que no tiene  canje ni acumulación, donde en el mismo especifica dentro del apartado PRINCIPAL:  

```jsx  
    "accumulatePoints": false,
    "redeemPoints": false,
```  

Estos datos especifican que el Payload contiene inactivo, tanto el _CANJE_, como la _ACUMULACION_

```jsx title="Payload Normal (Sin Canje ni Acumulación de puntos)"
{
    "orderId": "0000001059-010103",
    "accountId": 1,
    "account": "KFC",
    "source": null,
    "platform": "android",
    "createdAt": "2023-06-12 02:32:06",
    "channelId": 3,
    "channelName": "Pickup",
    "selectedShippingMethod": "pickup",
    "accumulatePoints": false,
    "redeemPoints": false,
    "stock": false,
    "discount": false,
    "orderComment": "",
    "client": {
      "uid": "JQ4hON5GysUybZemKMsm0p8wzr82",
      "name": "Nicolas",
      "lastName": "Ontaneda",
      "phone": "0996001008",
      "email": "sdsnicolas2@gmail.com",
      "govIdType": "CI",
      "govIdNumber": "1728925445",
      "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3",
      "billingInformation": {
        "businessName": "Nicolas Ontaneda",
        "govIdType": "CI",
        "govIdNumber": "1728925445",
        "phone": "0996001008",
        "email": "sdsnicolas2@gmail.com",
        "address": "XH93+2R",
        "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3"
      },
      "additionalInfo": {
        "birthdate": "",
        "gender": ""
      }
    },
    "store": {
      "id": 72,
      "name": "EL INCA",
      "code": "K024",
      "vendorId": 10,
      "vendorName": "KENTUCKY FRIED CHICKEN",
      "latitude": -0.159733,
      "longitude": -78.48286
    },
    "order": {
      "products": [
        {
          "productId": 36398,
          "product": "BIG BOX VARIEDAD HELADO",
          "quantity": 1,
          "productComment": "",
          "price": {
            "unitPrice": {
              "currencyCode": "USD",
              "subtotalWithoutTaxes": 6.24,
              "discountPercentage": 0,
              "discountsValue": null,
              "subtotalIncludeDiscounts": 6.24,
              "taxesPercentage": 12,
              "taxValue": 0,
              "total": 6.99,
              "suggestedPrice": 6.99
            },
            "totalPrice": {
              "currencyCode": "USD",
              "subtotalWithoutTaxes": 6.24,
              "discountPercentage": null,
              "discountsValue": null,
              "subtotalIncludeDiscounts": 6.24,
              "taxesPercentage": 12,
              "taxValue": 0.75,
              "total": 6.99,
              "suggestedPrice": 6.99
            }
          },
          "modifierGroups": [],
          "additionalInfo": {
            "strategy": " ",
            "relatedProductId": " ",
            "redeemed": false,
            "sort": 1,
            "referenceUnitPrice": {
              "currencyCode": "USD",
              "subtotalWithoutTaxes": 6.24,
              "discountPercentage": 0,
              "discountsValue": null,
              "subtotalIncludeDiscounts": 6.24,
              "taxesPercentage": 12,
              "taxValue": 0,
              "total": 6.99,
              "suggestedPrice": 6.99
            },
            "referenceTotalPrice": {
              "currencyCode": "USD",
              "subtotalWithoutTaxes": 6.24,
              "discountPercentage": 0,
              "discountsValue": 0,
              "subtotalIncludeDiscounts": 6.24,
              "taxesPercentage": 12,
              "taxValue": 0,
              "total": 6.99,
              "suggestedPrice": 6.99
            }
          }
        }
      ],
      "stock": [
        {
          "productId": 36398,
          "stock": 0
        }
      ]
    },
    "shippingMethod": {
      "delivery": {
        "deliveryDate": "2023-06-12 02:32:06",
        "latitude": "",
        "longitude": "",
        "country": "ECUADOR",
        "city": "QUITO",
        "mainStreet": "PICHINCHA / QUITO / AV. AMAZONAS 6121 Y EL INCA",
        "secondaryStreet": "",
        "reference": "",
        "propertyId": 1,
        "observationsAddress": "Sin observaciones",
        "numberContactAddress": "0996001008",
        "zipCode": "K138.70.6",
        "nickName": "",
        "externalId": ""
      },
      "pickup": {
        "pickupDate": "2023-06-12 14:33:06",
        "prepDate": "2023-06-12 14:33:06",
        "prepTimeUnit": "minute",
        "prepTime": 1,
        "propertyId": 1,
        "carryOutOptions": "PickUp-LLevar"
      }
    },
    "payments": {
      "totals": [
        {
          "currencyCode": "USD",
          "subtotalWithoutTaxes": 6.24,
          "discountPercentage": 0,
          "discountsValue": 0,
          "subtotalIncludeDiscounts": 6.24,
          "taxesPercentage": 12,
          "taxValue": 0.75,
          "total": 6.99
        },
        {
          "currencyCode": "Points",
          "subtotalWithoutTaxes": 0,
          "discountPercentage": 0,
          "discountsValue": 0,
          "subtotalIncludeDiscounts": 0,
          "taxesPercentage": 12,
          "taxValue": 0,
          "total": 0
        }
      ],
      "shippingCost": [
        {
          "quantity": 0,
          "productId": 0,
          "currencyCode": "USD",
          "subtotalWithoutTaxes": 0,
          "discountPercentage": 0,
          "discountsValue": 0,
          "subtotalIncludeDiscounts": 0,
          "taxesPercentage": null,
          "taxValue": 0,
          "total": 0
        }
      ],
      "extraCharges": [
        {
          "quantity": null,
          "productId": null,
          "description": null,
          "currencyCode": null,
          "subtotalWithoutTaxes": 0,
          "discountPercentage": 0,
          "discountsValue": 0,
          "subtotalIncludeDiscounts": 0,
          "taxesPercentage": 0,
          "taxValue": 0,
          "total": 0
        }
      ],
      "taxes": [
        {
          "name": "IVA 12%",
          "currencyCode": "USD",
          "subtotalWithoutTaxes": 6.24,
          "percentage": 12,
          "total": 0.75
        }
      ],
      "discounts": [],
      "paymentMethods": [
        {
          "processor": "CASH",
          "currencyCode": "USD",
          "paymentMethodCode": "DDC519EE-62EC-E511-80C5-0050568602D0",
          "transactionType": "debit",
          "transactionId": "",
          "transactionStatus": "PENDING",
          "tid": null,
          "mid": null,
          "authorizationCode": "",
          "voucher": null,
          "referenceNumber": null,
          "exactPayment": true,
          "customerCashAmount": "0.0000",
          "totalBill": 6.99,
          "acquirer": {
            "code": " ",
            "name": " "
          },
          "card": {
            "mask": "",
            "bin": "",
            "lastFourDigits": "",
            "brand": "",
            "externalCardBrandId": "DDC519EE-62EC-E511-80C5-0050568602D0",
            "holder": " ",
            "cardCountry": " "
          },
          "transactionDate": {
            "date": "2023-06-12 07:32:07",
            "timeZoneType": 3,
            "timeZoneName": "America/Guayaquil"
          }
        }
      ]
    },
    "marketing": {
      "loyalty": {
        "accumulation": {
          "storeCost": 0,
          "marketingCost": 0,
          "totalPoints": 0
        },
        "redemption": {
          "storeCost": 0,
          "marketingCost": 0,
          "totalPoints": 0
        },
        "accountBalancePoints": 0
      }
    },
    "additionalInfo": {
      "kiosk": {
        "ip": ""
      }
    }
  }
```
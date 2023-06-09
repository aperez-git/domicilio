---
sidebar_position: 3
---  

# Payload - Acumulación  

:::info ACUMULACION:   
Proceso por el cual los clientes a través de sus compras acumulan puntos ($1 = 2pts)
:::  

# PAYLOAD DE INYECCION MODALIDAD "ACUMULACION"  

En el Payload que se muestra a continuación, se encuentran los datos para una transacción de canje, donde en el mismo especifica, dentro del apartado PRINCIPAL: `"accumulatePoints": true`, que indica si este Payload tiene acumulación de puntos.


```jsx title="PAYLOAD DE INYECCION MODALIDAD 'ACUMULACION'"
{
    "orderId": "0000001712-020203",
    "accountId": 2,
    "account": "Amigo Juan Valdez",
    "source": null,
    "platform": "android",
    "createdAt": "2023-06-15 03:41:26",
    "channelId": 3,
    "channelName": "Pickup",
    "selectedShippingMethod": "pickup",
    "accumulatePoints": true,
    "redeemPoints": false,
    "stock": false,
    "discount": false,
    "orderComment": "",
    "client": {
        "uid": "JH3V1ZPhz9U613iWetB9FbYpuxy2",
        "name": "Ronny",
        "lastName": "Aragones",
        "phone": "0982076412",
        "email": "raularagones18@gmail.com",
        "govIdType": "CI",
        "govIdNumber": "0931285431",
        "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3",
        "billingInformation": {
            "businessName": "Ronny Aragones",
            "govIdType": "CI",
            "govIdNumber": "0931285431",
            "phone": "+593931285431",
            "email": "raul.952009@hotmail.com",
            "address": "pruebas",
            "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3"
        },
        "additionalInfo": {
            "birthdate": "",
            "gender": ""
        }
    },
    "store": {
        "id": 1096,
        "name": "MALL DEL RIO CUENCA",
        "code": "V054",
        "vendorId": 12,
        "vendorName": "JUAN VALDEZ",
        "latitude": -2.9189477,
        "longitude": -79.0167193
    },
    "order": {
        "products": [
            {
                "productId": 54661,
                "product": "Nuevo  Nevado Tango Mediano",
                "quantity": 8,
                "productComment": "",
                "price": {
                    "unitPrice": {
                        "currencyCode": "USD",
                        "subtotalWithoutTaxes": 3.56,
                        "discountPercentage": 0,
                        "discountsValue": null,
                        "subtotalIncludeDiscounts": 3.56,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 3.99,
                        "suggestedPrice": 3.99
                    },
                    "totalPrice": {
                        "currencyCode": "USD",
                        "subtotalWithoutTaxes": 28.5,
                        "discountPercentage": null,
                        "discountsValue": null,
                        "subtotalIncludeDiscounts": 28.5,
                        "taxesPercentage": 12,
                        "taxValue": 3.42,
                        "total": 31.92,
                        "suggestedPrice": 31.92
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
                        "subtotalWithoutTaxes": 3.56,
                        "discountPercentage": 0,
                        "discountsValue": null,
                        "subtotalIncludeDiscounts": 3.56,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 3.99,
                        "suggestedPrice": 3.99
                    },
                    "referenceTotalPrice": {
                        "currencyCode": "USD",
                        "subtotalWithoutTaxes": 28.5,
                        "discountPercentage": 0,
                        "discountsValue": 0,
                        "subtotalIncludeDiscounts": 28.5,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 31.92,
                        "suggestedPrice": 31.92
                    }
                }
            }
        ],
        "stock": [
            {
                "productId": 54661,
                "stock": 0
            }
        ]
    },
    "shippingMethod": {
        "delivery": {
            "deliveryDate": "2023-06-15 03:41:26",
            "latitude": "",
            "longitude": "",
            "country": "ECUADOR",
            "city": "CUENCA",
            "mainStreet": "AZUAY / CUENCA / YANUNCAY / AV FELIPE II SN Y VIA CUENCA AZOGUES / MALL DEL RIO ISLA",
            "secondaryStreet": "",
            "reference": "",
            "propertyId": 1,
            "observationsAddress": "Sin observaciones",
            "numberContactAddress": "+593931285431",
            "zipCode": "K061.194.1",
            "nickName": "",
            "externalId": ""
        },
        "pickup": {
            "pickupDate": "2023-06-15 15:51:26",
            "prepDate": "2023-06-15 15:51:26",
            "prepTimeUnit": "minute",
            "prepTime": 10,
            "propertyId": 1,
            "carryOutOptions": "PickUp-LLevar"
        }
    },
    "payments": {
        "totals": [
            {
                "currencyCode": "USD",
                "subtotalWithoutTaxes": 28.5,
                "discountPercentage": 0,
                "discountsValue": 0,
                "subtotalIncludeDiscounts": 28.5,
                "taxesPercentage": 12,
                "taxValue": 3.42,
                "total": 31.92
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
                "subtotalWithoutTaxes": 28.5,
                "percentage": 12,
                "total": 3.42
            }
        ],
        "discounts": [],
        "paymentMethods": [
            {
                "processor": "Kushki",
                "currencyCode": "USD",
                "paymentMethodCode": "1585",
                "transactionType": "debit",
                "transactionId": "",
                "transactionStatus": "APPROVED",
                "tid": null,
                "mid": null,
                "authorizationCode": "",
                "voucher": null,
                "referenceNumber": null,
                "exactPayment": true,
                "customerCashAmount": "0.0000",
                "totalBill": 31.92,
                "acquirer": {
                    "code": " ",
                    "name": " "
                },
                "card": {
                    "mask": "545195XXXXXXX5480",
                    "bin": "545195",
                    "lastFourDigits": "5480",
                    "brand": "",
                    "externalCardBrandId": "96F4822D-9D09-EC11-80F5-000D3A019254",
                    "holder": " ",
                    "cardCountry": " "
                },
                "transactionDate": {
                    "date": "2023-06-15 08:41:26",
                    "timeZoneType": 3,
                    "timeZoneName": "America/Guayaquil"
                }
            }
        ]
    },
    "marketing": {
        "loyalty": {
            "accumulation": {
                "storeCost": 127.68,
                "marketingCost": 0,
                "totalPoints": 127.68
            },
            "redemption": {
                "storeCost": 0,
                "marketingCost": 0,
                "totalPoints": 0
            },
            "accountBalancePoints": 139.76000000000002
        }
    },
    "additionalInfo": {
        "kiosk": {
            "ip": ""
        }
    }
}
```
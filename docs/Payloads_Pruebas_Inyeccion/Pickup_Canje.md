# Payload - Pickup Canje  

```jsx title="Payload para Pickup Canje de puntos"
{
    "orderId": "0000001680-020203",
    "accountId": 2,
    "account": "Amigo Juan Valdez",
    "source": null,
    "platform": "android",
    "createdAt": "2023-06-08 11:50:08",
    "channelId": 3,
    "channelName": "Pickup",
    "selectedShippingMethod": "pickup",
    "accumulatePoints": false,
    "redeemPoints": true,
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
                "quantity": 1,
                "productComment": "",
                "price": {
                    "unitPrice": {
                        "currencyCode": "Points",
                        "subtotalWithoutTaxes": 142.86,
                        "discountPercentage": 0,
                        "discountsValue": null,
                        "subtotalIncludeDiscounts": 142.86,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 160,
                        "suggestedPrice": 160
                    },
                    "totalPrice": {
                        "currencyCode": "Points",
                        "subtotalWithoutTaxes": 142.86,
                        "discountPercentage": null,
                        "discountsValue": null,
                        "subtotalIncludeDiscounts": 142.86,
                        "taxesPercentage": 12,
                        "taxValue": 17.14,
                        "total": 160,
                        "suggestedPrice": 160
                    }
                },
                "modifierGroups": [],
                "additionalInfo": {
                    "strategy": " ",
                    "relatedProductId": " ",
                    "redeemed": true,
                    "sort": 1,
                    "referenceUnitPrice": {
                        "currencyCode": "USD",
                        "subtotalWithoutTaxes": 3.56,
                        "discountPercentage": 0,
                        "discountsValue": 0,
                        "subtotalIncludeDiscounts": 3.56,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 3.99,
                        "suggestedPrice": 3.99
                    },
                    "referenceTotalPrice": {
                        "currencyCode": "USD",
                        "subtotalWithoutTaxes": 3.56,
                        "discountPercentage": 0,
                        "discountsValue": 0,
                        "subtotalIncludeDiscounts": 3.56,
                        "taxesPercentage": 12,
                        "taxValue": 0,
                        "total": 3.99,
                        "suggestedPrice": 3.99
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
            "deliveryDate": "2023-06-08 11:50:08",
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
            "pickupDate": "2023-06-08 12:00:08",
            "prepDate": "2023-06-08 12:00:08",
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
                "subtotalWithoutTaxes": 0,
                "discountPercentage": 0,
                "discountsValue": 0,
                "subtotalIncludeDiscounts": 0,
                "taxesPercentage": 12,
                "taxValue": 0,
                "total": 0
            },
            {
                "currencyCode": "Points",
                "subtotalWithoutTaxes": 142.86,
                "discountPercentage": 0,
                "discountsValue": 0,
                "subtotalIncludeDiscounts": 142.86,
                "taxesPercentage": 12,
                "taxValue": 17.14,
                "total": 160
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
                "subtotalWithoutTaxes": 0,
                "percentage": 12,
                "total": 17.14
            }
        ],
        "discounts": [],
        "paymentMethods": [
            {
                "processor": "Points",
                "currencyCode": "USD",
                "paymentMethodCode": 18,
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
                "totalBill": 160,
                "acquirer": {
                    "code": " ",
                    "name": " "
                },
                "card": {
                    "mask": "",
                    "bin": "",
                    "lastFourDigits": "",
                    "brand": "",
                    "externalCardBrandId": "44827F19-EB3C-E811-80D3-000D3A019254",
                    "holder": " ",
                    "cardCountry": " "
                },
                "transactionDate": {
                    "date": "2023-06-08 04:50:09",
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
                "storeCost": 3.56,
                "marketingCost": 0,
                "totalPoints": 160
            },
            "accountBalancePoints": 43.68
        }
    },
    "additionalInfo": {
        "kiosk": {
            "ip": ""
        }
    }
}
```
"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[4082],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>y});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=a.createContext({}),u=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=u(n.components);return a.createElement(i.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=u(t),m=o,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(y,c(c({ref:e},l),{},{components:t})):a.createElement(y,c({ref:e},l))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,c=new Array(r);c[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[d]="string"==typeof n?n:o,c[1]=s;for(var u=2;u<r;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2345:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:1},c="Payload - Canje",s={unversionedId:"Payloads_Pruebas_Inyeccion/Payload_Canje",id:"Payloads_Pruebas_Inyeccion/Payload_Canje",title:"Payload - Canje",description:"Proceso en el cual el cliente puede canjear sus puntos totales acumulados por productos que est\xe9n dentro del alcance de puntos.",source:"@site/docs/Payloads_Pruebas_Inyeccion/Payload_Canje.md",sourceDirName:"Payloads_Pruebas_Inyeccion",slug:"/Payloads_Pruebas_Inyeccion/Payload_Canje",permalink:"/domicilio/docs/Payloads_Pruebas_Inyeccion/Payload_Canje",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Payloads_Pruebas_Inyeccion/Payload_Canje.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Payloads para Pruebas de Inyecci\xf3n",permalink:"/domicilio/docs/category/payloads-para-pruebas-de-inyecci\xf3n"},next:{title:"Payload - Canje y Acumulaci\xf3n",permalink:"/domicilio/docs/Payloads_Pruebas_Inyeccion/Canje_Acumulacion"}},i={},u=[],l={toc:u},d="wrapper";function p(n){let{components:e,...t}=n;return(0,o.kt)(d,(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"payload---canje"},"Payload - Canje"),(0,o.kt)("admonition",{title:"CANJE: ",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Proceso en el cual el cliente puede canjear sus puntos totales acumulados por productos que est\xe9n dentro del alcance de puntos. ")),(0,o.kt)("h1",{id:"payload-de-inyeccion-modalidad-canje"},'PAYLOAD DE INYECCION MODALIDAD "CANJE"'),(0,o.kt)("p",null,"En el Payload, que se muestra a continuaci\xf3n, se encuentran los datos para una transacci\xf3n de canje, donde en el mismo especifica, dentro del apartado PRINCIPAL: ",(0,o.kt)("inlineCode",{parentName:"p"},'"redeemPoints": true'),", que indica si este Payload tiene canje/redenci\xf3n de puntos. Adem\xe1s, se complementa dentro del apartado ",(0,o.kt)("strong",{parentName:"p"},"additionalInfo")," con el campo: ",(0,o.kt)("inlineCode",{parentName:"p"},'"redeemed": true'),", que especifica ",(0,o.kt)("em",{parentName:"p"},"TRUE"),", para saber cu\xe1l(es) producto(s) fue o fueron CANJEADOS. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Payload para Canje de puntos"',title:'"Payload',para:!0,Canje:!0,de:!0,'puntos"':!0},'{\n    "orderId": "0000001680-020203",\n    "accountId": 2,\n    "account": "Amigo Juan Valdez",\n    "source": null,\n    "platform": "android",\n    "createdAt": "2023-06-08 11:50:08",\n    "channelId": 3,\n    "channelName": "Pickup",\n    "selectedShippingMethod": "pickup",\n    "accumulatePoints": false,\n    "redeemPoints": true,\n    "stock": false,\n    "discount": false,\n    "orderComment": "",\n    "client": {\n        "uid": "JH3V1ZPhz9U613iWetB9FbYpuxy2",\n        "name": "Ronny",\n        "lastName": "Aragones",\n        "phone": "0982076412",\n        "email": "raularagones18@gmail.com",\n        "govIdType": "CI",\n        "govIdNumber": "0931285431",\n        "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3",\n        "billingInformation": {\n            "businessName": "Ronny Aragones",\n            "govIdType": "CI",\n            "govIdNumber": "0931285431",\n            "phone": "+593931285431",\n            "email": "raul.952009@hotmail.com",\n            "address": "pruebas",\n            "externalId": "030B9503-85CF-E511-80C6-000D3A3261F3"\n        },\n        "additionalInfo": {\n            "birthdate": "",\n            "gender": ""\n        }\n    },\n    "store": {\n        "id": 1096,\n        "name": "MALL DEL RIO CUENCA",\n        "code": "V054",\n        "vendorId": 12,\n        "vendorName": "JUAN VALDEZ",\n        "latitude": -2.9189477,\n        "longitude": -79.0167193\n    },\n    "order": {\n        "products": [\n            {\n                "productId": 54661,\n                "product": "Nuevo  Nevado Tango Mediano",\n                "quantity": 1,\n                "productComment": "",\n                "price": {\n                    "unitPrice": {\n                        "currencyCode": "Points",\n                        "subtotalWithoutTaxes": 142.86,\n                        "discountPercentage": 0,\n                        "discountsValue": null,\n                        "subtotalIncludeDiscounts": 142.86,\n                        "taxesPercentage": 12,\n                        "taxValue": 0,\n                        "total": 160,\n                        "suggestedPrice": 160\n                    },\n                    "totalPrice": {\n                        "currencyCode": "Points",\n                        "subtotalWithoutTaxes": 142.86,\n                        "discountPercentage": null,\n                        "discountsValue": null,\n                        "subtotalIncludeDiscounts": 142.86,\n                        "taxesPercentage": 12,\n                        "taxValue": 17.14,\n                        "total": 160,\n                        "suggestedPrice": 160\n                    }\n                },\n                "modifierGroups": [],\n                "additionalInfo": {\n                    "strategy": " ",\n                    "relatedProductId": " ",\n                    "redeemed": true,\n                    "sort": 1,\n                    "referenceUnitPrice": {\n                        "currencyCode": "USD",\n                        "subtotalWithoutTaxes": 3.56,\n                        "discountPercentage": 0,\n                        "discountsValue": 0,\n                        "subtotalIncludeDiscounts": 3.56,\n                        "taxesPercentage": 12,\n                        "taxValue": 0,\n                        "total": 3.99,\n                        "suggestedPrice": 3.99\n                    },\n                    "referenceTotalPrice": {\n                        "currencyCode": "USD",\n                        "subtotalWithoutTaxes": 3.56,\n                        "discountPercentage": 0,\n                        "discountsValue": 0,\n                        "subtotalIncludeDiscounts": 3.56,\n                        "taxesPercentage": 12,\n                        "taxValue": 0,\n                        "total": 3.99,\n                        "suggestedPrice": 3.99\n                    }\n                }\n            }\n        ],\n        "stock": [\n            {\n                "productId": 54661,\n                "stock": 0\n            }\n        ]\n    },\n    "shippingMethod": {\n        "delivery": {\n            "deliveryDate": "2023-06-08 11:50:08",\n            "latitude": "",\n            "longitude": "",\n            "country": "ECUADOR",\n            "city": "CUENCA",\n            "mainStreet": "AZUAY / CUENCA / YANUNCAY / AV FELIPE II SN Y VIA CUENCA AZOGUES / MALL DEL RIO ISLA",\n            "secondaryStreet": "",\n            "reference": "",\n            "propertyId": 1,\n            "observationsAddress": "Sin observaciones",\n            "numberContactAddress": "+593931285431",\n            "zipCode": "K061.194.1",\n            "nickName": "",\n            "externalId": ""\n        },\n        "pickup": {\n            "pickupDate": "2023-06-08 12:00:08",\n            "prepDate": "2023-06-08 12:00:08",\n            "prepTimeUnit": "minute",\n            "prepTime": 10,\n            "propertyId": 1,\n            "carryOutOptions": "PickUp-LLevar"\n        }\n    },\n    "payments": {\n        "totals": [\n            {\n                "currencyCode": "USD",\n                "subtotalWithoutTaxes": 0,\n                "discountPercentage": 0,\n                "discountsValue": 0,\n                "subtotalIncludeDiscounts": 0,\n                "taxesPercentage": 12,\n                "taxValue": 0,\n                "total": 0\n            },\n            {\n                "currencyCode": "Points",\n                "subtotalWithoutTaxes": 142.86,\n                "discountPercentage": 0,\n                "discountsValue": 0,\n                "subtotalIncludeDiscounts": 142.86,\n                "taxesPercentage": 12,\n                "taxValue": 17.14,\n                "total": 160\n            }\n        ],\n        "shippingCost": [\n            {\n                "quantity": 0,\n                "productId": 0,\n                "currencyCode": "USD",\n                "subtotalWithoutTaxes": 0,\n                "discountPercentage": 0,\n                "discountsValue": 0,\n                "subtotalIncludeDiscounts": 0,\n                "taxesPercentage": null,\n                "taxValue": 0,\n                "total": 0\n            }\n        ],\n        "extraCharges": [\n            {\n                "quantity": null,\n                "productId": null,\n                "description": null,\n                "currencyCode": null,\n                "subtotalWithoutTaxes": 0,\n                "discountPercentage": 0,\n                "discountsValue": 0,\n                "subtotalIncludeDiscounts": 0,\n                "taxesPercentage": 0,\n                "taxValue": 0,\n                "total": 0\n            }\n        ],\n        "taxes": [\n            {\n                "name": "IVA 12%",\n                "currencyCode": "USD",\n                "subtotalWithoutTaxes": 0,\n                "percentage": 12,\n                "total": 17.14\n            }\n        ],\n        "discounts": [],\n        "paymentMethods": [\n            {\n                "processor": "Points",\n                "currencyCode": "USD",\n                "paymentMethodCode": 18,\n                "transactionType": "debit",\n                "transactionId": "",\n                "transactionStatus": "PENDING",\n                "tid": null,\n                "mid": null,\n                "authorizationCode": "",\n                "voucher": null,\n                "referenceNumber": null,\n                "exactPayment": true,\n                "customerCashAmount": "0.0000",\n                "totalBill": 160,\n                "acquirer": {\n                    "code": " ",\n                    "name": " "\n                },\n                "card": {\n                    "mask": "",\n                    "bin": "",\n                    "lastFourDigits": "",\n                    "brand": "",\n                    "externalCardBrandId": "44827F19-EB3C-E811-80D3-000D3A019254",\n                    "holder": " ",\n                    "cardCountry": " "\n                },\n                "transactionDate": {\n                    "date": "2023-06-08 04:50:09",\n                    "timeZoneType": 3,\n                    "timeZoneName": "America/Guayaquil"\n                }\n            }\n        ]\n    },\n    "marketing": {\n        "loyalty": {\n            "accumulation": {\n                "storeCost": 0,\n                "marketingCost": 0,\n                "totalPoints": 0\n            },\n            "redemption": {\n                "storeCost": 3.56,\n                "marketingCost": 0,\n                "totalPoints": 160\n            },\n            "accountBalancePoints": 43.68\n        }\n    },\n    "additionalInfo": {\n        "kiosk": {\n            "ip": ""\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);
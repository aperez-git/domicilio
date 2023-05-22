"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[8417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,f=u["".concat(d,".").concat(b)]||u[b]||p[b]||o;return t?r.createElement(f,s(s({ref:n},i),{},{components:t})):r.createElement(f,s({ref:n},i))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=b;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:6},s="Panel de Control de Kubernetes",l={unversionedId:"Versi\xf3n 2 - Backend/Verificacion-Kubernetes",id:"Versi\xf3n 2 - Backend/Verificacion-Kubernetes",title:"Panel de Control de Kubernetes",description:"El panel de control de Kubernetes debe ser desplegado (deployed), antes de ser usado, para lo cual se abre una sesi\xf3n de la ventana de comandos (CMD) o PowerShell y se ejecuta el siguiente comando:",source:"@site/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes.md",sourceDirName:"Versi\xf3n 2 - Backend",slug:"/Versi\xf3n 2 - Backend/Verificacion-Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Subir las im\xe1genes a Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Subir-imagenes-Kubernetes"},next:{title:"Versi\xf3n 2 - Frontend",permalink:"/domicilio/docs/category/versi\xf3n-2---frontend"}},d={},c=[],i={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,a.kt)(u,(0,r.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"panel-de-control-de-kubernetes"},"Panel de Control de Kubernetes"),(0,a.kt)("h1",{id:"verificaci\xf3n-en-kubernetes"},"Verificaci\xf3n en Kubernetes"),(0,a.kt)("p",null,"El panel de control de Kubernetes debe ser desplegado (deployed), antes de ser usado, para lo cual se abre una sesi\xf3n de la ventana de comandos (CMD) o PowerShell y se ejecuta el siguiente comando:"),(0,a.kt)("p",null,"kubectl apply -f ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml"},"https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml")),(0,a.kt)("p",null,"Habilitar el acceso al panel de control de Kubernetes (Dashboard), utilizando la herramienta de l\xednea de comandos kubectl, ejecutando el siguiente comando:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Acceso al panel de control",src:t(9933).Z,width:"388",height:"60"}),(0,a.kt)("br",{parentName:"p"}),"\n","Obtener un token de portador (Bearer Token) para ingresar al panel de control, ejecutando el siguiente comando:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"kubectl -n kubernetes-dashboard create token admin-user")),(0,a.kt)("p",null,"Deber\xeda generar un resultado como el siguiente:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Token Dashboard de Kubernetes",src:t(6570).Z,width:"1047",height:"235"})),(0,a.kt)("p",null,"En el navegador web, mostrar el panel de control a trav\xe9s del comando:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/")),(0,a.kt)("p",null,"El token generado anteriormente, se copia y pega en la l\xednea:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard de Kubernetes",src:t(6389).Z,width:"1317",height:"504"})),(0,a.kt)("p",null,"Luego, se selecciona el bot\xf3n ",(0,a.kt)("strong",{parentName:"p"},"Iniciar sesi\xf3n")),(0,a.kt)("p",null,"Debe aparecer la pantalla de bienvenida a Kubernetes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard de Kubernetes",src:t(9362).Z,width:"1366",height:"768"})),(0,a.kt)("p",null,"En el \xe1rea correspondiente a los espacios de nombres (namespaces), se selecciona app-domicilio, como muestra\nla imagen:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Espacio-de-nombres",src:t(7643).Z,width:"1364",height:"694"})))}p.isMDXComponent=!0},7643:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Espacio-de-nombres-847b202ab45c9435dbc0038671dc3bfa.png"},9362:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Kubernetes-default-ddca7e248ec1ca53d97de4bb6457c782.png"},9933:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},6389:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Panel-de-control-de-Kubernetes-ca099eb3409114279e6fd2a08179de1d.png"},6570:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Token-de-acceso-al-panel-de-Kubernetes-c9604c6d8afc0dd97fb485a71cc70923.png"}}]);
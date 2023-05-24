"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[2200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Instalaci\xf3n de Kong",l={unversionedId:"Versi\xf3n 2 - Backend/Instalacion-Kong",id:"Versi\xf3n 2 - Backend/Instalacion-Kong",title:"Instalaci\xf3n de Kong",description:"La instalaci\xf3n de Kong involucra la ejecuci\xf3n de tres pasos:",source:"@site/docs/Versi\xf3n 2 - Backend/Instalacion-Kong.md",sourceDirName:"Versi\xf3n 2 - Backend",slug:"/Versi\xf3n 2 - Backend/Instalacion-Kong",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Instalacion-Kong",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Versi\xf3n 2 - Backend/Instalacion-Kong.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de Docker y Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Docker"},next:{title:"Repositorio para descarga de la versi\xf3n 2",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Descarga-version"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n-de-kong"},"Instalaci\xf3n de Kong"),(0,r.kt)("admonition",{title:"Importante",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La instalaci\xf3n de Kong involucra la ejecuci\xf3n de tres pasos:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Instalaci\xf3n de Chocolatey"),(0,r.kt)("li",{parentName:"ul"},"Instalaci\xf3n de Helm"),(0,r.kt)("li",{parentName:"ul"},"Instalaci\xf3n de Kong"))),(0,r.kt)("h1",{id:"instalaci\xf3n-de-chocolatey"},"Instalaci\xf3n de Chocolatey"),(0,r.kt)("p",null,"En la p\xe1gina de Chocolatey (",(0,r.kt)("a",{parentName:"p",href:"https://chocolatey.org/install"},"https://chocolatey.org/install"),"), seleccionar el modo individual para instalar."),(0,r.kt)("p",null,"Abrir una sesi\xf3n de PowerShell en modo administrador. "),(0,r.kt)("p",null,"Ejecutar el comando: ",(0,r.kt)("strong",{parentName:"p"},"Get-ExecutionPolicy"),". "),(0,r.kt)("p",null,"Como la respuesta fu\xe9 ",(0,r.kt)("strong",{parentName:"p"},"Restricted"),", hay que ejecutar el comando ",(0,r.kt)("strong",{parentName:"p"},"Set-ExecutionPolicy AllSigned"),". "),(0,r.kt)("p",null,"Instalar el manejador de paquetes, ",(0,r.kt)("strong",{parentName:"p"},"Chocolatey"),". "),(0,r.kt)("p",null,"Ahora, se ejecuta el siguiente comando: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set-ExecutionPolicy Bypass -Scope Process -Force; ","[System.Net.ServicePointManager]","::SecurityProtocol = ","[System.Net.ServicePointManager]","::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('",(0,r.kt)("a",{parentName:"strong",href:"https://community.chocolatey.org/install.ps1'"},"https://community.chocolatey.org/install.ps1'"),"))")," "),(0,r.kt)("p",null,"Despu\xe9s de la instalaci\xf3n, ejecutar el comando ",(0,r.kt)("strong",{parentName:"p"},"choco /?"),", para ver la lista de funciones. "),(0,r.kt)("h1",{id:"instalaci\xf3n-de-helm"},"Instalaci\xf3n de Helm:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"choco install kubernetes-helm")," "),(0,r.kt)("p",null,"Ejecuci\xf3n del comando helm "),(0,r.kt)("p",null,"The Kubernetes package manager... "),(0,r.kt)("h1",{id:"instalaci\xf3n-de-kong-1"},"Instalaci\xf3n de Kong:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add kong https://charts.konghq.com** \n\nhelm repo update** \n\nhelm install kong/kong --generate-name --set ingressController.installCRDs=false**  \n")))}d.isMDXComponent=!0}}]);
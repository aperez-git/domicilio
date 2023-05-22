"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[5963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return a?r.createElement(g,c(c({ref:t},u),{},{components:a})):r.createElement(g,c({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},c=void 0,i={unversionedId:"Tecnolog\xedas/Quarkus",id:"Tecnolog\xedas/Quarkus",title:"Quarkus",description:"Quarkus:",source:"@site/docs/Tecnolog\xedas/Quarkus.md",sourceDirName:"Tecnolog\xedas",slug:"/Tecnolog\xedas/Quarkus",permalink:"/domicilio/docs/Tecnolog\xedas/Quarkus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tecnolog\xedas/Quarkus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Programaci\xf3n Reactiva",permalink:"/domicilio/docs/Tecnolog\xedas/Programaci\xf3n Reactiva"},next:{title:"Vert.x",permalink:"/domicilio/docs/Tecnolog\xedas/Vertx"}},l={},s=[{value:"Quarkus:",id:"quarkus",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"quarkus"},"Quarkus:"),(0,n.kt)("p",null,"Es una ",(0,n.kt)("a",{parentName:"p",href:"https://profile.es/blog/quarkus-que-es/"},"tecnolog\xeda")," que permite ejecutar, de forma eficiente, aplicaciones Java en contenedores ",(0,n.kt)("em",{parentName:"p"},"Kubernetes"),"."),(0,n.kt)("p",null,"La arquitectura tradicional Java est\xe1 basada en una capa intermedia, la llamada ",(0,n.kt)("em",{parentName:"p"},"m\xe1quina virtual (JVM)"),", que hace las veces de mediador entre la aplicaci\xf3n y el sistema operativo. La JVM interpreta el bytecode Java precompilado en un entorno de hardware y sistema operativo concretos, lo que asegura la portabilidad del c\xf3digo fuente Java original."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arquitectura tradicional Java",src:a(6376).Z,width:"276",height:"299"})),(0,n.kt)("p",null,"Actualmente, se ha popularizado otra arquitectura, la ",(0,n.kt)("em",{parentName:"p"},"orientada a contenedores"),", gracias a tecnolog\xedas como ",(0,n.kt)("em",{parentName:"p"},"Docker"),"."),(0,n.kt)("p",null,"En este caso, entre el sistema operativo y las aplicaciones, tambi\xe9n se establece una capa virtual que logra la independencia respecto a la m\xe1quina \u2014como una JVM, pero ahora no s\xf3lo respecto a Java, sino a cualquier tipo de tecnolog\xeda\u2014 en la que dispone una serie de contenedores, aislados e independientes los unos de los otros."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arquitectura Java basada en contenedores",src:a(3179).Z,width:"346",height:"381"})),(0,n.kt)("p",null,"As\xed, se puede tener un contenedor que ejecute un jar en Java 6, otro con un microservicio en Java 11, otro m\xe1s con un servidor de aplicaciones. Cada contenedor trabajar\xe1 con su propia JVM sobre la misma capa Docker."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Visi\xf3n general del proceso en Quarkus",src:a(1031).Z,width:"952",height:"297"})))}p.isMDXComponent=!0},3179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/arquitectura-java-contenedores.jpg-bc5d55e291020fdfee36a777bffd1724.webp"},6376:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,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"},1031:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/containerization-process-6244db56b439c8ee8ad1a4e32e73a6e6.png"}}]);
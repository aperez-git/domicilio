"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[4393],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||r;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},868:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:5},o="Compilaci\xf3n del c\xf3digo (build)",l={unversionedId:"Versi\xf3n 2 - Backend/compilacion",id:"Versi\xf3n 2 - Backend/compilacion",title:"Compilaci\xf3n del c\xf3digo (build)",description:"Antes de comenzar, se debe verificar lo siguiente:",source:"@site/docs/Versi\xf3n 2 - Backend/compilacion.md",sourceDirName:"Versi\xf3n 2 - Backend",slug:"/Versi\xf3n 2 - Backend/compilacion",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/compilacion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Versi\xf3n 2 - Backend/compilacion.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sistema de mensajer\xeda NATS",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Instalacion-Nats"},next:{title:"Despliegue (deployment) del proyecto en Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Subir-imagenes-Kubernetes"}},c={},d=[{value:"Resultados de la compilaci\xf3n de cada m\xf3dulo",id:"resultados-de-la-compilaci\xf3n-de-cada-m\xf3dulo",level:2}],p={toc:d},s="wrapper";function u(e){let{components:a,...r}=e;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compilaci\xf3n-del-c\xf3digo-build"},"Compilaci\xf3n del c\xf3digo (build)"),(0,i.kt)("admonition",{title:"Precauci\xf3n",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Antes de comenzar, se debe verificar lo siguiente:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Docker Desktop")," debe estar funcionando y el par\xe1metro Memoria debe estar fijado a 10 Gb",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"Docker-Rammemory-10gb",src:t(1977).Z,width:"1366",height:"768"}),"  "),(0,i.kt)("li",{parentName:"ul"},"Verificar que la conexi\xf3n a Grupo KFC se encuentre activa:",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"Conexion",src:t(205).Z,width:"876",height:"650"})))),(0,i.kt)("admonition",{title:"Modo de compilaci\xf3n",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"El proceso de compilaci\xf3n se puede realizar  "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Abriendo el inductor de comandos (command prompt), haciendo clic en el men\xfa Inicio y escribiendo cmd."),(0,i.kt)("li",{parentName:"ul"},"Abriendo una ventana de la herramienta Power Shell"),(0,i.kt)("li",{parentName:"ul"},"En IntelliJ, abriendo una ventana de la herramienta Terminal y seleccionando uno de los modos indicados anteriormente",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"Intellij-Terminal",src:t(7902).Z,width:"352",height:"142"}),(0,i.kt)("br",{parentName:"li"}),"El desarrollador est\xe1 en libertad de elegir la alternativa que considere m\xe1s conveniente. "))),(0,i.kt)("admonition",{title:"Ejecuci\xf3n del proceso  ",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"El proceso de ",(0,i.kt)("strong",{parentName:"p"},"compilaci\xf3n")," requiere la aplicaci\xf3n de los siguientes comandos:  "),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Alternativa 1"),":  "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="En PowerShell"',title:'"En','PowerShell"':!0},'.\\gradlew `MODULO-NAME`:clean  \n\n.\\gradlew `MODULO-NAME`:build "-Dquarkus.package.type=native" \n')),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Alternativa 2"),":  "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="En CMD"',title:'"En','CMD"':!0},".\\gradlew :`MODULO-NAME`:clean  \n\n.\\gradlew :`MODULO-NAME`:build -Dquarkus.package.type=native   \n")),(0,i.kt)("p",{parentName:"admonition"},"En donde:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"clean"),": ",(0,i.kt)("em",{parentName:"p"},"Este comando elimina los archivos creados durante las tareas de compilaci\xf3n anteriores"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"build"),": ",(0,i.kt)("em",{parentName:"p"},"Este comando sirve para crear un archivo ejecutable nativo a partir de una aplicaci\xf3n Java"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"En donde ",(0,i.kt)("inlineCode",{parentName:"p"},"MODULO-NAME")," se refiere a:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"api-domicilio")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"api-pickup")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"authenticator")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"distribuidor-queue")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"health")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"log-entry")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"queue-resolver")))),(0,i.kt)("h2",{id:"resultados-de-la-compilaci\xf3n-de-cada-m\xf3dulo"},"Resultados de la compilaci\xf3n de cada m\xf3dulo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: admin"',title:'"M\xf3dulo:','admin"':!0},"\n.\\gradlew admin:build \"-Dquarkus.package.type=native\"\n\nResultado de la ejecuci\xf3n del comando:\nFinished generating 'admin-1.0.0-SNAPSHOT-runner' in 9m 7s.\n\nBUILD SUCCESSFUL in 10m 41s\n13 actionable tasks: 1 executed, 12 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: api-domicilio"',title:'"M\xf3dulo:','api-domicilio"':!0},"\n.\\gradlew :api-domicilio:build -Dquarkus.package.type=native\n\nResultado del comando en CMD:\nFinished generating 'api-domicilio-1.0.0-SNAPSHOT-runner' in 7m 34s.\n\nBUILD SUCCESSFUL in 8m 29s\n13 actionable tasks: 7 executed, 6 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: api-pickup"',title:'"M\xf3dulo:','api-pickup"':!0},"\n.\\gradlew :api-pickup:build -Dquarkus.package.type=native\n\nResultado de la compilaci\xf3n:\nFinished generating 'api-pickup-1.0.0-SNAPSHOT-runner' in 7m 34s.\n\nBUILD SUCCESSFUL in 8m 37s\n13 actionable tasks: 6 executed, 7 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: authenticator"',title:'"M\xf3dulo:','authenticator"':!0},"\n.\\gradlew :authenticator:build -Dquarkus.package.type=native\n\nResultado de la compilaci\xf3n:\n> Task :authenticator:compileJava\nNote: C:\\Users\\f-perez\\IdeaProjects\\compras-programadas-rama-V2\\authenticator\\src\\main\\java\\com\\kfc\\auth\\resources\\ApiAuth.java uses unchecked or unsafe operations\n\nNote: Recompile with -Xlint:unchecked for details.\nFinished generating 'authenticator-1.0.0-SNAPSHOT-runner' in 7m 43s.\n\nBUILD SUCCESSFUL in 8m 41s\n13 actionable tasks: 7 executed, 6 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: distribuidor-queue"',title:'"M\xf3dulo:','distribuidor-queue"':!0},"\n.\\gradlew :distribuidor-queue:build -Dquarkus.package.type=native\n\nResultados de la compilaci\xf3n:\nFinished generating 'distribuidor-queue-1.0.0-SNAPSHOT-runner' in 7m 31s.                                               \n\nBUILD SUCCESSFUL in 8m 26s\n13 actionable tasks: 7 executed, 6 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: health"',title:'"M\xf3dulo:','health"':!0},"\n.\\gradlew :health:build -Dquarkus.package.type=native\n\nResultado de la compilaci\xf3n:\nFinished generating 'health-1.0.0-SNAPSHOT-runner' in 7m 36s.\n\nBUILD SUCCESSFUL in 8m 29s\n13 actionable tasks: 7 executed, 6 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: log-entry"',title:'"M\xf3dulo:','log-entry"':!0},".\\gradlew :log-entry:build: -Dquarkus.package.type=native\n\nResultados de la compilaci\xf3n:\nFinished generating 'log-entry-1.0.0-SNAPSHOT-runner' in 7m 52s.\n\nBUILD SUCCESSFUL in 8m 50s\n13 actionable tasks: 7 executed, 6 up-to-date\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="M\xf3dulo: queue-resolver"',title:'"M\xf3dulo:','queue-resolver"':!0},"\n.\\gradlew :queue-resolver:build -Dquarkus.package.type=native\n\nResultados de la compilaci\xf3n:\nFinished generating 'queue-resolver-1.0.0-SNAPSHOT-runner' in 8m 16s.                                                   \n\nBUILD SUCCESSFUL in 9m 27s\n13 actionable tasks: 7 executed, 6 up-to-date  \n")),(0,i.kt)("p",null,"A continuaci\xf3n, se muestra el proceso realizado desde el editor IntelliJ Idea."),(0,i.kt)("p",null,"Selecci\xf3n del m\xf3dulo para configurar el proceso de compilaci\xf3n (en este caso, api-domicilio):\n",(0,i.kt)("img",{alt:"Vista-expandida-proyecto",src:t(632).Z,width:"340",height:"498"})),(0,i.kt)("p",null,"Configuraci\xf3n del proceso de compilaci\xf3n para el m\xf3dulo seleccionado:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Modulo-compilar",src:t(3621).Z,width:"1366",height:"694"})),(0,i.kt)("p",null,"Configuraci\xf3n del nombre del m\xf3dulo, el comando de compilaci\xf3n y proyecto:\n",(0,i.kt)("img",{alt:"Configura-compilar",src:t(6442).Z,width:"1374",height:"692"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Como referencia, se presentan los resultados de la compilaci\xf3n de varios m\xf3dulos:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"health, "),(0,i.kt)("li",{parentName:"ul"},"authenticator, "),(0,i.kt)("li",{parentName:"ul"},"api-pickup, "),(0,i.kt)("li",{parentName:"ul"},"queue-resolver y "),(0,i.kt)("li",{parentName:"ul"},"log-entry"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compilacion",src:t(9529).Z,width:"404",height:"202"})))}u.isMDXComponent=!0},9529:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Compilacion-health-authenticator-api-pickup-queue-resolver-log-entry-ed42b39680b2188d1aa488fd3bc63ed6.png"},3621:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Configuracion-modulo-compilar-2dbf5cf89e6437b97543411ba338570a.png"},6442:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Configuracion-nombre-modulo-comando-proyecto-7171ec35f1b6cfaec86e8a29f65a37dd.png"},1977:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Docker-Rammemory-10gb-015ccd6c269763a0c90a49b0b1817ca7.png"},7902:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Intellij-Terminal-44a3c97b8f38b16d6528260c3061172e.png"},205:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/VPN-Conexion-3bb3d86b865bd9d2f67a163bba3ab1b8.png"},632:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Vista-ampliada-proyecto-df633b912627b6cfc83436f9ba8447e5.png"}}]);
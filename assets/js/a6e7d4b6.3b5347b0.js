"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[1418],{3905:(e,A,t)=>{t.d(A,{Zo:()=>f,kt:()=>c});var n=t(7294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function i(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var A=n.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},f=function(e){var A=s(e.components);return n.createElement(l.Provider,{value:A},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},u=n.forwardRef((function(e,A){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,c=d["".concat(l,".").concat(u)]||d[u]||w[u]||r;return t?n.createElement(c,o(o({ref:A},f),{},{components:t})):n.createElement(c,o({ref:A},f))}));function c(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var l in A)hasOwnProperty.call(A,l)&&(i[l]=A[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8119:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>o,default:()=>w,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2},o="Roles",i={unversionedId:"tutorial-extras/roles-frontend",id:"tutorial-extras/roles-frontend",title:"Roles",description:"En esta secci\xf3n, se definen los roles que se van a asignar a los usuarios del sistema.",source:"@site/docs/tutorial-extras/roles-frontend.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/roles-frontend",permalink:"/domicilio/docs/tutorial-extras/roles-frontend",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/roles-frontend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard - APP Domicilio",permalink:"/domicilio/docs/tutorial-extras/dashboard-frontend"},next:{title:"Usuarios",permalink:"/domicilio/docs/tutorial-extras/usuarios"}},l={},s=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],f={toc:s},d="wrapper";function w(e){let{components:A,...r}=e;return(0,a.kt)(d,(0,n.Z)({},f,r,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roles"},"Roles"),(0,a.kt)("p",null,"En esta secci\xf3n, se definen los roles que se van a asignar a los usuarios del sistema.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Front-end-Roles",src:t(2192).Z,width:"188",height:"242"}),"  "),(0,a.kt)("p",null,"Las acciones que se pueden realizar son:"),(0,a.kt)("p",null,"Crear un nuevo rol: ",(0,a.kt)("img",{alt:"Front-end-Roles-usuario-crear",src:t(4538).Z,width:"138",height:"46"}),"  "),(0,a.kt)("p",null,"Despu\xe9s de crear el rol, para asignar los permisos, se puede editar: ",(0,a.kt)("img",{alt:"Front-end-Roles-usuario-editar",src:t(9731).Z,width:"110",height:"80"}),"   "),(0,a.kt)("p",null,"o eliminar del sistema: ",(0,a.kt)("img",{alt:"Front-end-Roles-usuario-eliminar",src:t(2602).Z,width:"136",height:"82"})),(0,a.kt)("p",null,"Como ejemplo, se ha creado el rol ",(0,a.kt)("em",{parentName:"p"},"Prueba"),":",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Front-end-Roles",src:t(4180).Z,width:"1366",height:"664"}),"  "),(0,a.kt)("admonition",{title:"Distribuci\xf3n de los permisos",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Los permisos se encuentran agrupados en las siguientes categor\xedas:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Busqueda de Pedidos"),(0,a.kt)("li",{parentName:"ul"},"Usuarios"),(0,a.kt)("li",{parentName:"ul"},"Configuracion"),(0,a.kt)("li",{parentName:"ul"},"Roles"),(0,a.kt)("li",{parentName:"ul"},"Locales"),(0,a.kt)("li",{parentName:"ul"},"Log Domicilio"),(0,a.kt)("li",{parentName:"ul"},"Dashboard"),(0,a.kt)("li",{parentName:"ul"},"Permisos Generales"))),(0,a.kt)("p",null,"Por categor\xeda, se tienen los siguientes permisos:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Busqueda de Pedidos\n    Marcar todo\n    Buscar pedidos\n    Ver Historial del Pedido\nUsuarios\n    Marcar todo\n    Mostrar Tabla de Usuario\n    Crear Usuario\n    Editar Usuario\n    Eliminar Usuario\n    Asignar Rol\nConfiguracion\n    Marcar todo\n    Mostrar Configuraci\xf3n\n    Bot de telegram\n    Truncar numero celular\nRoles\n    Marcar todo\n    Mostrar tabla de Roles\n    Crear Rol\n    Editar Rol\n    Eliminar Rol\nLocales\n    Marcar todo\n    Mostrar Tabla de Locales\n    Crear Locales\n    Editar Local\n    Ping BDD\n    Ping\n    Eliminar Locales\nLog Domicilio\n    Pedidos en cola\n        Mostrar Tabla de Pedidos en Cola\n    Pedidos no Inyectados\n        Marcar todo\n        Mostrar Tabla de Pedidos en error\n        Pedidos Antiguos\n        Reinyectar Pedidos\n        Editar Payload\n    Logs\n        Mostrar Logs y Pedidos Invalidos\nDashboard\n    Marcar todo\n    Ver Resolver\n    Ver Historial\n    Ver \xdaltimos Pedidos\nPermisos Generales\n    Mostrar payloads de todos los pedidos\n")),(0,a.kt)("p",null,"Al rol ",(0,a.kt)("em",{parentName:"p"},"Prueba")," creado, se le han asignado los siguientes permisos:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Front-end-Roles-Permisos",src:t(7030).Z,width:"1346",height:"662"}),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Front-end-Roles-Permisos-II",src:t(9748).Z,width:"1350",height:"662"}),"  "),(0,a.kt)("p",null,"Let's translate ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,a.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,a.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,a.kt)("p",null,"Translate ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,a.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,a.kt)("p",null,"Start your site on the French locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,a.kt)("p",null,"Your localized site is accessible at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/fr/"},"http://localhost:3000/fr/")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,a.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,a.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:t(1123).Z,width:"370",height:"302"})),(0,a.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,a.kt)("p",null,"Build your site for a specific locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,a.kt)("p",null,"Or build your site to include all the locales at once:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}w.isMDXComponent=!0},1123:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"},4180:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/Domicilio-Front-end-Roles-e6d910af9c5848e3bf58c58d3b4f2a83.png"},7030:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/Domicilio-Frontend-Roles-Permisos-I-94cac60b3c09d493460d7f6aac94ee25.png"},9748:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/Domicilio-Frontend-Roles-Permisos-II-421bf444abe64780ca675db5567d75e6.png"},2192:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/Domicilio-Frontend-Roles-7d8f276d94b6bf54f6b5f2b441ec029d.jpg"},4538:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/jpeg;base64,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"},9731:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/jpeg;base64,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"},2602:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/jpeg;base64,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"}}]);
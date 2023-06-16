"use strict";(self.webpackChunkdomicilio=self.webpackChunkdomicilio||[]).push([[8417],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>b});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),c=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=t,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(b,i(i({ref:n},d),{},{components:a})):r.createElement(b,i({ref:n},d))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4325:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),t=(a(7294),a(3905));const o={sidebar_position:7},i="Panel de Control de Kubernetes",s={unversionedId:"Versi\xf3n 2 - Backend/Verificacion-Kubernetes",id:"Versi\xf3n 2 - Backend/Verificacion-Kubernetes",title:"Panel de Control de Kubernetes",description:"El panel de control (o Dashboard) de Kubernetes es una interfaz de usuario basada en la web, por lo que se presenta al usuario como una pesta\xf1a adicional en el navegador.",source:"@site/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes.md",sourceDirName:"Versi\xf3n 2 - Backend",slug:"/Versi\xf3n 2 - Backend/Verificacion-Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Versi\xf3n 2 - Backend/Verificacion-Kubernetes.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Despliegue (deployment) del proyecto en Kubernetes",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Subir-imagenes-Kubernetes"},next:{title:"Despliegue del Panel de Control Domicilio",permalink:"/domicilio/docs/Versi\xf3n 2 - Backend/Panel-Domicilio"}},l={},c=[{value:"Despliegue del panel",id:"despliegue-del-panel",level:2},{value:"Acceso al panel",id:"acceso-al-panel",level:2},{value:"Creaci\xf3n de la cuenta de servicio",id:"creaci\xf3n-de-la-cuenta-de-servicio",level:3},{value:"Concesi\xf3n de permisos de administraci\xf3n",id:"concesi\xf3n-de-permisos-de-administraci\xf3n",level:3},{value:"Generaci\xf3n del token de autorizaci\xf3n",id:"generaci\xf3n-del-token-de-autorizaci\xf3n",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,t.kt)(u,(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"panel-de-control-de-kubernetes"},"Panel de Control de Kubernetes"),(0,t.kt)("p",null,"El panel de control (o Dashboard) de Kubernetes es una interfaz de usuario basada en la web, por lo que se presenta al usuario como una pesta\xf1a adicional en el navegador.  "),(0,t.kt)("p",null,"Para usar el panel, se deben ejecutar dos pasos:  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Realizar el despliegue y "),(0,t.kt)("li",{parentName:"ul"},"Habilitar el acceso  ")),(0,t.kt)("admonition",{title:"Precauci\xf3n  ",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Se debe verificar que ",(0,t.kt)("inlineCode",{parentName:"p"},"Docker Desktop")," est\xe9 activo, antes de ejecutar cualquiera de los comandos o acciones que aparecen en esta secci\xf3n. ")),(0,t.kt)("h2",{id:"despliegue-del-panel"},"Despliegue del panel"),(0,t.kt)("p",null,"En la ventana de comandos (CMD) o PowerShell, se ejecuta el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Despliegue del panel"',title:'"Despliegue',del:!0,'panel"':!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml\n\nD\xe1 como resultado:\n\nnamespace/kubernetes-dashboard unchanged\nserviceaccount/kubernetes-dashboard unchanged\nservice/kubernetes-dashboard unchanged\nsecret/kubernetes-dashboard-certs unchanged\nsecret/kubernetes-dashboard-csrf configured\nsecret/kubernetes-dashboard-key-holder configured\nconfigmap/kubernetes-dashboard-settings unchanged\nrole.rbac.authorization.k8s.io/kubernetes-dashboard unchanged\nclusterrole.rbac.authorization.k8s.io/kubernetes-dashboard unchanged\nrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged\nclusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged\ndeployment.apps/kubernetes-dashboard unchanged\nservice/dashboard-metrics-scraper unchanged\ndeployment.apps/dashboard-metrics-scraper unchanged\n\n")),(0,t.kt)("h2",{id:"acceso-al-panel"},"Acceso al panel"),(0,t.kt)("p",null,"El acceso al panel s\xf3lo es posible si el usuario est\xe1 registrado en el espacio de nombres del panel Kubernetes (kubernetes-dashboard), creado en el paso anterior, por lo que se deben ejecutar los siguientes pasos:"),(0,t.kt)("h3",{id:"creaci\xf3n-de-la-cuenta-de-servicio"},"Creaci\xf3n de la cuenta de servicio"),(0,t.kt)("p",null,"Se crea un archivo de manifiesto, donde se guardan las siguientes especificaciones, para la creaci\xf3n de la cuenta:  "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="dashboard-adminuser.yaml"',title:'"dashboard-adminuser.yaml"'},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard  \n")),(0,t.kt)("p",null,"En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f dashboard-adminuser.yaml  \n\nD\xe1 como resultado:\n\nserviceaccount/admin-user created  \n")),(0,t.kt)("h3",{id:"concesi\xf3n-de-permisos-de-administraci\xf3n"},"Concesi\xf3n de permisos de administraci\xf3n"),(0,t.kt)("p",null,"A la cuenta creada en el paso anterior, se le deben asignar permisos de administrador, para un adecuado manejo del panel de Kubernetes, para lo cual se crea un archivo de manifiesto, en donde se guardan las siguientes especificaciones:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k8s-cluster-role-binding.yaml"',title:'"k8s-cluster-role-binding.yaml"'},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard  \n")),(0,t.kt)("p",null,"En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:  "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f k8s-cluster-role-binding.yaml  \n\nD\xe1 como resultado:\n\nclusterrolebinding.rbac.authorization.k8s.io/admin-user created\n")),(0,t.kt)("h3",{id:"generaci\xf3n-del-token-de-autorizaci\xf3n"},"Generaci\xf3n del token de autorizaci\xf3n"),(0,t.kt)("p",null,"Para completar los pasos para el ingreso al panel de Kubernetes, se debe generar el token portador o de autorizaci\xf3n (bearer token)."),(0,t.kt)("p",null,"En la ventana de comandos (CMD) o PowerShell, se despliega el archivo anterior, ejecutando el siguiente comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kubernetes-dashboard create token admin-user  \n \nGenerando el token de autorizaci\xf3n de acceso:\n\neyJhbGciOiJSUzI1NiIsImtpZCI6IjVJR3lYdnRtNTZJSkxEMG9sY3pmWl9GNzJUZWVnTzlOSnZkOUx1VF90YTAifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjg0OTY1MTM0LCJpYXQiOjE2ODQ5NjE1MzQsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiZjU0MmM3OTgtY2M0Yi00ZWMwLTg5MzItNGIxZmQ3ZmM4ZWQxIn19LCJuYmYiOjE2ODQ5NjE1MzQsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.mi7Nff5bmA2SzDLjlKhg0j40Ul7UqvIXgyVucwW1ZT6xu-3bYgWvJvDH0lUPA8G2aAHxf61N6oC2L4mHKJ26jHS-mCgeDmtdloC24FfMrolxmwBDRV9c0HcoKKVRP04O8b_QW1E6JY2IgEWGLYcIkhkhyZtArAlDU5eU-7K8chQJGv7tgjf-KH9KuLCx5UCwsa4xRwUkjWwA9inUZSyChX7iJrJBQIcVGvb2J-Qk8dD9Ol48-gxwncKwHQwDEjj8qr90S_8pfwD33hd3ghz-7gObT36eaFYHjikGzZDHOSXWrsWyawGjS7--Z_Tk6L78xK3k4UJFic0cE8e75K6lCQ\n")),(0,t.kt)("p",null,"La activaci\xf3n del acceso al panel de Kubernetes, requiere, nuevamente, el uso de la herramienta kubectl, ejecutando el siguiente comando:  "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl proxy\n\nD\xe1, como resultado:\n\nStarting to serve on 127.0.0.1:8001\n")),(0,t.kt)("admonition",{title:"Precauci\xf3n  ",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"El anterior comando se debe ejecutar en una ventana aparte, separado del resto de utilidades que se est\xe1n usando. ")),(0,t.kt)("p",null,"En el navegador web, mostrar el panel de control a trav\xe9s del comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/\n")),(0,t.kt)("p",null,"El token generado anteriormente, se copia y pega en la l\xednea:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Dashboard de Kubernetes",src:a(6389).Z,width:"1317",height:"504"})),(0,t.kt)("p",null,"Luego, se selecciona el bot\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Iniciar sesi\xf3n")),(0,t.kt)("p",null,"Debe aparecer la pantalla de bienvenida a Kubernetes:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Dashboard de Kubernetes",src:a(9362).Z,width:"1366",height:"768"})),(0,t.kt)("p",null,"En el \xe1rea correspondiente a los espacios de nombres (namespaces), se selecciona app-domicilio, como muestra\nla imagen:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Espacio-de-nombres",src:a(7643).Z,width:"1364",height:"694"})))}p.isMDXComponent=!0},7643:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Espacio-de-nombres-847b202ab45c9435dbc0038671dc3bfa.png"},9362:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Kubernetes-default-ddca7e248ec1ca53d97de4bb6457c782.png"},6389:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Panel-de-control-de-Kubernetes-ca099eb3409114279e6fd2a08179de1d.png"}}]);
# OpenBootcamp-typescript

1. Video 1: Introducción

-   verificamos que tengamos instalado node: cmd 
    -> node --version
    
    se realiza lo mismo con con npm
    
    Se recomienda instalar las versiones LTS que son las versiones estables

    typescript se transpila a una version de js y por medio de node ejecutamos esos archivos

-   creamos la carpeta y creamos el package.json 
    -> npm init, seguimos las instrucciones, se creara el archivo package.json

-   se procede a instalar herramientas como entorno de desarrollo 
    -> npm i --save-dev @types/node nodemon ts-node typescript 
    importante checarlas en la pagina https://www.npmjs.com/search?q=%40types%2Fnode; version, mantenimiento, descargas semanales, 
    ubicacion del repositorio actual
    
    se creara una carpeta que sera node_modules, y el json se actualizara

    si se llegan a tener problemas se puede deletear node_modules y el package-lock.json, estos archivos se vuelven a generar
    cada vez que se realiza un 
    -> npm install  o 
    -> npm i

-   Ejecutar typescript, pero hay que configurar para la transpilacion
    -> npx tsc --init --rootDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true
    genera un tsconfig.json

-   Crear archivo typescript, creamos carpeta src (source code) y se crea el index.ts
    
    existen algunas extensiones que puden ayudar como :
        material icon theme (para ver los archivos, iconos)
        javaScript and typerScript Nigtly
        npm 
        npm intellisence 
        todo highligt

    ejecutar archivo ts 
    -> ts-node index.ts 
    O hacer el script en el package.json, en los script se definio tsNode para ejecutar en consola 
    -> npm rum tsNode 

    Pero se configura el nodemon mejor, para ello se creo el archivo nodemon.json y se configuro y se agrego el script la
    ejecucion del mismo
    
    para detener la ejecucion se presiona control + c

-   Como se transpila ? como generar version definitiva del proyecto 
    se configura en package.json un script como trasnpilation y se ejecuta, revisar la configuracion del tsconfig outDir a build y rootDir a src

    se ejecuta y se creara la carpeta build y se creara dentro de el un js 

-   comentarios

-   utilizacion herramienta para empaquetar el codigo

    -> npm i --save-dev rimraf 
    se configura los dos scripts y se ejecuta el start:prod


2. Video 2: Variables y datos
    - con ver el codigo basta // - video 2

3. Video 3: Funciones
    - ver codigo

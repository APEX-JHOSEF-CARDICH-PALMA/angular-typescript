
#  Angular Example
<img src="documentation/angular-typescript.png" width="210" height="133"/>

---

##  Tabla de contenidos


- [Introduccíon](#Introducción)
- [About](#About )
- [Characteristics](#Características)
- [Instalación](#instalación)
- [Dependencias](#Dependencias)
- [Anexo](#Anexo)
- [Equipo](#Equipo)




---

 
## Introduccíon


  -  Desarrollo de una sencilla aplicación usando Angular, con diferentes tipos de funcionalidades.

---
 ## About

  - 🇬🇧 The main goal of this project is to put in practice some coding usign TypeScript.
   This project is being developed by [Jhosef A. Cardich Palma](https://www.linkedin.com/in/jhosef-anderson-cardich-palma-74765788/). 

---
  - 🇪🇸 El objetivo principal de este proyecto es el uso de Angular y TypeScript.   Este proyecto esta siendo desarrollado por [Jhosef A. Cardich Palma](https://www.linkedin.com/in/jhosef-anderson-cardich-palma-74765788/).





 ---


## Instalación

- Después de [instalar](#Anexo) Angular con  en el sistema anfitrión se procedera a situarse la terminal en el directorio raíz del proyecto y ejecutar el siguiente comando:



> Inicio de la Aplicación 
```
$ ng serve
 ```
- De esta manera se compilará todo el código que del proyecto y se ejecutará un servidor sencillo que muestra un mensaje por la terminal: 
```
** Angular Live Development Server is listening on localhost:64689, open your browser on http://localhost:64689/ **
: Compiled successfully.
 ```


---
 

## Características

### Componentes principales




- #### component/index

Es el componente que se presentará por defecto




<r></r1>

- ####  component/view-2
Algunas de las operaciones más basicas de cambio de presentacion de elementos.




----

## Dependencias


- [Angular](https://angular.io/)

- [Bootstrap](https://getbootstrap.com/)
----
## Equipo
> Contributors/People

| <a href="https://www.linkedin.com/in/jhosef-anderson-cardich-palma-74765788/" target="_blank">**Jhosef A. Cardich Palma**</a> | 
| :---: |
|  <a href="https://www.linkedin.com/in/jhosef-anderson-cardich-palma-74765788/" target="_blank"><img src="documentation/profile_pic.png" width="200" height="230" /></a>   |
|***Full-Stack Software Developer***|
| Linkedin:   <a href="https://www.linkedin.com/in/jhosef-anderson-cardich-palma-74765788/" target="_blank">` Jhosef A. Cardich Palma`</a>| 
| Twitter: <a href="http://twitter.com/jhosefcardich" target="_blank">`@JhosefCardich`</a>| 
|Instagram: <a href="http://instagram.com/arts_hot" target="_blank">`@ARTS-HOT`</a>




---
## Anexo 

### Angular Configuration
We have to install all the dependencies before:
- Node.js


---
Angular CLI allows creating new Angular projects with a basic folder structure and other required features. It also provides utilities to create servers, generate components, build packages, etc.
Skip these steps if you have the latest version of everything and go to the [Creating a Basic Project section](#Initialization)  to create the project
> Updating the Angular Cli: Removing old versions

```
$ npm uninstall -g angular-cli
```

> Updating Angular: Removing old versions
```
npm uninstall -g @angular/cli
```

> Cleaning npm cache 

```
$ npm cache clean --force
```
> Angular Cli: Installing the latest version

```
$ npm install -g @angular/cli@latest
```

### Initialization 

We can create a new project following the next steps: 


> 1. Creating a new project
- We'll be asked for some information about the project. So, in the first, after the execution of the command below, angular CLI will ask us ***"would you like to add Angular Routing?"*** type ***No***. Generating routines automatically could generate errors. We can create the routing later. In the next question just push enter until the process starts to create the files and folders.. 

```
$ ng new
```
> 2. Starting ng serve
- The command bellow compiles all the files of the project and starts a local server. This server reloads all the code and compilation when a change is detected in the code, so the project view will be updated automatically and we'll be able to see the changes in the browser without the need of re-starting the server.

```
$ ng serve
```

### Development 

we can create views for our app. Firstly we have to create components. A component is a piece of html view that will be showed in the browser.
Al the components are located in the directory: ***"src/app/components"*** (It`s a convention to develop an kept the project structure orgnized)    

> Creating a component:
```
$ ng g component components/[name-component]
```

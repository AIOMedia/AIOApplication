# AIO Application

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Dependencies Status](https://david-dm.org/AIOMedia/AIOApplication.svg?style=flat-square)](https://david-dm.org/AIOMedia/AIOApplication)

Application for Media and Home Improvement management built on Node.js and AngularJS.

This a quick overview of the AIOMedia application. For more information visit the [Project Wiki](https://github.com/AIOMedia/AIOApplication/wiki).

## Requirements

* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/)
* NPM Package Manager - [Download & Install NPM](https://www.npmjs.org/doc/README.html)
* MongoDB - [Download & Install MongoDB](http://docs.mongodb.org/manual/installation/)

## Download

### GitHub Repository

Clone project repository into `your_project_name` directory.

```
$ git clone git@github.com:AIOMedia/AIOApplication.git your_project_name
```

### Zip archive

Download zip archive and extract it into your project directory.

## Installation

Install project dependencies

```
$ cd your_project_name
$ npm install
```

## Running application

After the install process is over, you'll be able to run your application using NPM, just run npm start script:

```
$ npm start
```

Your application should run on the 3000 port so in your browser just go to http://localhost:3000

## Project architecture

Basically, this application is an aggregate of two applications : the **Server** and the **Client**.

### Whole file structure

```
|- bin/
|  `- www
|- client/
|  |- public/
|  |  |- css/
|  |  |- fonts/
|  |  |- images/
|  |  |- js/
|  |  |- less/
|  |  `- favicon.ico
|  |- src/
|  `- index.html
`- server/
```

### Server Application

It is a RESTful API provided by Node.js.

Files and directories of the Server are :
* `bin/`         contains the application commands
  * `www`        start command of the **Server**
* `server/`      contains the **Server** application

### Client Application

It is an HTML/AngularJS user interface completely independent from the **Server**.
It will call the Server API with AJAX to retrieve JSON data.
As it's just HTML & JavaScript, it doesn't require any server side process to run.

Files and directories of the Client are :
* `client/`      contains the **Client** application
  * `public/`    contains all public assets (css, images, js, less, favicon, etc.)
  * `src/`       contains AngularJs source files
  * `index.html` entry point of the **Client**


## Third party libraries

### Server
* Express v4.10.2 - [http://expressjs.com](http://expressjs.com)
* Mongoose v3.8.19 - [http://mongoosejs.com](http://mongoosejs.com)

### Client
* AngularJS v1.2.18 - [https://angularjs.org](https://angularjs.org)
* Angular UI-Bootstrap v0.11.0 - [http://angular-ui.github.io/bootstrap](http://angular-ui.github.io/bootstrap)
* jQuery v2.1.1 - [http://jquery.com/](http://jquery.com)
* jQuery UI v1.11.1 - [http://jqueryui.com](http://jqueryui.com)
* Twitter Bootstrap v3.3.1 - [http://getbootstrap.com](http://getbootstrap.com)
* Font Awesome v4.2.0 - [http://fortawesome.github.io/Font-Awesome](http://fortawesome.github.io/Font-Awesome)

## License

The MIT License (MIT).
See LICENSE file for more information.

## Authors

* Axel Penin ([Elorfin](https://github.com/Elorfin)) as main author

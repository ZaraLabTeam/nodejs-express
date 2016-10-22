## NPM - Node Package Manager
Packages extend the functionality of our application.

Notes:
Packages can extend functionality in Node and this package system is
one thing that makes Node so powerful.


### Installing Packages

* `package.json`
* Single package - `npm install express --save`
* Multiple packages - `npm install express mongoose --save`
* Install project packages `npm install`

##### package.json <!-- .element class="text-left" -->
```json
{
    "name": "packages-install",
    "main": "server.js",
    "dependencies": {
    "express": "~4.8.6"
    }
}
```


### Popular packages

* <span class="text-info">ExpressJS</span> - Framework for web development
* <span class="text-info">Mongoose</span> - Interact with MongoDB
* <span class="text-info">GruntJS</span> - Automating Tasks
* <span class="text-info">PassportJS</span> - Authentication with many social services
* <span class="text-info">Socket.io</span> - Realtime websocket apps
* <span class="text-info">Elasticsearch</span> - High scalability search operations.

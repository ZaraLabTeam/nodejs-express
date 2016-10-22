## ExpressJS
A lightweight platform for building web apps using NodeJS


### Features

* Router
* Handling Requests
* Application Settings
* Middleware

Notes:
Express hides a lot of the inner workings of Node, which allows you to
dive into your application code and get things up and running a lot
faster. It’s fairly easy to learn and still gives you a bit of flexibility with
its structure

Middleware - Like filters that are applied on the incoming/outgoing
requests. Be ware that middleware are applied in order of their declaration

We will also add next() to indicate to our application that it should
continue to the other routes or next middleware. This is important
because our application would stop at this middleware without it.

We can apply middleware to given routes or the entire app
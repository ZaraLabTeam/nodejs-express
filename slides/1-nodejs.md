## Nodejs

<q>Javascript I free you from the browsers</q> - Nodejs


### Key points

* <span class="text-info">Google Chrome’s V8 JavaScript Runtime</span> - what is this?
* <span class="text-info">Traditional Servers</span> - like Apache
* <span class="text-info">Actually **Nodejs** is not a server</span>
* <span class="text-info">Asynchronous</span>
    * Multithreaded
    * Singlethreaded

Notes:
V8 is Google's open source high-performance JavaScript engine, written 
in C++ and used in Google Chrome, the open source browser from Google
respectably fast -- fast enough to reside at the core of Node.js.

Server side javascript. It's not a language it is an application run
time environment

Traditional Servers start a new thread or process when they need
to handle a request. Often we can have many processes that are idle -
waiting for a request, on the other side, if we have only 50 idle
processes and 100 requests come at the same time, some of them may
experience a connection timeout until a process is freed up

Of course there are a ways to handle scalability more efficiently, but
generally to support more users you will need more and more servers

This is where Nodejs shines. It plays the same role as a traditional
server, but the main distinction comes from the fact that Node is
asynchronous and single threaded.
Node uses only one thread to handle all requests. Although
this may seem inefficient at first glance, it actually works out well
given the asynchronous nature of Node.
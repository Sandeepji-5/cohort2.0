What is Node.js?
ans:- Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser, mainly on the server side.
It is built on Google Chrome’s V8 JavaScript engine and uses an event-driven, non-blocking I/O model, which makes it highly scalable and efficient for handling multiple concurrent requests.

Can JavaScript run without a browser?
answer :- Yes, JavaScript can run without a browser.
With the help of Node.js, JavaScript can be executed outside the browser, mainly on the server side.



Why do we need Node.js?
answer :-We need Node.js because it allows us to use JavaScript for server-side development and build fast, scalable, and real-time applications using a non-blocking, event-driven architecture.


What is the difference between browser JS and Node.js JS?
ANSWER:- Browser JavaScript is used for client-side UI interactions, while Node.js JavaScript is used for server-side development with access to system resources.


What is npm?
answer :- nnpm (Node Package Manager) is the default package manager for Node.js.
It is used to install, manage, share, and update JavaScript libraries and dependencies in a project.

 What is a package?

 answer:- A package is a reusable piece of code that provides specific functionality and can be easily installed and used in a project.
In the JavaScript / Node.js ecosystem, a package usually contains code, configuration, and metadata and is managed using npm.


 Difference between package.json and package-lock.json?
 answer:- package.json defines what dependencies a project needs, while package-lock.json locks the exact versions to ensure consistent installs.


Why should we not push node_modules?
answer:- We should not push node_modules because it is very large, machine-dependent, and can be recreated anytime using package.json and package-lock.json.


What is a server?
answer: server is a collection of code which take some request from the client and give some response to the client..


Difference between client and server
answer :- A client requests resources or services, and a server processes those requests and returns responses.



Can frontend act as a server?
answer:- Short answer: ❌ No, a frontend cannot fully act as a server.
But ✅ in some limited cases, frontend-related technologies can perform server-like tasks.

What is Express?
answer:-
Express is a JavaScript framework built on top of Node.js that is used to create servers and web applications.
It provides a simple, clean, and readable way to handle routing, requests, and responses.


Why Express over Node HTTP module?
answer :- We prefer Express over the Node.js HTTP module because Express simplifies server development, reduces boilerplate code, and provides built-in features like routing and middleware, which are not easily available in the raw HTTP module.

What is a route?
answer :- A route defines how a server responds to a client request based on a specific URL (path) and HTTP method (GET, POST, PUT, DELETE).


What does app.listen do?
answeer:- app.listen run our website on the given port.


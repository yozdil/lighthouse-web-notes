# HTTP

## Creating an HTTP server w/o any framework

```javascript
// creating a server with nodejs wtihout any framework
const http = require("http");
const fs = require("fs"); //This is for the request handler
const port = 3000;
```

## Initial file body

```javascript
// create the http server
const server = http.createServer((req, res) => {
  console.log('http verb:', req.method, 'path:', req.url);
});



// have the server listens for incoming requests
server.listen(port, () => console.log(`Server is listening on port ${port}`));

});
```

Server will be listening and waiting for a request `request = HTTP verb + path(resource)`.

Now we can add the routing system `Route = method + URL`

```javascript
const server = http.createServer((req, res) => {
  console.log("http verb:", req.method, "path:", req.url);

  // route = method + path
  const route = `${req.method} ${req.url}`;

  // routing system
  if (route === "GET /") {
    // display homepage

    getHomepage(req, res);
  } else if (route === "GET /todos") {
    // display a list of todos

    getTodos(req, res);
  } else {
    // display 404

    display404(req, res);
  }
});
```

The functions `getHomepage, getTodos, display404` are the response.

If route === something do this or do that.

```javascript
// Example: getTodos
const getTodos = (req, res) => {
  // set content application/json
  res.writeHead(200, { "content-type": "application/json" });

  // read the todos from the database
  // convert the todos to JSON
  // send back the todos
  res.write(JSON.stringify(todos));

  // terminate the request
  res.end();
};
```

First part of writeHead is the status, then we declare the content type. We send back the content with res.write() and we terminate the request via res.end().

The function that we put our action into is called a `request handler`.
If in our request handler we wanted an html file from outside we can use fs read file.

```javascript
const getHomepage = (req, res) => {
  // send back status code
  res.writeHead(200, { "content-type": "text/html" });

  fs.readFile("./views/index.html", "utf8", (err, content) => {
    //the callback
    if (err) {
      console.log(err.message);
      return;
    }

    // send back the content of the response
    res.write(content);

    // terminate the request
    res.end();
  });
};
```

The complete file at https://github.com/DominicTremblay/lecture-w3d1/tree/demo-east-feb01-2021/nodejs

# Express

## Creating an HTTP server w Express

First we can npm init -y `(y if we dont want to answer all the questions)`

```javascript
const express = require("express");
const port = 3000;

// create the web server => creating an express app
const app = express();

// tell express that we're using ejs to render our views (html)
// ejs = embedded JavaScript => mix of HTML + javaScript
app.set("view engine", "ejs");

// request handlers
// routing system of express

app.get("/", (req, res) => {
  // displaying the homepage

  res.status(200).render("index");
  //by writing status(200) we are explicit, we do not have to write it JS will implicitly put that for us if we wanted.
});

app.get("/todos", (req, res) => {
  // display the list of todos

  res.status(200).render("todos", { todosList: todos });
});

app.get("*", (req, res) => {
  //This will 'catch' any other path.
  // display 404
  res.status(404).render("404");
});

// have the webserver listening for incoming requests
app.listen(port, () => console.log(`Server is listening on port ${port}`));
```

Inside of our ejs files we use a special express syntax. `<% %>` or `<%= %>`.
This will be a JS expression and anything outside of it will be HTML.

```HTML
<body>
  <h1>List of todos</h1>
  <ul>

    <!-- <% %> everything inside is javascript, anything outside of it is HTML -->
    <% for (let todoObj of todosList) { %>
      <!--  adding an = means ouput the content to the html page -->
      <li>
        <%= todoObj.description %>
        <!-- If we didnt have the = sign this would not compute. -->
      </li>
      <% } %>

  </ul>
</body>
```

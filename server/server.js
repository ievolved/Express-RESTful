

// Initialization
//
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),

    todoItemModel = require("./models/todo-item.js");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.disable("view cache");

var port = process.env.PORT || 8200;

// Routes
//
var router = express.Router();

router.use(function(request, response, next) {
  console.log("Catch-all filter enetered.");
  next();
});

router.get("/", function(request, response) {
  response.json({message: "This API works, woo-hoooooooooooo!!"});
});

router.route("/todos")
  .post(function(request, response) {
    var todo = todoItemModel.newTodoItem(request.body.description);
    todoItemModel.addTodoItem(todo);
    response.json(todo);
  })

  .get(function(request, response) {
    var items = todoItemModel.items;
    console.log("all todos");
    console.log(items);
    response.json(items);
  });

router.route("/todos/:id")
  .get(function(request, response) {
    var item = todoItemModel.findTodoItem(request.params.id);
    response.json(item);
  })

  .put(function(request, response) {
    var id = request.params.id;
    var description = request.body.description;

    console.log("id = " + id);
    console.log("description = " + description);

    var item = todoItemModel.findTodoItem(id);
    todoItemModel.updateTodoItem({ id: id, description: description });
    response.json(item);
  })

  .delete(function(request, response) {
    todoItemModel.removeTodoItem(request.params.id);
    response.json({ deleted: true });
  });


app.use("/api", router);

// You may now begin
//
app.listen(port);
console.log("Listing at http://127.0.0.1:" + port + "/api");
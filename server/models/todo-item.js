

var count = 0;
exports.items = items = [];


exports.newTodoItem = function newTodoItem(desc) {
  return {
    id: count++,
    completed: false,
    description: desc
  };
};

exports.addTodoItem = addTodoItem = function(item) {
  console.log("add");
  console.log(item);
  items.push(item);
};

exports.removeTodoItem = removeTodoItem = function(value) {
  console.log("delete");
  console.log(value);

  if (items.length === 0) {
    return;
  }

  console.log("before delete");
  console.log(items);

  var result = [];
  for (var i=0; i<items.length; i++) {
    if (items[i].id != value) {
      result.push(items[i]);
    }
  }

  exports.items = items = result;

  console.log("after delete");
  console.log(items);
};

exports.findTodoItem = findTodoItem = function(value) {
  console.log("find");
  console.log(value);

  if(items.length === 0) {
    return { empty: true }
  }

  for (var i=0; i<items.length; i++) {
    if (items[i].id == value) {
      return items[i];
    }
  }

  return { empty: true }
};

exports.updateTodoItem = updateTodoItem = function(value) {
  console.log("update");
  console.log(value);

  if (items.length === 0) {
    return { empty: true }
  }

  for (var i=0; i<items.length; i++) {
    if (items[i].id == value.id) {
      var item = items[i];
      item.description = value.description;
      items[i] = item;
      return items[i];
    }
  }

  return { empty: true };
};




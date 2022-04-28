function addTodo(title) {
  return {
    type: 'ADD_TASK',
    title: title,
  };
}

function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}

function onCahngeCheckBox(newValue, ind) {
  return {
    type: 'DONE_TODO',
    newValue,
    ind,
  };
}

function editTodo(title, edtInd) {
  return {
    type: 'EDIT_TODO',
    title,
    edtInd,
  };
}

export {addTodo, removeTodo, onCahngeCheckBox, editTodo};

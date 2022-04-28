const initialState = {
  todo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        todo: [
          ...state.todo,
          {title: action.title, id: Date.now(), done: false},
        ],
      };
    }
    case 'REMOVE_TODO': {
      let remove = [...state.todo].filter(i => action.id !== i.id);
      return {
        ...state,
        todo: remove,
      };
    }
    case 'DONE_TODO': {
      let dupTodo = [...state.todo];
      dupTodo[action.ind].done = action.newValue;
      return {
        ...state,
        todo: dupTodo,
      };
    }
    case 'EDIT_TODO': {
      let editTodo = [...state.todo];
      editTodo[action.edtInd].title = action.title;
      return {
        ...state,
        todo: editTodo,
      };
    }
    default:
      return state;
  }
};
export default reducer;

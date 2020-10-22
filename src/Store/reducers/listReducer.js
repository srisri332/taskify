let initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      state.lists = [...state.lists, action.list];
      return {
        lists: state.lists,
      };
    case "DELETE_LIST":
      let newLists = state.lists.filter((list) => {
        return list !== action.list;
      });
      //console.log(state);
      return {
        ...state,
        lists: newLists,
      };
  }
  return state;
};

export default listReducer;

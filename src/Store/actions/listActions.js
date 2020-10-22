export const addList = (list) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_LIST", list });
  };
};

export const delList = (list) => {
  return (dispatch, getState) => {
    dispatch({ type: "DELETE_LIST", list });
  };
};

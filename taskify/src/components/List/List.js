import React, { useState } from "react";
import "./List.css";
import ListContent from "./ListContent";
import { connect } from "react-redux";
import { addList, delList } from "../../Store/actions/listActions";

function List(props) {
  const [cValue, setCvalue] = useState(
    Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  );

  const deleteList = ({ list_id }) => {
    props.delList(list_id);
  };

  const addList = () => {
    setCvalue(
      Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );

    props.addList(cValue);
  };
  console.log(props.list);

  return (
    <div className='main-list'>
      {props.list.map((list_id) => {
        return (
          <ListContent
            key={list_id}
            deleteList={() => {
              deleteList({ list_id });
            }}
          />
        );
      })}
      <button className='add-list' type='click' onClick={addList}>
        Add List
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list.lists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list)),
    delList: (list) => dispatch(delList(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

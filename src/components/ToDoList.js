import React from 'react';
import ListItem from './ListItem';

const ToDoList = (props) => {
  return (
    <ul>
      {props.list.map((item, index) => <ListItem item={item} key={index} />)}
    </ul>
  )
}

export default ToDoList;
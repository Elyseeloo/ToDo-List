import React, { useState } from "react";

function ToDoItem(props) {
  const strikeThrough = {
    textDecoration: "line-through"
  };

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div
      onClick={handleClick}
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={isDone ? strikeThrough : null}>{props.item}</li>
    </div>
  );
}

export default ToDoItem;

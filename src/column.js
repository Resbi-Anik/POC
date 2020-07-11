import React, { Component } from "react";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

class Column extends Component {
  render() {
    console.log("task:", this.props);

    return (
      <Droppable droppableId={this.props.column.id}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.task.map((task, index) => {
                return <Task key={task.id} task={task} index={index} />;
              })}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default Column;

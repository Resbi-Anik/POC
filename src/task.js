import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              {this.props.task.content}
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default Task;

import React, { Component } from "react";
import "./App.css";
import initData from "./Data/data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = initData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const column = this.state.columns["column-1"];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);

    console.log("source:", newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const task = column.taskIds.map(
              (taskId) => this.state.tasks[taskId]
            );
            return <Column key={columnId} column={column} task={task} />;
          })}
        </div>
      </DragDropContext>
    );
  }
}

export default App;

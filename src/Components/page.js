import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import taskArray from "./pageArray";
import "./page.css";

class Page extends Component {
  taskArray = ["task-1", "task-2", "task-3"];
  onDragEnd = () => {};
  render() {
    console.log("here:", this.state);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="main-div">
          <Droppable droppableId={"new"}>
            {(provided) => {
              return (
                <div
                  className="items"
                  id="drop-items-id"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div>
                    Items
                    {this.taskArray.map((taskId) => {
                      console.log("task", taskId);
                      return (
                        <Draggable draggableId={taskId}>
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="item-div" id={taskId}>
                                  Task one
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          </Droppable>

          <div>
            <div className="header">header</div>
            <div className="body">body</div>
            <div className="footer">footer</div>
          </div>
        </div>{" "}
      </DragDropContext>
    );
  }
}

export default Page;

import './App.css';
import React from 'react';
import Child from './components/ChildList.js'
import InputModal from './components/InputModal'

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          todoList: [],
          todoInput:"",
          addTask: false,
          taskIndex: null,
          subTaskIndex: null,
          currentEdit: "",
          type: ""
      }
  };

  removeTask = (...props) => {
    const [index, parentIndex] = props
    const { todoList } = this.state;
    if(props.length === 1){
      todoList.splice(...props, 1)
    } else {
      todoList[parentIndex].subTask.splice(index, 1)
    }
    this.setState({todoList})
  }

  editTask = (...props) => {
    const [index, name, parentIndex] = props
    if(props.length === 2) {
      this.setState({
        taskIndex: index,
        type: "editTask"
      })
    } else {
      this.setState({
        taskIndex: parentIndex,
        subTaskIndex: index,
        type: "editSubTask"
      })
    }
    this.setState({
      addTask: true,
      currentEdit: name,
    })
  }

  addSubList = (props) => {
    this.setState({
      type: "addSubTask",
      taskIndex: props,
      addTask: true
    })
  }

  declineTask = () => {
    this.setState({
      addTask: false,
      currentEdit: "",
      todoInput:"",
      type: ""
    })
  }

  defaultState = (todoList) => {
    this.setState({
      todoList,
      taskIndex: null,
      subTaskIndex: null,
      currentEdit: "",
      addTask: false,
      todoInput: "",
      type: ""
    })
  }

  confirmTask = () => {
    const {todoInput, todoList, taskIndex, subTaskIndex} = this.state
    switch(this.state.type){
      case "newTask":
        this.defaultState([...todoList, {name: todoInput, subTask: []}])
      break;
      case "editTask": 
        todoList[taskIndex].name = todoInput
        this.defaultState(todoList)
      break;
      case "editSubTask":
        todoList[taskIndex].subTask[subTaskIndex].name = todoInput
        this.defaultState(todoList)
      break ;
      case "addSubTask":
        todoList[taskIndex].subTask = [...todoList[taskIndex].subTask, {name: todoInput}]
        this.defaultState(todoList)
      break ;
      default: throw new Error("Something go wrong")
    }
  }

  handleChange = (v) => {
    this.setState({todoInput: v})
  }

  render() {
    const {todoList, currentEdit, todoInput, addTask} = this.state
    return (
      <div className="App">
        <h1>Todo list</h1>
        <button onClick={() => this.setState({addTask: true, type: "newTask"})}>Add task</button>
        {addTask === true ? 
        <InputModal 
          inputUser={todoInput} 
          currentEdit={currentEdit} 
          confirmTask={this.confirmTask} 
          declineTask={this.declineTask}
          handleChange={this.handleChange}
        /> : null}
        <Child 
          taskList={todoList} 
          handleDelete={this.removeTask} 
          handleEdit={this.editTask} 
          handleAddSub={this.addSubList}
        />
      </div>
    )
  };
};

export default App;

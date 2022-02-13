import "./App.css";
import Input from "./components/Input";
// import TextInput from "./components/Input/TextInput";
// import AddToListButton from "./components/Input/AddToListButton";
import List from "./components/List";
import React, { useState } from "react";
// import ListItem from "./components/List/ListItem";
// import ToDoText from "./components/List/ListItem/ToDoText";
// import DeleteButton from "./components/List/ListItem/DeleteButton";
/*
COMPONENTS:
TOP LEVEL: APP
  Input
    TextInput
    AddToListButton
  List
    ListItem
      ToDoText
      DeleteButton


App

const toDoListData = [];
state - toDoList, setToDoList = useState(toDoListData)
  list of to dos
behaviour

  add item to list
  remove item from list
  render an Input and List
Input
state - inputText, setInputText = useState("");

  text
props = {text}

add function
behaviour

render an input field and a button ✅
change of input text will update state of this component
button click will call the add function from props with value of input

List
props = {}

array of to dos
delete function
behaviour

render an array of ListItems in a ul
List item = {input.text}
props =

text
delete function
behaviour

render the text and a button
when the button is clicked call the delete function to delete item at this index

*/

function App() {
  const toDoListData = [];
  const [toDoList, setToDoList] = useState(toDoListData);
  console.log(toDoList);
  return (
    <div className="App">
      <Input toDoList={toDoList} setToDoList={setToDoList} />
      <hr />
      <List toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;

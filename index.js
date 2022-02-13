import DeleteButton from "./DeleteButton";
import ToDoText from "./ToDoText";
function ListItem({ listItem, listItemKey, setToDoList, toDoList }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-evenly" }}>
      <ToDoText text={listItem} />
      <DeleteButton
        listItem={listItem}
        listItemKey={listItemKey}
        setToDoList={setToDoList}
        toDoList={toDoList}
      />
    </li>
  );
}
export default ListItem;

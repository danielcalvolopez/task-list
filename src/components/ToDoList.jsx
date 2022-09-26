import AddItem from "./AddItem";
import ToDoListItem from "./ToDoListItem";
import { useState } from "react";
import "./to-do-list.css";

const ToDoList = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editingItemId, setEditingItemId] = useState(undefined);

  const onClickSaveChanges = () => {
    console.log(
      "🚀 ~ file: ToDoList.jsx ~ line 13 ~ onClickSaveChanges ~ onClickSaveChanges"
    );
    setEditingItemId(undefined);
  };

  const handleOnchangeItemLabel = (newValue, itemId) => {
    const newDataSource = [...dataSource].map((item) => {
      const itemCopy = { ...item };
      if (itemId === item.id) {
        itemCopy.label = newValue;
      }
      return itemCopy;
    });
    setDataSource(newDataSource);
  };

  const onClickDelete = (itemId) => {
    const newDataSource = [...dataSource].filter((item) => item.id !== itemId);
    setDataSource(newDataSource);
  };

  const onClickEdit = (itemId) => {
    setEditingItemId(itemId);
  };

  const handleAddNewItem = (value) => {
    const newDataSource = [...dataSource];
    const newItem = { id: newDataSource.length + 1, label: value };
    newDataSource.push(newItem);
    setDataSource(newDataSource);
  };

  return (
    <div className="to-do-list-wrapper">
      <div className="to-do-list-content">
        <AddItem addNewItem={handleAddNewItem} />
        <ul className="to-do-list-list">
          {dataSource.map((item) => (
            <ToDoListItem
              key={item.id}
              item={item}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              onClickSaveChanges={onClickSaveChanges}
              handleOnchangeItemLabel={handleOnchangeItemLabel}
              editingItemId={editingItemId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;

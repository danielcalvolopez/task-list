import { useMemo } from "react";
import "./to-do-list-item.css";

const ToDoListItem = ({
  item,
  editingItemId,
  handleOnchangeItemLabel,
  onClickEdit,
  onClickSaveChanges,
  onClickDelete,
}) => {
  const isEditing = useMemo(
    () => editingItemId === item.id,
    [item, editingItemId]
  );
  return (
    <li
      className="to-do-list-item"
      key={item.id}
      onClick={() => !isEditing && onClickEdit(item.id)}
    >
      {isEditing ? (
        <input
          className="to-do-list-item-input"
          value={item.label}
          onChange={(event) =>
            handleOnchangeItemLabel(event.target.value, item.id)
          }
        />
      ) : (
        item.label
      )}
      {isEditing && (
        <div className="to-do-list-item-actions">
          <button
            className="to-do-list-item__save"
            onClick={onClickSaveChanges}
          >
            SAVE
          </button>
          <button
            className="to-do-list-item__delete"
            onClick={() => onClickDelete(item.id)}
          >
            X
          </button>
        </div>
      )}
    </li>
  );
};

export default ToDoListItem;

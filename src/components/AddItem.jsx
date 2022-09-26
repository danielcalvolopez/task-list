import React, { useState, useMemo } from "react";
import "./add-item.css";

const AddItem = ({ addNewItem }) => {
  const [value, setValue] = useState("");

  const isDisabled = useMemo(() => value.length === 0, [value]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isDisabled) {
      addNewItem(value);
      setValue("");
    }
  };

  const onChange = ({ target: { value } }) => setValue(value);

  return (
    <form className="add-item" onSubmit={onSubmit}>
      <div className="add-item-wrap">
        <input
          className="add-item-input"
          type="text"
          value={value}
          onChange={onChange}
          name="add-item"
          placeholder="task name..."
        />

        <input
          className="add-item-button"
          disabled={isDisabled}
          type="submit"
          value="ADD"
        />
      </div>
    </form>
  );
};

export default AddItem;

import React from "react";
import InputRow from "./InputRow";

function EditItem({ labels, item, isEdit: isVisible, onSubmit: handleSubmit }) {
  return (
    <div
      style={{
        transform: isVisible ? "rotateX(0deg)" : "rotateX(90deg)",
      }}
      className="edit-con"
    >
      <h3>Edit Item</h3>
      <form action="POST">
        {labels.map((label, index) => {
          return (
            label !== "exp" &&
            label && (
              <InputRow
                key={index + label}
                name={label}
                label={label}
                defaultValue={item[label]}
                type={typeof item[label] === "number" ? "number" : "text"}
              />
            )
          );
        })}
        <button onClick={handleSubmit}>Apply Changes</button>
      </form>
    </div>
  );
}

export default EditItem;

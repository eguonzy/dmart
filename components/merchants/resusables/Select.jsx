import React, { useState } from "react";

function Select({
  label,
  name,
  value,
  options,
  group,
  external,
  selectFormulation,
  onChange,
}) {
  const [selectState, setSelectState] = useState(value);
  const handleSelect = ({ target }) => {
    const { value } = target;
    if (onChange) {
      switch (value) {
        case "consumable":
          onChange(1);
          break;
        case "medical device":
          onChange(2);
          break;
        case "medical equipment":
          onChange(3);
          break;

        default:
          onChange();
          break;
      }
    }

    if (selectFormulation) {
      switch (value) {
        case "oral":
          selectFormulation(0);
          break;
        case "rectal":
          selectFormulation(1);
          break;
        case "iv":
          selectFormulation(2);
          break;
        case "im":
          selectFormulation(2);
          break;
        case "im/iv":
          selectFormulation(2);
          break;
        case "sl":
          selectFormulation(3);
          break;
        case "topical":
          selectFormulation(4);
          break;
        case "ene":
          selectFormulation(5);
          break;

        case "id":
          selectFormulation(2);
          break;
        case "intravaginal":
          selectFormulation(6);
          break;
        case "ic":
          selectFormulation(2);
          break;
        case "it":
          selectFormulation(2);
          break;

        default:
          break;
      }
    }
    setSelectState(value);
  };
  return (
    <div className="input-con">
      <label>{label}</label>
      <select onChange={handleSelect} value={selectState} name={name}>
        {group && (
          <>
            {options.map((option) => (
              <option key={option.option} value={option.value}>
                {option.option}
              </option>
            ))}
          </>
        )}

        {!group &&
          options.map((option) => (
            <option key={option.option} value={option.value}>
              {option.option}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;

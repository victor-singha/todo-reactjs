import React, { useState } from "react";
import ScatterPlotRoundedIcon from "@material-ui/icons/ScatterPlotRounded";
import AddIcon from "@material-ui/icons/Add";
import "../App.css";
import { InputBase, Chip } from "@material-ui/core";

export default function Todos() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (inputData !== "") {
        setItems([...items, inputData]);
        setInputData("");
      }
    }
  };

  const addItem = () => {
    if (inputData !== "") {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((element, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  };

  return (
    <>
      <div className="input">
        <div className="textfield">
          <ScatterPlotRoundedIcon />
          <InputBase
            className="inputbase"
            placeholder="write here"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <AddIcon className="add" onClick={addItem} />
        </div>
      </div>
      <div className="itemHolder">
        {items.map((element, ind) => {
          return (
            <div className="item" key={ind}>
              <Chip
                icon={<ScatterPlotRoundedIcon />}
                label={element}
                onDelete={() => deleteItem(ind)}
                color="primary"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

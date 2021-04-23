import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ScatterPlotRoundedIcon from "@material-ui/icons/ScatterPlotRounded";
import "../App.css";
import { borders } from "@material-ui/system";
export default function Todos() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

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
          <TextField
            variant="outlined"
            label="Add Todo"
            value={inputData}
            id="standard-size-small"
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <Button color="primary" variant="contained" onClick={addItem}>
          Add Todo
        </Button>
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

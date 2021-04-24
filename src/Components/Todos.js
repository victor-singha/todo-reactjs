import React, { useState, useEffect } from "react";
import ScatterPlotRoundedIcon from "@material-ui/icons/ScatterPlotRounded";
import AddIcon from "@material-ui/icons/Add";
import "../App.css";
import { InputBase, Chip } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

export default function Todos() {
  //get data from local
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

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
  const deleteAll = () => {
    setItems([]);
  };

  //add data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="input">
          <div className="textfield">
            <IconButton>
              <ScatterPlotRoundedIcon className="add" />
            </IconButton>

            <InputBase
              className="inputbase"
              placeholder="write todo here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <IconButton aria-label="menu">
              <AddIcon className="add" onClick={addItem} />
            </IconButton>
          </div>
          <IconButton
            color="secondary"
            aria-label="menu"
            onClick={() => deleteAll()}
          >
            <DeleteOutlineIcon className="deleteAll" />
          </IconButton>
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
                  variant="default"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

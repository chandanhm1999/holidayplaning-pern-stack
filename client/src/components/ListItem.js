import React, { useState } from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import Model from "./Model";

const ListItem = ({ task, getData }) => {
  const [showModel, setShowModel] = useState(false);

  const deleteItem = async() => {
    try {
      const responce = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: 'DELETE',
      })
      if (responce.status === 200) {
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress}/>
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModel(true)}>EDIT</button>
        <button className="delete" onClick={deleteItem}>DELETE</button>
      </div>
      {showModel && <Model mode={'edit'} setShowModel={setShowModel} task={task} getData={getData}/>}
    </li>
  );
};

export default ListItem;

import { useState } from "react";
import { useCookies } from "react-cookie";

const Model = ({ mode, setShowModel, task, getData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null); //for creating cookies
  const editMode = mode === "edit" ? true : false;

  // edit mode
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email, //For edting the task da!
    title: editMode ? task.title : null, //For edting the task da!
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date(),
  });

  // posting to database!

  const postData = async (e) => {
    e.preventDefault();

    try {
      const responce = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (responce.status === 200) {
        //error handling!
        console.log("Worked");
        setShowModel(false);
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //editing the todo
  const editData = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (responce.status === 200) {
        //error handling!
        console.log("Worked");
        setShowModel(false);
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // delete a todo

  // For defining a title and progress
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-item-conatiner">
          <h3 className="mode_header">Let's {mode} you a Plan</h3>
          <button onClick={() => setShowModel(false)}>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={data.title} //then implementing here
            onChange={handleChange}
          />
          <br />
          <label for="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress} //progress implementing after declearing
            onChange={handleChange}
          />
          <input
            className={mode}
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default Model;

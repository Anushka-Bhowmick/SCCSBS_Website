import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [savedTasks, setSavedTasks] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/tasks");
        setTasks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/tasks/savedTasks/ids/${userID}`
        );
        setSavedTasks(response.data.savedTasks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
    fetchSavedTasks();
  }, []);

  const saveTask = async (taskID) => {
    try {
      const response = await axios.put("http://localhost:3001/tasks", {
        taskID,
        userID,
      });
      setSavedTasks(response.data.savedTasks);
    } catch (err) {
      console.log(err);
    }
  };

  const isTaskSaved = (id) => savedTasks.includes(id);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <div>
              <h2>{task.name}</h2>
              <button
                onClick={() => saveTask(task._id)}
                disabled={isTaskSaved(task._id)}
              >
                {isTaskSaved(task._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="instructions">
              <p>{task.instructions}</p>
            </div>
            <img src={task.imageUrl} alt={task.name} />
            <p>Cooking Time: {task.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useGetUserID } from "./hooks/useGetUserID";
import axios from "axios";

export const SavedTasks = () => {
  const [savedTasks, setSavedTasks] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/tasks/savedTasks/${userID}`
        );
        setSavedTasks(response.data.savedTasks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedTasks();
  }, []);
  return (
    <div>
      <h1>Saved Tasks</h1>
      <ul>
        {savedTasks.map((task) => (
          <li key={task._id}>
            <div>
              <h2>{task.name}</h2>
            </div>
            <p>{task.description}</p>
            <img src={task.imageUrl} alt={task.name} />
            <p>Cooking Time: {task.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

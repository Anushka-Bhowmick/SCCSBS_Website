import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateTask = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [task, setTask] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...task.ingredients];
    ingredients[index] = value;
    setTask({ ...task, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...task.ingredients, ""];
    setTask({ ...task, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/tasks",
        { ...task },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Task Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-task">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {task.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={task.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={task.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={task.cookingTime}
          onChange={handleChange}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

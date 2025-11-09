import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "Oregano",
    "Tomatoes",
  ]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="main">
      <form action={addIngredient} className="ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <input className="add-btn" type="submit" value="+ Add ingredient" />
      </form>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
}

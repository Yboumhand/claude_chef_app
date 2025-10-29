import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "Oregano",
    "Tomatoes",
  ]);

  function handleSubmit(event) {
    event.preventDefault(); // don't reload the page
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="main">
      <form
        onSubmit={handleSubmit}
        action=""
        method="get"
        className="ingredient-form"
      >
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

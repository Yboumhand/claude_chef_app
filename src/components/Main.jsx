import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromGemini } from "../ai"; // import gemini model

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  // we've add the async keyword here plus the await keyword below, because we're returnning a promise

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkdown);
  }

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
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ingredientsListItems={ingredientsListItems}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default function IngredientsList(props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe} disabled={props.isLoading}>
            {props.isLoading ? "Generating..." : "Get a recipe"}
          </button>
        </div>
      )}
      {props.error && <p className="error-message">{props.error}</p>}
    </section>
  );
}

export default function Main() {
  function handleClick() {
    console.log("You clicked the logo!");
  }

  return (
    <main className="main">
      <form action="" method="get" className="ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Ingredient"
          type="text"
          placeholder="e.g. oregano"
        />
        <input
          onClick={handleClick}
          className="add-btn"
          type="submit"
          value="+ Add ingredient"
        />
      </form>
    </main>
  );
}

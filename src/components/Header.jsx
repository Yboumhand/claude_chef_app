export default function Header(props) {
  function handleMouseOver() {
    console.log("You hovered over the logo!");
  }
  return (
    <header className="header">
      <img
        onMouseEnter={handleMouseOver}
        className="chef-claude-logo"
        src={props.img}
        alt="Chef Claude logo"
      />
      <p className="header-title">{props.title}</p>
    </header>
  );
}

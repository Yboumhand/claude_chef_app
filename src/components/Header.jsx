export default function Header(props) {
  return (
    <header className="header">
      <img
        className="chef-claude-logo"
        src={props.img}
        alt="Chef Claude logo"
      />
      <p className="header-title">{props.title}</p>
    </header>
  );
}

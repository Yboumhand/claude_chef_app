import React from "react";

export default function Header(props) {
  return (
    <header>
      <img
        className="chef-claude-logo"
        src={props.chefClaudeLogo}
        alt="Chef Claude logo"
      />
      <p className="header-title">{props.title}</p>
    </header>
  );
}

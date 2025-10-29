import Header from "./components/Header";
import Main from "./components/Main";
import chefClaudeLogo from "./images/chef-claude-icon.png";
import React from "react";
import "./App.css";

export default function App() {
  return (
    <main>
      <Header img={chefClaudeLogo} title="Chef Claude" />
      <Main />
    </main>
  );
}

// import Header from "./components/Header";
// import Main from "./components/Main";
// import chefClaudeLogo from "./images/chef-claude-icon.png";
import "./App.css";
import React from "react";
import padsData from "./pads";

export default function App(props) {
  const [pads, setPads] = React.useState(padsData);
  const btnElements = pads.map((pad) => <button key={pad.id}></button>);
  const isDarkMode = props.darkMode;
  const styles = {
    backgroundColor: isDarkMode ? "#222" : "#ccc",
  };

  return (
    <div className="pad-container">
      <main style={styles}>{btnElements}</main>
    </div>
  );
}

// <main>
//   <Header img={chefClaudeLogo} title="Chef Claude" />
//   <Main />
// </main>

// import Header from "./components/Header";
// import Main from "./components/Main";
// import chefClaudeLogo from "./images/chef-claude-icon.png";

import "./App.css";
import React from "react";
import padsData from "./pads";
import Pad from "./components/Pad";

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData);

  function toggle() {
    console.log(`button clicked!`);
  }

  const styles = {
    backgroundColor: darkMode ? "#222" : "#ccc",
  };

  return (
    <div className="pad-container">
      <main style={styles}>
        {pads.map((pad) => (
          <Pad key={pad.id} color={pad.color} on={pad.on} toggle={toggle} />
        ))}
      </main>
    </div>
  );
}

// <main>
//   <Header img={chefClaudeLogo} title="Chef Claude" />
//   <Main />
// </main>

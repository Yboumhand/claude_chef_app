import Header from "./components/Header";
import Main from "./components/Main";
import chefClaudeLogo from "./images/chef-claude-icon.png";
import "./App.css";

export default function App() {
  return (
    <>
      <Header chefClaudeLogo={chefClaudeLogo} title="Chef Claude" />
      <Main />
    </>
  );
}

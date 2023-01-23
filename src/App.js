import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { useState } from "react";
import "./app.scss";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="App">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default App;

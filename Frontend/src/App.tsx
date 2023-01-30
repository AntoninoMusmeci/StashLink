import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";
import { LabelProvider } from "./context";
import "./app.scss";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  return (
    <LabelProvider>
      <div className="App">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Content />
      </div>
    </LabelProvider>
  );
}

export default App;

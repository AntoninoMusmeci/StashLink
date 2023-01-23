import React, { useState } from "react";
import { FaInbox } from "react-icons/fa";

function Sidebar({showSidebar, setShowSidebar}) {
  const [selected, setSelected] = useState(true);

  return (
    <div
      className={showSidebar ? "sidebar_wrapper" : ""}
      onClick={() => setShowSidebar(false)}
    >
      <div
        className={showSidebar ? "sidebar show" : "sidebar"}
        data-testid="sidebar"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="sidebar__generic">
          <li
            className={selected === "SAVES" ? "active" : ""}
            onClick={() => setSelected("SAVES")}
          >
            <span>
              <FaInbox />
            </span>
            <span> Saves </span>
          </li>
        </ul>
        <div className="sidebar__middle">
          <h2> Filters </h2>
        </div>
        <div className="sidebar__middle">
          <h2> Labels </h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

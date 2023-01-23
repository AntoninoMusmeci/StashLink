import React, { useState } from "react";
import { FaInbox, FaChevronDown, FaPlus } from "react-icons/fa";
import {
  HiOutlineArchive,
  HiOutlineVideoCamera,
  HiBookOpen,
  HiOutlineStar,
} from "react-icons/hi";
import { GrArticle } from "react-icons/gr";
function Sidebar({ showSidebar, setShowSidebar }) {
  const [selected, setSelected] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
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
            className={selected === "SAV" ? "active" : ""}
            onClick={() => setSelected("SAV")}
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
        <ul className="sidebar__generic">
          <li
            className={selected === "FAV" ? "active" : ""}
            onClick={() => setSelected("FAV")}
          >
            <span>
              <HiOutlineStar />
            </span>
            <span> Favorites </span>
          </li>
          <li
            className={selected === "ART" ? "active" : ""}
            onClick={() => setSelected("ART")}
          >
            <span>
              <HiBookOpen />
            </span>
            <span> Articles </span>
          </li>
          <li
            className={selected === "VID" ? "active" : ""}
            onClick={() => setSelected("VID")}
          >
            <span>
              <HiOutlineVideoCamera />
            </span>
            <span> Videos </span>
          </li>
          <li
            className={selected === "ARC" ? "active" : ""}
            onClick={() => setSelected("ARC")}
          >
            <span>
              <HiOutlineArchive />
            </span>
            <span> Archive </span>
          </li>
        </ul>
        <div
          className="sidebar__middle"
          onClick={() => setShowLabels(!showLabels)}
        >
          <h2> Labels </h2>
          <span className="sidebar__middle-labels">
            <FaChevronDown className={!showLabels ? "labels-hide" : ""} />
            <FaPlus
              onClick={(e) => {
                e.stopPropagation();
                console.log("add label");
              }}
            />
          </span>
        </div>
        {/*TODO: Move The list of label in another component */}
        {showLabels && (
          <ul className="sidebar__generic">
            <li
            className={selected === "FAV" ? "active" : ""}
            onClick={() => setSelected("FAV")}
          >
            <span>
              <HiOutlineStar />
            </span>
            <span> Favorites </span>
          </li>
          <li
            className={selected === "ART" ? "active" : ""}
            onClick={() => setSelected("ART")}
          >
            <span>
              <HiBookOpen />
            </span>
            <span> Articles </span>
          </li>
          <li
            className={selected === "VID" ? "active" : ""}
            onClick={() => setSelected("VID")}
          >
            <span>
              <HiOutlineVideoCamera />
            </span>
            <span> Videos </span>
          </li>
          <li
            className={selected === "ARC" ? "active" : ""}
            onClick={() => setSelected("ARC")}
          >
            <span>
              <HiOutlineArchive />
            </span>
            <span> Archive </span>
          </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

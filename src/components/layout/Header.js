import React, { useState } from "react";
import { HiOutlineLightBulb, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

function Header({showSidebar, setShowSidebar}) {
  const SaveUrls = () => {
    console.log(SaveUrls);
  };
  const [account, setAccount] = useState("Antonino");

  return (
    <header className="header" data-testid="header">
      <nav className="settings">
        <div className="settings__left">
          <ul>
            <li
              onClick={() => setShowSidebar(!showSidebar)}
              className="settings__button"
            >
              {!showSidebar ? <HiOutlineBars3 /> : <HiOutlineXMark />}
            </li>

            <li>StashLink</li>
            <li >
              <div className="settings__search-bar">
                <HiOutlineSearch></HiOutlineSearch>
                <input placeholder="Search..." />
              </div>
            </li>
          </ul>
        </div>
        <div className="settings__right">
          <ul>
            <li className="settings__button" onClick={SaveUrls}>
              +
            </li>
            <li className="settings__button">
              <HiOutlineLightBulb></HiOutlineLightBulb>
            </li>
            <li className="settings__button">
              {account && <span className="settings_hero">{account[0]}</span>}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

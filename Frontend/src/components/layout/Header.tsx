import React, { useState } from "react";
import { HiOutlineLightBulb, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { HeaderProps } from "./types/type";
import Modal from "../Modal";
import AddUrl from "../AddUrl";
function Header({ showSidebar, setShowSidebar }: HeaderProps) {
  const [account, setAccount] = useState("Antonino");
  const [showModal, setShowModal] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const SaveUrls = () => {
    console.log("New url saved", newUrl);
  };
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
            <li>
              <div className="settings__search-bar">
                <HiOutlineSearch></HiOutlineSearch>
                <input placeholder="Search..." />
              </div>
            </li>
          </ul>
        </div>
        <div className="settings__right">
          <ul>
            <AddUrl />
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

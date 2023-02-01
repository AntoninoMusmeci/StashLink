import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Urlcard from "../Urlcard";
import { UrlInfo } from "./types/type";
import { UrlContext } from "../../context/UrlContext";
function Content() {
  const { urls } = useContext(UrlContext);

  return (
    <div className="content">
      <div className="content__cards-wrapper">
        {urls.map((url: { image: string; title: string }) => (
          <Urlcard title={url.title || ""} image={url.image || ""} />
        ))}
      </div>
    </div>
  );
}

export default Content;

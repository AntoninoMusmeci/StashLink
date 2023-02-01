import React, { useState, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { UrlInfo } from "./layout/types/type";
import axios from "axios";
import { UrlContext } from "../context";
type Props = {};
const isValidHttpUrl = (s: string) => {
  let url;
  try {
    url = new URL(s);
  } catch (e) {
    return false;
  }
  return /https?/.test(url.protocol);
};

const AddUrl = (props: Props) => {
  const { addUrl } = useContext(UrlContext);
  const [urlInfo, setUrlInfo] = useState<UrlInfo>();
  const saveUrl = () => {
    if (isValidHttpUrl(newUrl)) {
      console.log(newUrl);

      // const baseURL = `http://localhost:3001/newspaper/?url=${newUrl}`;
      // axios.get<UrlInfo>(baseURL).then((response) => {
      //   setUrlInfo(response.data)
      // })
      //create the urls object with info returned from axios call
      const urlObject: UrlInfo = {
        title: "test title",
        image:
          "https://openai.com/content/images/size/w1400/2022/09/dall-e-no-waitlist.jpg",
      };
      addUrl(urlObject);
    }
    console.log("save url");
  };

  const [newUrl, setNewUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <FaPlus
        onClick={(e: React.MouseEvent<SVGElement>) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        confirmButtonHandler={saveUrl}
      >
        <div>
          <input
            onChange={(e) => {
              setNewUrl(e.target.value);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddUrl;

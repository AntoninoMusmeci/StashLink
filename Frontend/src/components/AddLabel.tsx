import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { useContext } from "react";
import { LabelContext } from "../context";
type Props = {};

const AddLabel = (props: Props) => {
  const {addLabel} = useContext(LabelContext)
  const saveLabel = () => {
    if (newLabel) {
      console.log(newLabel);
      addLabel(newLabel)
    }
    console.log("save label");
  };
  const [showModal, setShowModal] = useState(false);
  const [newLabel, setNewLabel] = useState("");
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
        confirmButtonHandler={saveLabel}
      >
        <div>
          <input
            onChange={(e) => {
              setNewLabel(e.target.value);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddLabel;

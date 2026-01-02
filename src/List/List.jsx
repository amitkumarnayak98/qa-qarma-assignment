import React from "react";
import addLogo from "../Images/Group 182.png";
import { useNavigate } from "react-router-dom";
import "./List.css";
import Card from "../Common/Card";

const List = ({ users, editModeOn, handleDelete, setEditmodestate }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="qa_qarma_list">
        <div className="qa_qarma_list_header">
          Have a look on your configured projects
          <button
            onClick={() => {
              navigate("/project");
              setEditmodestate(false)
            }}
            className="qa_qarma_list_button"
          >
            <div className="qa_qarma_list_button_image">
              <img src={addLogo} alt="" className="button_logo" />
            </div>
            <div className="qa_qarma_list_button_desc">Create new</div>
          </button>
        </div>
        <div className="qa_qarma_list_card">
          {users.map((item, index) => {
            return (
              <Card
                key={index}
                id={index}
                editModeOn={editModeOn}
                handleDelete={handleDelete}
                setEditmodestate={setEditmodestate}
                item={item}
              />
            );
          })}
        </div>
        ;
      </div>
    </>
  );
};

export default List;

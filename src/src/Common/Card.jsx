import React, { useState } from "react";
import progressBar from "../Images/Group 555.png";
import Datetime from "./Datetime";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import LongMenu from "./LongMenu";

const Card = (props) => {
  let navigate = useNavigate();

  const handleEdit = (item) => {
    props.editModeOn(item);
    navigate("/project");
    props.setEditmodestate(true);
  };

  return (
    <>
      <div className="qa_qarma_cards">
        <div className="qa_qarma_card">
          <div className="qa_qarma_card_image">
            <img src={props.item.profile} alt="" className="image_cardd_qa" />
          </div>

          <div className="dropdown-btn">
            <LongMenu
              props={props}
              handleEdit={handleEdit}
              handleClassChange={props.handleClassChange}
            />
          </div>

          <div className="qa_qarma_title">{props.item.name}</div>
          <div className="qa_qarma_description">{props.item.description}</div>
          <div className="qa_qarma_cards_owner">Owner - Amit Kumar Nayak</div>
          <div className="qa_qarma_cards_date">
            Created on
            <div className="qa_qarma_cards_dateandtime">
              <Datetime />
            </div>
          </div>
          <div className="qa_qarma_card_tags">{props.item.limits}</div>
          <div className="qa_qarma_cards_progress">
            <img src={progressBar} alt="" className="grpah_qa" />
            <p className="progress_text">Test execution rate</p>
          </div>
          <div className="qa_qarma_option_checked">
            {props.item.visibilityValue}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

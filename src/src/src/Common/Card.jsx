import React from "react";
import progressBar from "../Images/Group 555.png";
import hamburger from "../Images/Group 183.png";
import Datetime from "./Datetime";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="qa_qarma_cards">
        <div className="qa_qarma_card">
          <div className="qa_qarma_card_image">
            <img src={props.profile} alt="" className="image_cardd_qa" />
          </div>
          <img src={hamburger} alt="" className="hamburger_menu" />
          <div className="qa_qarma_title">{props.name}</div>
          <div className="qa_qarma_description">{props.description}</div>
          <div className="qa_qarma_cards_owner">Owner - Amit Kumar Nayak</div>
          <div className="qa_qarma_cards_date">
            Created on{" "}
            <div className="qa_qarma_cards_dateandtime">
              <Datetime />
            </div>
          </div>
          <div>{props.limits}</div>
          <div className="qa_qarma_cards_progress">
            <img src={progressBar} alt="" className="grpah_qa" />
            <p className="progress_text">Test execution rate</p>
          </div>
          <div className="qa_qarma_option_checked">{props.visibility}</div>
        </div>
      </div>
    </>
  );
};

export default Card;

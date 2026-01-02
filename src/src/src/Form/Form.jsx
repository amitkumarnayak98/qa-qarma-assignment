import React, { useState } from "react";
import bannerLogo from "../Images/Group 522.png";
import addImage from "../Images/Group 358.png";
import multiLogo from "../Images/Group 193.png";
import singleLogo from "../Images/Group 190.png";
import LimitTags from "../Common/LimitTags";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import ComboBox from "../Common/ComboBox";

const Form = ({ setUsers }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    limits: [],
    visibility: [],
    profile: "",
  });

  const imageHandler = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      setFormData((prev) => {
        return {
          ...prev,
          profile: e.target.result,
        };
      });
    };
    reader.readAsDataURL(file);
  };

  const checkboxHandler = (e) => {
    let checked = e.target.id;

    if (formData.visibility.includes(checked)) {
      let newChecked = formData.visibility.filter((val) => val !== checked);
      setFormData({ ...formData, visibility: newChecked });
    } else {
      setFormData({
        ...formData,
        visibility: [...formData.visibility, checked],
      });
    }
  };

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("form created");
    setUsers((prev) => {
      return [...prev, formData];
    });
  };

  return (
    <>
      <div className="qa_qarma_form">
        <div className="qa_qarma_form_header">Create new project</div>
        <div className="qa_form_Image_upload">
          <label for="add-image" className="upload_placeholder">
            Add Icon <br />
          </label>
          <img
            src={formData.profile === "" ? addImage : formData.profile}
            alt=""
            className="addImage_logo"
          />
          <input
            type="file"
            id="add-image"
            name="profile"
            className="image_upload"
            accept="image/*"
            onChange={imageHandler}
          />
        </div>
        <div className="qa_qarma_form_field">
          <div className="form_field_one">
            <label className="input_label" for id="name">
              What shall we call it <br />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={inputEvent}
              value={formData.name}
              className="input_field"
            />
            <br />
            <label className="input_label" for id="name">
              What this project is about(optional) <br />
            </label>

            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="A sample project for testing API"
              onChange={inputEvent}
              value={formData.description}
              className="input_field_desc"
            />

            <br />
            <div className="custom_label">
              <label className="input_label">Add tags(s)</label>
              <div className="input_custom_label">
                <LimitTags setFormData={setFormData} />
              </div>
              <div>
                <ComboBox />
              </div>
            </div>
          </div>
          <div>
            <label className="input_label">Visibility</label>
            <label className="input_label_disabled">
              (When a project is set to personal, It can only be viewed or
              joined by Invitation.)
            </label>
          </div>
          <div className="qa_qarma_form_radio">
            <div className="qa_qarma_form_container">
              <label for="public" className="form_container_one">
                <img
                  for="public"
                  src={multiLogo}
                  alt=" "
                  className="multiPersonLogo"
                />
              </label>
              <div className="container">
                <label for="public">Public</label>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="public"
                    name="visibility"
                    className="blue_checkbox"
                    value={formData.visibility}
                    onChange={checkboxHandler}
                  />
                </div>
              </div>
            </div>
            <div className="qa_qarma_form_container">
              <label for="personal" className="form_container_one">
                <img src={singleLogo} alt=" " className="multiPersonLogo" />
              </label>
              <div className="container">
                <label for="personal">Personal</label>

                <div className="checkbox_one">
                  <input
                    type="checkbox"
                    name="visibility"
                    id="personal"
                    className="blue_checkbox"
                    onChange={checkboxHandler}
                    value={formData.visibility}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="qa_qarma_banner">
          <img src={bannerLogo} alt="" className="banner_image" />
        </div>
        <div className="qa_qarma_button">
          <div>
            <button className="outlined_button">Cancel</button>
          </div>
          <div>
            <button
              className="contained_button"
              onClick={() => {
                navigate("/list");
              }}
            >
              Save &amp; Continue
            </button>
          </div>

          <div>
            <button className="contained_button" onClick={onSubmit}>
              Save &amp; Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

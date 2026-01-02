import React from "react";
import personLogo from "../Images/Ellipse 2.png";
import bannerLogoImg from "../Images/Group 456.png";
import speakerLogo from "../Images/Group 462.png";
import arrowLogo from "../Images/Union.png";
import profileImg from "../Images/Group 453.png";
import tourImg from "../Images/Group 452.png";
import exploreImg from "../Images/Group 449.png";
import projectImg from "../Images/Group 451.png";
import scenarioImg from "../Images/Group 455.png";
import VideoCard from "../Common/VideoCard";
import VideosData from "../data/VideosData";
import { BlogsData } from "../data/BlogsData";
import BlogCard from "../Common/BlogCard";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className="qa_qarma_dashboard">
      <div className="qa_qarma_header_ads">
        <div className="qa_qarma_speaker_ads_logo">
          <img src={speakerLogo} alt="" className="speaker_logo" />
        </div>
        <div className="qa_qarma_speaker_ads_descriptions">
          <div className="qa_qarma_speaker_ads_header">
            Introducing data provider! Quick. Easy to use. Reliable
          </div>
          <div className="qa_qarma_speaker_ads_desc">
            Now, you can create data easily for parameters, and you can add it
            with a click to the test case and request level. It's never been
            easier to scale up the data limits so quickly.
          </div>
        </div>
        <div className="qa_qarma_speaker_ads_navigatior"  onClick={() => {
                navigate("/knowledge");
              }}>
          See how it works
          <img src={arrowLogo} alt="" className="arrow_logo" />
        </div>
      </div>
      <div className="qa_qarma_dashboard_header">
        <fieldset className="qa_qarma_dashboard_fieldset">
          {/* <div className="qa_qarma_dashboard_legends"> */}
          <legend className="qa_qarma_dashboard_legend">
            <div className="qa_qarma_dashboard_person_logo">
              <img src={personLogo} alt="" className="person_logo" />
            </div>
            <div className="qa_qarma_dashboard_personLogo_details">
              Welcome Aboard. Getting started! Feel free to explore!
            </div>
          </legend>
          <div className="qa_qarma_dashboard_banner">
            <img src={bannerLogoImg} alt="" className="banner_logo_img" />
          </div>
          <div className="qa_qarma_dashboard_buttons">
            <button
              onClick={() => {
                navigate("/project");
              }}
            >
              <div className="qa_qarma_dashboard_profile">
                <img src={profileImg} alt="" className="profile_img" />
              </div>
              <div>Complete your profile</div>
            </button>
            <button  onClick={() => {
                navigate("/knowledge");
              }}>
              <div className="qa_qarma_dashboard_profile"  onClick={() => {
                navigate("/knowledge");
              }}>
                <img src={tourImg} alt="" className="profile_img" />
              </div>
              <div >Take a tour</div>
            </button>
            <button  onClick={() => {
                navigate("/list");
              }}>
              <div className="qa_qarma_dashboard_profile">
                <img src={exploreImg} alt="" className="profile_img" />
              </div>
              <div>Explore Sample Project</div>
            </button>
            <button  onClick={() => {
                navigate("/project");
              }}>
              <div className="qa_qarma_dashboard_profile">
                <img src={projectImg} alt="" className="profile_img" />
              </div>
              <div>Create your first project</div>
            </button>
            <button>
              <div className="qa_qarma_dashboard_profile">
                <img src={scenarioImg} alt="" className="profile_img" />
              </div>
              <div>Create your first scenario</div>
            </button>
            <div className="qa_qarma_project_assign_desc">
              <div>Project has been assigned</div>
              <div className="fieldset_view_all"  onClick={() => {
                navigate("/list");
              }}>View all projects</div>
            </div>
          </div>
          {/* </div> */}
        </fieldset>
        <fieldset className="qa_qarma_videos_fieldset">
          <legend className="qa_qarma_videos_legend">
            <div>Check these tutorials for better understanding</div>
            <div className="fieldset_view_all"  onClick={() => {
                navigate("/knowledge");
              }}>View All </div>
          </legend>

          <div className="qa_qarma_videos_card">
            {VideosData.map((video) => (
              <VideoCard
                key={video.id}
                url={video.url}
                title={video.title}
                category={video.category}
              />
            ))}
          </div>
        </fieldset>
      </div>
      <div className="qa_qarma_dashboard_blogs">
        <div className="qa_qarma_dashboard_blogs_header">
          Hey Sanjith! Have you checked this articles
        </div>
        <div className="qa_qarma_dashboard_blogs_containers">
          {BlogsData.map((blog) => (
            <div className="qa_qarma_dashboard_blogs_container">
              <BlogCard
                key={blog.id}
                imgSrc={blog.imgScr}
                title={blog.title}
                description={blog.description}
                link={blog.link}
                category={blog.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

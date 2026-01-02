import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Form/Form";
import List from "./List/List";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Singup from "./SignUp/Singup";
import { useEffect } from "react";
import axios from "axios";
import Knowledge from "./Knowledge/Knowledge";
// import Sidebar from './Sidebar/Sidebar';

const initialState = {
  id: 0,
  name: "",
  description: "",
  limits: [],
  visibility: {
    public: false,
    personal: false,
  },
  visibilityValue: "",
  profile: "",
};

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [editmodestate, setEditmodestate] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const editModeOn = (item) => {
    setFormData(item);
  };

  const handleDelete = (id) => {
    const filteredData = users.filter((user) => user.id !== id);
    setUsers(filteredData);
  };

  const createUser = () => {
    const newUser = { ...formData, id: nanoid() };
    setUsers((prev) => {
      return [...prev, newUser];
    });
    setFormData(initialState);
  };

  const getData = () => {
    axios
      .get("https://mocki.io/v1/5cdb7715-9f53-4937-ad35-c70270bf1707")
      .then(function (response) {
        // handle success
        // console.log(response);
        // setVideosData(response.data.VideosData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getBlogs = () => {
    axios

      .get("https://mocki.io/v1/7a4eed14-d180-47bc-894b-6dd5e47b2b6a")
      .then(function (response) {
        // handle success
        // setBlogsData(response.data.BlogsData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.profile) {
      errors.profile = "Image is required";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    }
    return errors;
  };

  const updateDetails = (e) => {
    e.preventDefault();
    let updatedData = users.map((user) => {
      if (user.id === formData.id) {
        return {
          ...formData,
          name: formData.name,
          description: formData.description,
          limits: formData.limits,
          visibility: {
            public: formData.visibility.public,
            personal: formData.visibility.personal,
          },
          visibilityValue: formData.visibilityValue,
          profile: formData.profile,
        };
      } else {
        return user;
      }
    });
    navigate("/list");

    setUsers(updatedData);
    setFormData(initialState); //for clearing the input values
  };

  return (
    <div className="qa_qarma">
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route
          path="/project"
          element={
            <Form
              formData={formData}
              setFormData={setFormData}
              setFormErrors={setFormErrors}
              editModeOn={editModeOn}
              editmodestate={editmodestate}
              setEditmodestate={setEditmodestate}
              createUser={createUser}
              updateDetails={updateDetails}
            />
          }
        />
        <Route
          path="/list"
          element={
            <List
              users={users}
              editModeOn={editModeOn}
              handleDelete={handleDelete}
              setEditmodestate={setEditmodestate}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/" element={<Singup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

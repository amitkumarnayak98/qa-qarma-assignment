import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Form/Form";
import List from "./List/List.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)

  return (
      <div className="qa_qarma">
        <Header />
        <Routes>
          <Route path="/" element={<Form setUsers={setUsers} />} />
          <Route path="/list" element={<List users={users} />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

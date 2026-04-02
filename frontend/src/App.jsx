import "./App.css";
import TableList from "./components/TablelList.jsx";
import ModalForm from "./components/ModalForm.jsx";
import NavBar from "./components/NAVBAR.JSX";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedClients, setSearchedClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/clients/search?q=${searchTerm}`,
      );
      setSearchedClients(result.data);
    };
    fetchData();
  }, [searchTerm]);

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = async (clientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          clientData,
        );
        console.log("new client added : ", response);
      } catch (err) {
        console.error("Error adding client", err);
      }
    } else {
      console.log();
    }
  };

  return (
    <>
      <NavBar
        onOpen={() => handleOpen("add")}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <TableList
        handleOpen={() => handleOpen("edit")}
        searchedClients={searchedClients}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </>
  );
}

export default App;

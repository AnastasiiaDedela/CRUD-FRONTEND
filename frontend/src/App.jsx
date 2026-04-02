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
  const [clientData, setClientData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/clients/search?q=${searchTerm}`,
      );
      setSearchedClients(result.data);
    };
    fetchData();
  }, [searchTerm, refresh]);

  const handleOpen = (mode, client) => {
    setIsOpen(true);
    setModalMode(mode);
    setClientData(client);
  };

  const handleSubmit = async (mode, clientData) => {
    try {
      if (mode === "add") {
        await axios.post("http://localhost:3000/api/clients", clientData);
      } else {
        await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          clientData,
        );
      }
      setRefresh((prev) => !prev);
    } catch (err) {
      console.error(
        `Error ${mode === "add" ? "adding" : "editing"} client`,
        err,
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?",
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setRefresh((prev) => !prev);
      } catch (err) {
        console.error("Error deleting client", err);
      }
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
        handleOpen={handleOpen}
        searchedClients={searchedClients}
        handleDelete={handleDelete}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
        clientData={clientData}
      />
    </>
  );
}

export default App;

import "./App.css";
import TableList from "./components/TablelList.jsx";
import ModalForm from "./components/ModalForm.jsx";
import NavBar from "./components/NAVBAR.JSX";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} />
      <TableList handleOpen={() => handleOpen("edit")} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
      />
    </>
  );
}

export default App;

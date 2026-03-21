import * as clientServices from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientServices.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error fetching clients", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientServices.createClient(clientData);
    res.status(200).json(newClient);
  } catch (err) {
    console.error("Error creating client", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updataedData = req.body;
    const updatedClient = await clientServices.updateClient(id, updataedData);
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (err) {
    console.error("Error updating clients", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting client with ID:", req);
    const deletedData = req.body;
    const deletedClient = await clientServices.deleteClient(id, deletedData);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(deletedClient);
  } catch (err) {
    console.error("Error deleting clients", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

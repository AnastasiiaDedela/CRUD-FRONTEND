import * as clientServices from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientServices.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error fetching clients", clients);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientServices.createClient(clientData);
    res.status(200).json(newClient);
  } catch (err) {
    console.error("Error fetching clients", client);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const updateClient = async (req, res) => {
//   try {
//   } catch (err) {}
// };

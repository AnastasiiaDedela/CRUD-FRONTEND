import express from "express";

import * as clientController from "../controllers/clientController.js";
export const router = express.Router();
router.get("/clients", clientController.getClients);
router.post("/clients", clientController.createClient);
router.put("/clients/:id", clientController.updateClient);

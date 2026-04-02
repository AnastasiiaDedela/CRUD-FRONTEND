import { query } from "../db.js";

export const getClients = async () => {
  const rows = await query("SELECT * FROM clients_tb ORDER BY id DESC");
  return rows;
};

export const createClient = async (clientData) => {
  const { name, location, job, rate, isactive } = clientData;
  const { rows } = await query(
    " INSERT INTO clients_tb (name, location, job, rate, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, location, job, rate, isactive],
  );
  return rows[0];
};

export const updateClient = async (id, updatedData) => {
  const { name, location, job, rate, isactive } = updatedData;
  const { rows } = await query(
    "UPDATE clients_tb SET name = $1, location = $2, job = $3, rate = $4, isactive = $5 WHERE id = $6 RETURNING *",
    [name, location, job, rate, isactive, id],
  );
  return rows[0];
};

export const deleteClient = async (id) => {
  const { rows } = await query(
    "DELETE FROM clients_tb WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0];
};

export const searchClients = async (queryStr) => {
  const { rows } = await query(
    "SELECT * FROM clients_tb WHERE name ILIKE $1 OR location ILIKE $1 OR job ILIKE $1 ORDER BY id DESC",
    [`%${queryStr}%`],
  );
  return rows;
};

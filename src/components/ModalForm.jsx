import { useState } from "react";

export default function ModalForm({ isOpen, onClose, mode }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState(null);
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit client" : "Client details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            <label className="input w-full mb-4">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input w-full mb-4">
              Job
              <input
                type="text"
                className="grow"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>
            <label className="input w-full mb-4">
              Location
              <input
                type="text"
                className="grow"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between w-full gap-2">
              <label className="input">
                Rate
                <input
                  type="number"
                  className="grow"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                className="select"
                value={status ? "Active" : "Inactive"}
                onChange={handleStatusChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "edit" ? "save changes" : "add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

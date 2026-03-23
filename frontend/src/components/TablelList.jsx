export default function TableList({ handleOpen, searchedClients }) {
  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Location</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {searchedClients &&
              searchedClients.map((client) => (
                <tr>
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.job}</td>
                  <td>{client.location}</td>
                  <td>{client.rate}</td>
                  <td>
                    <button
                      className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}
                    >
                      {client.isactive ? `Active` : `Inactive`}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-accent" onClick={handleOpen}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

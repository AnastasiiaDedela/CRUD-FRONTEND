export default function TableList({ handleOpen }) {
  const applicants = [
    {
      id: "0",
      name: "Joe",
      work: "freelance-developer",
      location: "Morocco",
      rate: 99,
      isactive: true,
    },
    {
      id: "1",
      name: "Janet",
      work: "fullstack-developer",
      location: "Mozambique",
      rate: 70,
      isactive: false,
    },
    {
      id: "2",
      name: "Justin",
      work: "fronend-developer",
      location: "Monaco",
      rate: 101,
      isactive: true,
    },
  ];

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
            {applicants &&
              applicants.map((user) => (
                <tr>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.work}</td>
                  <td>{user.location}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      className={`btn rounded-full w-20 ${user.isactive ? `btn-primary` : `btn-outline btn-primary`}`}
                    >
                      {user.isactive ? `Active` : `Inactive`}
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

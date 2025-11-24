import React from "react";

function DonorList({ donors }) {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Donor List</h4>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonorList;

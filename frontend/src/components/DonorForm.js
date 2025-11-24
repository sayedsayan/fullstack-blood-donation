import React, { useState } from "react";
import axios from "axios";

function DonorForm({ refreshDonors }) {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/donors", {
      name,
      bloodGroup,
      location
    });

    setName("");
    setBloodGroup("");
    setLocation("");
    refreshDonors();
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h4 className="mb-3">Add Donor</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input 
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>

        <div className="mb-3">
          <label>Blood Group</label>
          <input 
            className="form-control"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input 
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Donor
        </button>
      </form>
    </div>
  );
}

export default DonorForm;

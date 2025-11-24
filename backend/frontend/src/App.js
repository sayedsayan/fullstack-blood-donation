import React from "react";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blood Donation Management</h1>
      <DonorForm />
      <hr />
      <DonorList />
    </div>
  );
}

export default App;

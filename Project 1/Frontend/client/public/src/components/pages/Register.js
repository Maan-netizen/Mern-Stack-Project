import React, { useState } from "react";
import API from "../api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", isFreelancer: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      alert(res.data.message);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" className="form-control mb-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" onChange={(e) => setForm({ ...form, isFreelancer: e.target.checked })} />
          <label className="form-check-label">Register as Freelancer</label>
        </div>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;

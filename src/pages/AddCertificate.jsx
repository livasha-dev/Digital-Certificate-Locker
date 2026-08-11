import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/AddCertificate.css";

function AddCertificate() {

  const [certificateName, setCertificateName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "certificates"), {
        certificateName,
        organization: issuer,
        issueDate,
        description,
        createdAt: new Date(),
      });

      alert("Certificate Added Successfully!");

      setCertificateName("");
      setIssuer("");
      setIssueDate("");
      setDescription("");

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="add-page">

      <aside className="sidebar">

        <h2>☁ Certificate Locker</h2>

        <nav>
          <Link to="/dashboard">
            🏠 Dashboard
          </Link>

          <Link to="/add-certificate" className="active">
            ➕ Add Certificate
          </Link>

          <Link to="/view-certificates">
            📄 View Certificates
          </Link>

          <Link to="/">
            🚪 Logout
          </Link>
        </nav>

      </aside>

      <main className="add-content">

        <div className="add-header">
          <h1>➕ Add Certificate</h1>

          <p>
            Add your certificate to your digital certificate locker.
          </p>
        </div>

        <div className="certificate-form-card">

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>Certificate Name</label>

              <input
                type="text"
                placeholder="Enter certificate name"
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                required
              />

            </div>

            <div className="form-group">

              <label>Issued By</label>

              <input
                type="text"
                placeholder="Enter organization"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                required
              />

            </div>

            <div className="form-group">

              <label>Issue Date</label>

              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                required
              />

            </div>

            <div className="form-group">

              <label>Description</label>

              <textarea
                placeholder="Enter certificate description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

            <div className="form-buttons">

              <Link
                to="/dashboard"
                className="cancel-btn"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="save-btn"
              >
                💾 Save Certificate
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AddCertificate;
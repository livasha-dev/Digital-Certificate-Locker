import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/ViewCertificates.css";

function ViewCertificates() {

  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, "certificates")
      );

      const certificateList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setCertificates(certificateList);

    } catch (error) {

      console.error(
        "Error fetching certificates:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="view-page">

      <aside className="sidebar">

        <h2>☁ Certificate Locker</h2>

        <nav>

          <Link to="/dashboard">
            🏠 Dashboard
          </Link>

          <Link to="/add-certificate">
            ➕ Add Certificate
          </Link>

          <Link
            to="/view-certificates"
            className="active"
          >
            📄 View Certificates
          </Link>

          <Link to="/">
            🚪 Logout
          </Link>

        </nav>

      </aside>

      <main className="view-content">

        <div className="view-header">

          <div>
            <h1>📄 My Certificates</h1>

            <p>
              View all your stored certificates.
            </p>
          </div>

          <Link
            to="/add-certificate"
            className="add-button"
          >
            ➕ Add Certificate
          </Link>

        </div>

        {loading ? (

          <div className="empty-box">
            <h2>Loading...</h2>
          </div>

        ) : certificates.length === 0 ? (

          <div className="empty-box">

            <div className="empty-icon">
              📄
            </div>

            <h2>No Certificates Yet</h2>

            <p>
              Add your first certificate to see it here.
            </p>

            <Link
              to="/add-certificate"
              className="add-button"
            >
              ➕ Add Certificate
            </Link>

          </div>

        ) : (

          <div className="certificate-grid">

            {certificates.map((certificate) => (

              <div
                className="certificate-card"
                key={certificate.id}
              >

                <div className="certificate-icon">
                  📜
                </div>

                <h2>
                  {certificate.certificateName}
                </h2>

                <p>
                  <strong>Issued By:</strong>{" "}
                  {certificate.issuer}
                </p>

                <p>
                  <strong>Issue Date:</strong>{" "}
                  {certificate.issueDate}
                </p>

                {certificate.description && (
                  <p className="description">
                    {certificate.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default ViewCertificates;
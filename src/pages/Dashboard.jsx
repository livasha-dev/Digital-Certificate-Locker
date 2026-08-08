import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>☁ Certificate Locker</h2>

        <nav>
          <Link to="/dashboard">🏠 Dashboard</Link>

          <Link to="/add-certificate">
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

      <main className="content">

        <h1>Welcome 👋</h1>

        <p>
          Securely manage your certificates in one place.
        </p>

        <div className="cards">

          <div className="card">
            <h2>📄 Total Certificates</h2>
            <h1>0</h1>
          </div>

          <div className="card">
            <h2>➕ Add Certificate</h2>

            <Link to="/add-certificate">
              <button>Add Now</button>
            </Link>
          </div>

          <div className="card">
            <h2>📂 View Certificates</h2>

            <Link to="/view-certificates">
              <button>Open</button>
            </Link>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
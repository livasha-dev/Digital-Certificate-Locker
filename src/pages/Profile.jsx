import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>User Profile</h1>

        <div className="profile-info">
          <h3>Email</h3>
          <p>{auth.currentUser?.email || "No user logged in"}</p>
        </div>

        <div className="profile-info">
          <h3>Project</h3>
          <p>Digital Certificate Locker</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;
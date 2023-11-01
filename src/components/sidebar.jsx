// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaChartLine,
//   FaExclamationCircle,
//   FaBell,
//   FaFileAlt,
// } from "react-icons/fa";
// import "../styles/sidebar.css";
// import { Profile } from "./profile.jsx";
// import myImage from "../image/jassan.png";

// const Sidebar = () => {
//   const [activeLink, setActiveLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   const links = [
//     { to: "/", text: "Dashboard", icon: <FaChartLine /> },
//     {
//       to: "/service-risk-report",
//       text: "Service Risk Report",
//       icon: <FaExclamationCircle />,
//     },
//     { to: "/notifications", text: "Notifications", icon: <FaBell /> },
//     { to: "/report", text: "Report", icon: <FaFileAlt /> },
//   ];

//   return (
//     <div className="sidebar">
//       <Profile />
//       <div className="sidebar-links">
//         {links.map((linkData, index) => (
//           <Link
//             key={index}
//             to={linkData.to}
//             className={`sidebar-link ${
//               activeLink === linkData.to ? "active" : ""
//             }`}
//             onClick={() => handleLinkClick(linkData.to)}
//           >
//             <span className="link-icon">{linkData.icon}</span>
//             <span className="link-text">{linkData.text}</span>
//           </Link>
//         ))}
//       </div>

//       <img src={myImage} className="lastimg" />
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaExclamationCircle,
  FaBell,
  FaFileAlt,
} from "react-icons/fa";
import { Profile } from "./profile.jsx";
import "../styles/sidebar.css";
import myImage from "../image/jassan.png";

const Sidebar = () => {
  return (
    <>
      <aside>
        <Profile />
        <div className="sidebar-links">
          <Link to="/dashboard">
            <i className="fa fa-user-o" aria-hidden="true" />
            <FaChartLine /> Dashboard
          </Link>
          <Link to="/service-risk-report">
            <i className="fa fa-laptop" aria-hidden="true" />
            <FaExclamationCircle /> Service Risk Report
          </Link>
          <Link to="/notifications">
            <i className="fa fa-clone" aria-hidden="true" />
            <FaBell /> Notifications
          </Link>
          <Link to="/report">
            <i className="fa fa-star-o" aria-hidden="true" />
            <FaFileAlt /> Report
          </Link>
        </div>
      </aside>
      <img src={myImage} className="lastimg" />
    </>
  );
};

export default Sidebar;
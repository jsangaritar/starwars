import { NavLink } from "react-router-dom";

const Topbar = () => (
  <nav
    style={{
      background: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.5rem",
      height: "3.5rem",
    }}
  >
    <NavLink to="/" style={{ height: "100%" }}>
      <img src="/star_wars.png" style={{ height: "100%" }} />
    </NavLink>
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavLink to="/films" style={{ margin: "0 1rem", color: "#fff" }}>
        Films
      </NavLink>
      <NavLink to="/characters" style={{ margin: "0 1rem", color: "#fff" }}>
        Characters
      </NavLink>
    </div>
  </nav>
);

export default Topbar;

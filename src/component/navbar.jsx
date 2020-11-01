import React from "react";

export const useDate = () => {
  const locale = "en";
  const [today] = React.useState(new Date()); // Save the current date to be able to trigger an update

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  return {
    date,
  };
};

const NavBar = () => {
  const { date } = useDate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ zIndex: 2 }}
    >
      <a className="navbar-brand" href="/Todo-App/">
        ToDo App
      </a>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/Todo-App/">
              {date}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

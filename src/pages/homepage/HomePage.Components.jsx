import React from "react";
import "./HomePage.Style.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default HomePage;

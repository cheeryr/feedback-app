import React from "react"; //rcfe
import PropTypes from "prop-types"; //impt

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Hello {text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6895",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;

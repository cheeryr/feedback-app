import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //conditional class:
  //${reverse && 'reverse'} means if reverse==true,then we want the classname 'reverse'
  //return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //conditional style:
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaltProps = {
  revrese: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

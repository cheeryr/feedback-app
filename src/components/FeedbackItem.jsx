//import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  //_rfce

  //useState, hooks [variable name, function to set varaible], 7 is the default value for rating
  //const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of a feedback item");

  //   onClick = { handleClick };
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     }); //call the set state function, can not change the state value directly
  //   };

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      {/* the 2 div nested inside of Card is children prop, will be passed to Card as children*/}
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-dispay">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

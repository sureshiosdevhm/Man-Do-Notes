import { useState, useRef } from "react";
import "./NewEventForm.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import moment from "moment";

export default function NewEventForm({ addEvent, event, onDelete }) {
  const [note, setNote] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  var randomColor = require("randomcolor");
  var color = randomColor();

  const resetForm = () => {
    setNote("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      note: note,
      date: moment().format("LL"),
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };

  function onChangeHandler(e) {
    setNote(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }

  return (
    <form className="new-event-form">
      <label>
        <textarea
          name="note"
          rows="5"
          cols="30"
          placeholder="This is Man-Do note..."
          required
          onChange={onChangeHandler}
          value={event && event.note}
          disabled={event ? true : false}
          autoFocus
        />
        <div className="bottom-card">
          <span>
            {moment(new Date()).format("LL")} @{" "}
            {moment(new Date()).format("HH:mm")}
          </span>
          {event ? (
            <RiDeleteBin5Fill
              className="logo"
              onClick={() => onDelete(event.id)}
            />
          ) : (
            showIcon && (
              <AiFillCheckCircle className="logo" onClick={handleSubmit} />
            )
          )}
        </div>
      </label>
    </form>
  );
}

import { useState } from "react";
import "./NewEventForm.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io5";
import moment from "moment";
import SmoothList from "react-smooth-list";

export default function NewEventForm({ addEvent, event, onDelete }) {
  const [note, setNote] = useState("");
  const [showIcon, setShowIcon] = useState(false);

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
    <SmoothList className="new-event-form">
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
            <IoMdTrash className="logo" onClick={() => onDelete(event.id)} />
          ) : (
            showIcon && (
              <AiFillCheckCircle className="logo" onClick={handleSubmit} />
            )
          )}
        </div>
      </label>
    </SmoothList>
  );
}

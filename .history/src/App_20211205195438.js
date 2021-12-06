import React, { useState } from "react";
import Title from "./components/Title";
import NewEventForm from "./components/NewEventForm";
import mando from "../src/assets/img/mando.png";
import IconButton from "./components/IconButton";
import { IoAddCircle } from "react-icons/io5";
import styles from "./components/IconButton.module.css";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [event, ...prevEvents];
    });
    setShowModal(false);
  };

  const handleDeleteNote = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
  };

  function handleAddNewEvent() {
    setShowModal(true);
  }

  return (
    <div>
      {/* Header */}
      <Title>
        <div className="logo">
          <img
            className="logo"
            src={mando}
            alt="Mandalorian Helmet"
            width="30px"
            height="30px"
          />
          <h1 className="title">Man-Do Notes</h1>
        </div>
        <div className="options">
          <IconButton
            icon={<IoAddCircle className={styles.icon} />}
            text="New Event"
            onClick={handleAddNewEvent}
          />
        </div>
      </Title>

      {events.length === 0 && !showModal && (
        <div
          style={{
            display: "block",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Nunito",
              fontWeight: 300,
              fontSize: 20,
              fontStyle: "italic",
            }}
          >
            Note something....Mando!
          </h1>
        </div>
      )}

      <div className="App">
        {showModal && <NewEventForm addEvent={addEvent} />}
        {events &&
          events.map((event, index) => (
            <NewEventForm
              event={event}
              key={index}
              onDelete={(id) => handleDeleteNote(id)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

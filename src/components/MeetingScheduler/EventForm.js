import React, { useRef, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { dateFormat } from "../utils/DateUtils";

const containerStyle = {
  zIndex: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#E8E8E8",
  padding: "2em 1em 1em",
  color: "#111111",
  borderRadius: "1em",
  border: "1px #000000 solid",
  width: "349px"
};

const formTitleStyle = {
  textAlign: "center",
  fontWeight: "400px",
  color: "#ffffff",
  backgroundColor: "#22b1ed",
  padding: '5px',
  marginTop: '-28px',
  marginRight: '-13.5px',
  marginLeft: '-13.5px',
  borderTopRightRadius: '12px',
  borderTopLeftRadius: '12px'
};

export default props => {
  const [selectedDTStart, handleDTStartChange] = useState(
    props.hasSelectedEvent ? props.selectedEvent.dtstart : null
  );
  const [selectedDTEnd, handleDTEndChange] = useState(
    props.hasSelectedEvent ? props.selectedEvent.dtend : null
  );
  const [isDisabled, setDisabled] = useState(true);
  //const dateFormat = "MM/dd/yyyy HH:mm";
  //const dateFormat = "MMMM do, yyyy h:mm a";
  const frmTitle = useRef(null);
  /*
  useEffect(() => {
    debugger;
  }, [props, frmTitle]);
  */
  const handleEsc = evt => {
    if (evt.keyCode === 27) {
      window.removeEventListener("keydown", handleEsc);
      props.onFormCancel();
    }
  };
  window.addEventListener("keydown", handleEsc);
  const handleSubmit = () => {
    const event = {
      dtstart: new Date(document.getElementById("dtstart").value),
      dtend: new Date(document.getElementById("dtend").value),
      title: document.getElementById("event_title").value,
      email: document.getElementById("event_email").value,
      description: document.getElementById("event_description").value,
      uid: props.hasSelectedEvent ? props.selectedEvent.uid : +new Date()
    };
    props.onFormSubmit(event);
  };
  const handleTextChange = () => {
    setDisabled(
      document.getElementById("dtstart").value === "" ||
      document.getElementById("dtend").value === "" ||
      document.getElementById("event_title").value === "" ||
      document.getElementById("event_email").value === "" ||
      document.getElementById("event_description").value === ""
    );
  };
  const inputStyle = {
    minWidth: "14em"
  };
  return (
    <div style={containerStyle} id="appointmentform">
      <h3 style={formTitleStyle}>{props.formTitle}</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          id="dtstart_formatted"
          label="Start"
          value={selectedDTStart}
          onChange={dt => {
            handleDTStartChange(dt);
            handleTextChange();
          }}
          format={dateFormat} 
          style={inputStyle}
        />
        <DateTimePicker
          id="dtend_formatted"
          label="End"
          value={selectedDTEnd}
          onChange={dt => {
            handleDTEndChange(dt);
            handleTextChange();
          }}
          format={dateFormat}
          style={inputStyle}
        />
      </MuiPickersUtilsProvider>
      <input
        defaultValue={selectedDTStart === null ? "" : selectedDTStart}
        id="dtstart"
        type="hidden"
      />
      <input
        defaultValue={selectedDTEnd === null ? "" : selectedDTEnd}
        id="dtend"
        type="hidden"
      />
      <TextField
        id="event_title"
        label="Title"
        onChange={handleTextChange}
        style={inputStyle}
        inputRef={frmTitle}
        defaultValue={props.hasSelectedEvent ? props.selectedEvent.title : null}
      />
      <TextField
        id="event_email"
        label="Email"
        onChange={handleTextChange}
        style={inputStyle}
        type='email'
        defaultValue={
          props.hasSelectedEvent ? props.selectedEvent.email : null
        }
      />
      <TextField
        id="event_description"
        label="Description"
        onChange={handleTextChange}
        style={inputStyle}
        defaultValue={
          props.hasSelectedEvent ? props.selectedEvent.description : null
        }
      />
      <div style={{ marginTop: "2em", minWidth: "12em", textAlign: "center" }}>
        <Button
          // variant="contained"
          onClick={props.onFormCancel}
          // style={{ : "3em" }}
          style={{ backgroundColor: "#f25767", borderColor: "#f25767", color: "#ffffff" }}
        >
          Cancel
        </Button>&nbsp;&nbsp;
        <Button
          // variant="contained"
          color="primary"
          onClick={handleSubmit}
          id="formSubmit"
          disabled={isDisabled}
          style={{ backgroundColor: '#3a7afe', color: "#ffffff" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

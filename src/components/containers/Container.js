import React, { Component } from "react";
import DateTime from "../data/DateTime";
import EventForm from "../MeetingScheduler/EventForm"
import EventList from "../MeetingScheduler/EventList";
import Controls from "../MeetingScheduler/Controls";
import Vnavbar from "../Masterlayout/Vnavbar";
import Vsidebar from "../Masterlayout/Vsidebar";
import Vfooter from "../Masterlayout/Vfooter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: "",
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {},
      events: []
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {}
    });
  }
  handleFormSubmit(event) {
    let events = this.state.events;
    const eventIndex = events.findIndex(obj => {
      return obj.uid === event.uid;
    });
    if (eventIndex === -1) {
      events.push(event);
    } else {
      events[eventIndex] = event;
    }
    this.setState({
      events: events,
      formVisible: false
    });
  }
  removeEvent(array, uid) {
    const index = array.findIndex(obj => {
      return obj.uid === uid;
    });
    return index >= 0
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : array;
  }
  handleRemoveItem(uid) {
    const events = this.removeEvent(this.state.events, uid);
    this.setState({ events: events });
  }
  handleEditItem(node) {
    this.setState({
      selectedEvent: node,
      hasSelectedEvent: true,
      formVisible: true
    });
  }
  componentDidMount() {
    const dt = new DateTime();
    const currentDateTime = dt.getCurrentDateTime();
    this.setState({
      dt: currentDateTime
    });
  }
  render() {
    return (
      <div id="root">
        <div>
          <Vnavbar />
          <Vsidebar />
          <div class="content-body" style={{ minHeight:"850px" }}>
            {/* <!-- row --> */}
            <div class="container-fluid">
              <div className='row' >
                <div id={this.props.id} >
                  <Controls
                    onShowFormClick={this.handleShowFormClick}
                    formVisible={this.state.formVisible}
                  />
                  {this.state.formVisible ? (
                    <EventForm
                      formVisible={this.state.formVisible}
                      formTitle="Schedule a meeting"
                      onFormCancel={this.handleFormCancel}
                      onFormSubmit={this.handleFormSubmit}
                      selectedEvent={this.state.selectedEvent}
                      hasSelectedEvent={this.state.hasSelectedEvent}
                    />
                  ) : null}
                  <EventList
                    events={this.state.events}
                    onRemoveItem={this.handleRemoveItem}
                    onEditItem={this.handleEditItem}
                  />
                </div>
              </div>
            </div>
          </div>
          <Vfooter />
        </div>
      </div>
    );
  }
}

export default Container;

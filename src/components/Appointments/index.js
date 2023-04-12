import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    nameInput: '',
    dateInput: '',
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeDateInput = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, dateInput} = this.state

    const newAppointmentList = {
      id: uuidv4(),
      name: nameInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointmentList],
      nameInput: '',
      dateInput: '',
    }))
  }

  starBtn = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarredBtn = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(eachAppointment => {
        if (eachAppointment.isStarred === true) {
          return eachAppointment
        }

        return ''
      }),
    }))
  }

  render() {
    const {appointmentsList, nameInput, dateInput} = this.state

    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="input-container">
            <form onSubmit={this.onSubmitForm} className="form-container">
              <div className="title-container">
                <label htmlFor="title" className="input-heading">
                  {' '}
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={nameInput}
                  className="title-input"
                  placeholder="Title"
                  onChange={this.onChangeNameInput}
                />
              </div>
              <div>
                <label htmlFor="Date" className="input-heading">
                  {' '}
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  id="Date"
                  value={dateInput}
                  className="input-date"
                  onChange={this.onChangeDateInput}
                />
              </div>
              <button type="submit" className="add-button" data-testid="star">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
          <hr className="line" />
          <div className="starred-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              className="starred-button"
              type="button"
              onClick={this.onClickStarredBtn}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-list-container">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                starButton={this.starBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

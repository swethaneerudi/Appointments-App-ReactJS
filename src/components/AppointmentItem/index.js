import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, starButton} = props

  const {name, date, isStarred, id} = appointmentDetails

  const date1 = new Date(date)

  const formattedDate = format(date1, 'dd MMMM yyyy, EEEE')

  const onClickStar = () => {
    starButton(id)
  }

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item-container">
      <div>
        <p className="name-input">{name}</p>
        <p className="date-input">{`Date: ${formattedDate}`}</p>
      </div>
      <button type="button" className="star-button">
        <img
          src={starUrl}
          alt="star"
          className="star-image"
          onClick={onClickStar}
        />
      </button>
    </li>
  )
}

export default AppointmentItem

import React from 'react'
import {
  setReminderDate,
  setReminderState,
  setReminderTime,
} from '../../../actions'
import { useDataLayerValue } from '../../../DataLayer.js'
import './Day.css'

const Day = ({ day }) => {
  const [{ active, current }, dispatch] = useDataLayerValue()

  const getReminder = () => {
    setReminderDate(
      `${active.format('Y-MM')}-${day.toString().length > 1 ? day : '0' + day}`,
      dispatch,
    )
    setReminderTime(current.format('HH:mm'), dispatch)
    setReminderState(true, dispatch)
  }

  return (
    <>
      <div className="day__day">
        <h1>{day}</h1>
      </div>
      <div className="day__reminder">
        <div className="content"></div>
      </div>
      <div className="day__actions">
        <div className="buttons">
          <button className="set-reminder" onClick={() => getReminder()}>
            New reminder
          </button>
        </div>
      </div>
    </>
  )
}

export default Day

import React, { useState } from 'react'
import {
  setReminderState,
  setReminderDate,
  setReminderTime,
} from '../../../actions'
import { useDataLayerValue } from '../../../DataLayer.js'
import { setReminder } from '../../../api/Reminder'
import './NewReminder.css'

const NewReminder = () => {
  const [errors, setErrors] = useState([])
  const [reminderTitle, setReminderTitle] = useState('')
  const [reminderContent, setReminderContent] = useState('')
  const [reminderActive, setReminderActive] = useState(false)

  const [
    { reminderState, reminderDate, reminderTime, loginEmail},
    dispatch,
  ] = useDataLayerValue()

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await setReminder(
      reminderTitle,
      reminderContent,
      reminderDate,
      reminderTime,
      reminderActive,
      loginEmail,
    )

    console.log(response)

    if (response.errors) {
      let errors = {}
      response.errors.map((error) => {
        errors[error.param] = error.msg
      })
      console.log(errors)
      if (errors.userEmail) {
        window.location.replace('/login')
      }
      setErrors(errors)
    } else {
      setReminderState(!reminderState, dispatch)
      setReminderTitle('')
      setReminderContent('')

      // // TODO - implement funcitonality to reload calendar on reminder set, instead of whole page
      // window.location.reload()
    }
  }

  return (
    <>
      {reminderState && (
        <div className="container new-reminder">
          <div className="reminer__wrapper">
            <h1 className="label">New reminder</h1>
            <form className="reminder__form" onSubmit={(e) => onSubmit(e)}>
              <div className="reminder-title">
                <input
                  type="text"
                  value={reminderTitle}
                  id="reminder-title"
                  placeholder="Reminder title"
                  onChange={(event) => setReminderTitle(event.target.value)}
                />
                {errors && errors.reminderTitle && (
                  <p className="error-msg">* {errors.reminderTitle}</p>
                )}
              </div>
              <div className="reminder-content">
                <textarea
                  placeholder="New reminder"
                  value={reminderContent}
                  id="reminder-content"
                  onChange={(event) => setReminderContent(event.target.value)}
                />
                {errors && errors.reminderContent && (
                  <p className="error-msg">* {errors.reminderContent}</p>
                )}
              </div>
              <div className="trigger">
                <input
                  type="checkbox"
                  name="active"
                  value={reminderActive}
                  onChange={() => setReminderActive(!reminderActive)}
                />
                <label htmlFor="active">Trigger reminder</label>
              </div>
              <div className="date-time">
                <div className="date">
                  <input
                    type="date"
                    value={reminderDate}
                    onChange={(event) => setReminderDate(event.target.value)}
                  ></input>
                </div>
                <div className="time">
                  <input
                    type="time"
                    value={reminderTime}
                    onChange={(event) => setReminderTime(event.target.value)}
                  />
                </div>
              </div>
              <button className="btn" action="submit">
                Set new reminder
              </button>
            </form>
            <i
              className="fas fa-times fa-2x"
              onClick={() => setReminderState(!reminderState, dispatch)}
            ></i>
          </div>
        </div>
      )}
    </>
  )
}

export default NewReminder

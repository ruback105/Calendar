import React, { useState } from 'react'
import {
  setReminderContent,
  setReminderState,
  setReminderDate,
  setReminderTime,
} from '../../../actions'
import { useDataLayerValue } from '../../../DataLayer.js'
import './NewReminder.css'

const NewReminder = () => {
  const [
    { reminderContent, reminderState, reminderDate, reminderTime },
    dispatch,
  ] = useDataLayerValue()

  const onSubmit = (e) => {
    e.preventDefault()
    // set reminder
  }

  return (
    <>
      {reminderState && (
        <div className="container new-reminder">
          <div className="reminer__wrapper">
            <h1 className="label">New reminder</h1>
            <form className="reminder__form" onSubmit={(e) => onSubmit(e)}>
              <textarea
                type="email"
                placeholder="New reminder"
                value={reminderContent}
                id="reminder-content"
                onChange={(event) =>
                  setReminderContent(event.target.value, dispatch)
                }
              />
              <div className="date-time">
                <div className="date">
                  <input
                    type="date"
                    value={reminderDate}
                    onChange={(event) =>
                      setReminderDate(event.target.value, dispatch)
                    }
                  ></input>
                </div>
                <div className="time">
                  <input
                    type="time"
                    value={reminderTime}
                    onChange={(event) =>
                      setReminderTime(event.target.value, dispatch)
                    }
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
          r
        </div>
      )}
    </>
  )
}

export default NewReminder

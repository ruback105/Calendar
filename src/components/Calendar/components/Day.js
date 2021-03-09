import React, { useEffect, useState } from 'react'
import {
  setReminderDate,
  setReminderState,
  setReminderTime,
  setCalendarLoaded,
} from '../../../actions'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import { useDataLayerValue } from '../../../DataLayer.js'
import { getRemindersByDate, deleteReminderById } from '../../../api/Reminder'
import Cookies from 'universal-cookie'
import './Day.css'

const Day = ({ day, disabled, activeMonthDays }) => {
  const [
    { active, current, reminderState, calendarLoaded },
    dispatch,
  ] = useDataLayerValue()
  const [reminders, setReminders] = useState([])
  const [reminderDeleted, setReminderDeleted] = useState(false)
  const { height, width } = useWindowDimensions()
  const cookies = new Cookies()

  useEffect(async () => {
    if (day == 1 && activeMonthDays) {
      setCalendarLoaded(false, dispatch)
    }
    if (cookies.get('loginEmail') && cookies.get('userToken')) {
      const reminders = await getRemindersByDate(
        cookies.get('loginEmail'),
        `${active.format('Y-MM')}-${
          day.toString().length > 1 ? day : '0' + day
        }`,
      )

      if (reminders) {
        setReminders(reminders)
      }

      if (reminders && activeMonthDays == day) {
        setCalendarLoaded(true, dispatch)
      }
    }
  }, [active.format('Y-MM'), reminderDeleted, reminderState])

  const getReminder = () => {
    setReminderDate(
      `${active.format('Y-MM')}-${day.toString().length > 1 ? day : '0' + day}`,
      dispatch,
    )
    setReminderTime(current.format('HH:mm'), dispatch)
    setReminderState(true, dispatch)
  }

  const showReminders = () => {
    window.location.replace('/profile')
  }

  const deleteReminder = async (reminderID) => {
    const response = await deleteReminderById(reminderID)

    if (response.ok) {
      setReminderDeleted(!reminderDeleted)
    }
  }

  return (
    <>
      <div
        className={
          reminders.length > 0 && !disabled
            ? 'day__day has_reminders'
            : 'day__day'
        }
        onClick={() => width < 768 && getReminder()}
      >
        <h1>{day}</h1>
      </div>

      <div
        className={calendarLoaded ? 'day__reminder active' : 'day__reminder'}
      >
        {/* TODO - fix glitch that rerender days twice on month change */}
        {reminders &&
          !disabled &&
          reminders.map((reminder) => {
            return (
              <div className="reminder-wrapper" key={reminder._id}>
                <div className="title">{reminder.title}</div>
                <div className="content">{reminder.content}</div>
                <div className="time">{reminder.time}</div>
                <i
                  className="fas fa-times fa-1x"
                  onClick={() => deleteReminder(reminder._id)}
                ></i>
              </div>
            )
          })}
      </div>
      <div className="day__actions">
        <div className="buttons">
          <button className="set-reminder" onClick={() => getReminder()}>
            {width < 768 ? 'New' : 'New reminder'}
          </button>
          <button className="view-reminders" onClick={() => showReminders()}>
            {width < 768 ? 'View' : 'View reminders'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Day

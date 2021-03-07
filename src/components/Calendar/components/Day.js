import React, { useEffect, useState } from 'react'
import {
  setReminderDate,
  setReminderState,
  setReminderTime,
} from '../../../actions'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import { useDataLayerValue } from '../../../DataLayer.js'
import { getRemindersByDate } from '../../../api/Reminder'
import Cookies from 'universal-cookie'
import './Day.css'

const Day = ({ day, disabled }) => {
  const [{ active, current }, dispatch] = useDataLayerValue()
  const [reminders, setReminders] = useState([])
  const { height, width } = useWindowDimensions()
  const cookies = new Cookies()

  useEffect(async () => {
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
    }
  }, [active.format('Y-MM')])

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
      <div className="day__day" onClick={() => width < 768 && getReminder()}>
        <h1>{day}</h1>
      </div>
      {width > 767 && (
        <>
          <div className="day__reminder">
            {/* TODO - implement functionality to edit reminders */}
            {/* TODO - fix glitch that queue reminder render */}
            {reminders &&
              !disabled &&
              reminders.map((reminder) => {
                return (
                  <>
                    <div className="reminder-wrapper">
                      <div className="title">{reminder.title}</div>
                      <div className="time">{reminder.time}</div>
                    </div>
                  </>
                )
              })}
          </div>
          <div className="day__actions">
            <div className="buttons">
              <button className="set-reminder" onClick={() => getReminder()}>
                New reminder
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Day

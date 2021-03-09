import React, { useState, useEffect } from 'react'
import { getAllReminders, deleteReminderById } from '../../api/Reminder'
import Cookies from 'universal-cookie'
import './RemindersDashboard.css'

const RemindersDashboard = () => {
  const [reminders, setReminders] = useState([])
  const [reminderDeleted, setReminderDeleted] = useState(false)
  const cookies = new Cookies()

  useEffect(() => {
    getReminders()
  }, [reminderDeleted])

  const getReminders = async () => {
    const reminders = await getAllReminders(cookies.get('loginEmail'))

    if (reminders) {
      setReminders(reminders)
    }
  }

  const deleteReminder = async (reminderID) => {
    const response = await deleteReminderById(reminderID)

    if (response.ok) {
      setReminderDeleted(!reminderDeleted)
    }
  }

  return (
    <>
      {reminders.length >= 1 ? (
        <section className="reminders">
          {reminders.map((reminder) => {
            return (
              <div className="reminder-wrapper" key={reminder._id}>
                <div className="title">{reminder.title}</div>
                <div className="content">{reminder.content}</div>
                <div className="time">
                  {reminder.date + ' ' + reminder.time}
                </div>
                <i
                  className="fas fa-times fa-2x"
                  onClick={() => deleteReminder(reminder._id)}
                ></i>
              </div>
            )
          })}
        </section>
      ) : (
        <h1 className="reminders empty">
          You don't have any reminders created!
        </h1>
      )}
    </>
  )
}

export default RemindersDashboard

import React, { useState, useEffect } from 'react'
import { getAllReminders } from '../../api/Reminder'
import Cookies from 'universal-cookie'
import './RemindersDashboard.css'

const RemindersDashboard = () => {
  const [reminders, setReminders] = useState([])
  const cookies = new Cookies()

  useEffect(() => {
    getReminders()
  }, [])

  const getReminders = async () => {
    const reminders = await getAllReminders(cookies.get('loginEmail'))

    console.log(reminders)
    if (reminders) {
      setReminders(reminders)
    }
  }

  return (
    <section className="reminders">
      {reminders.map((reminder) => {
        return (
          <>
            <div className="reminder-wrapper">
                <div className="title">{reminder.title}</div>
                <div className="content">{reminder.content}</div>
                <div className="time">{reminder.date + " " + reminder.time}</div>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default RemindersDashboard

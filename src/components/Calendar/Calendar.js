import React from 'react'
import Header from './components/Header.js'
import Month from './components/Month.js'

import './Calendar.css'
import NewReminder from './components/NewReminder.js'

const Calendar = () => {

  return (
    <div className="container calendar">
      <Header />
      <Month />
      <NewReminder />
    </div>
  )
}

export default Calendar

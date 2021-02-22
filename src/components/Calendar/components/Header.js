import React, { useEffect } from 'react'
import { useDataLayerValue } from '../../../DataLayer.js'
import { setCurrent, setCurrentTime, setActive } from '../../../actions'
import moment from 'moment'
import './Header.css'

const Header = () => {
  const [{ current, currentTime, active }, dispatch] = useDataLayerValue()

  setTimeout(() => {
    setCurrentTime(moment().format('HH:mm'), dispatch)
  }, 5000)

  const nextMonth = () => {
    setActive(active.add(1, 'M'), dispatch)
  }

  const previousMonth = () => {
    setActive(active.add(-1, 'M'), dispatch)
  }

  const currentMonth = () => {
    setActive(moment(), dispatch)
  }

  return (
    <section className="container calendar-header">
      <div className="col-left">{currentTime}</div>
      <div className="col-right">
        <button
          className={
            current.format('Y:MM') !== active.format('Y:MM')
              ? 'current active'
              : 'current'
          }
          onClick={() => currentMonth()}
        >
          Current Day
        </button>
        <div className="previous-month">
          <button onClick={() => previousMonth()}>
            <i className="fas fa-angle-left fa-2x"></i>
          </button>
        </div>
        <div className="current-month">
          {active.format('MMMM')} {active.year()}
        </div>
        <div className="next-month">
          <button onClick={() => nextMonth()}>
            <i className="fas fa-angle-right fa-2x"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header

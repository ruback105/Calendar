import React, { useEffect } from 'react'
import Day from './Day.js'
import { useDataLayerValue } from '../../../DataLayer.js'
import moment from 'moment'
import './Month.css'

const Month = () => {
  const [{ active }, dispatch] = useDataLayerValue()
  const totalMonthFields = 42
  const activeMonthDays = active.daysInMonth()
  const rowShift = active.startOf('month').day()
  let previousMonthDays = active.clone().add(-1, 'M').daysInMonth()
  previousMonthDays -= rowShift

  return (
    <section className="container month">
      <div className="month__week-days">
        <span className="sunday">
          <h3>Sunday</h3>
        </span>
        <span className="monday">
          <h3>Monday</h3>
        </span>
        <span className="tuesday">
          <h3>Tuesday</h3>
        </span>
        <span className="wednesday">
          <h3>Wednesday</h3>
        </span>
        <span className="thursday">
          <h3>Thursday</h3>
        </span>
        <span className="friday">
          <h3>Friday</h3>
        </span>
        <span className="saturday">
          <h3>Saturday</h3>
        </span>
      </div>
      <div className="month__days">
        {[...Array(rowShift)].map((e, day) => (
          <span className="month__day disabled" key={++day}>
            <Day day={++previousMonthDays} />
          </span>
        ))}

        {[...Array(activeMonthDays)].map((e, day) => (
          <span className="month__day" key={++day}>
            <Day day={++day} />
          </span>
        ))}

        {[...Array(totalMonthFields - activeMonthDays - rowShift)].map(
          (e, day) => (
            <span className="month__day disabled" key={++day}>
              <Day day={++day} />
            </span>
          ),
        )}
      </div>
    </section>
  )
}

export default Month

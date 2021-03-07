import React, { useEffect } from 'react'
import Day from './Day.js'
import { useDataLayerValue } from '../../../DataLayer.js'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import './Month.css'

const Month = () => {
  const [{ active }, dispatch] = useDataLayerValue()
  const { width } = useWindowDimensions()
  const totalMonthFields = 42
  const activeMonthDays = active.daysInMonth()
  const rowShift = active.startOf('month').day()
  let previousMonthDays = active.clone().add(-1, 'M').daysInMonth()
  previousMonthDays -= rowShift

  return (
    <section className="container month">
      <div className="month__week-days">
        <span className="sunday">
          <h3>{width > 768 ? 'Sunday' : 'Su'}</h3>
        </span>
        <span className="monday">
          <h3>{width > 768 ? 'Monday' : 'Mo'}</h3>
        </span>
        <span className="tuesday">
          <h3>{width > 768 ? 'Tuesday' : 'Tu'}</h3>
        </span>
        <span className="wednesday">
          <h3>{width > 768 ? 'Wednesday' : 'We'}</h3>
        </span>
        <span className="thursday">
          <h3>{width > 768 ? 'Thursday' : 'Th'}</h3>
        </span>
        <span className="friday">
          <h3>{width > 768 ? 'Friday' : 'Fr'}</h3>
        </span>
        <span className="saturday">
          <h3>{width > 768 ? 'Saturday' : 'Sa'}</h3>
        </span>
      </div>
      <div className="month__days">
        {[...Array(rowShift)].map((e, day) => (
          <span className="month__day disabled" key={++day}>
            <Day day={++previousMonthDays} disabled={true} />
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
              <Day day={++day} disabled={true}/>
            </span>
          ),
        )}
      </div>
    </section>
  )
}

export default Month

import React, { useState } from 'react'
import image from '../../assets/images/human.jpg'
import './ProfileDashboard.css'

const ProfileDashboard = () => {
  const [changePassowordStatus, setChangePassowordStatus] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const clickHandler = (e) => {}

  return (
    <div className="profile__wrapper">
      <div className="col-left">
        <div className="profile__user_image">
          <img src={image} alt="test" />
        </div>
        <div className="profile__user_image_change">
          <button onClick={() => clickHandler}>Change</button>
        </div>
      </div>
      <div className="col-right">
        <form className="profile__data" onSubmit={(e) => submitHandler(e)}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" placeholder="name" />
          </div>
          <div className="surname">
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" id="" placeholder="surname" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder="email" />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="" placeholder="phone" />
          </div>
          {changePassowordStatus && (
            <>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="password"
                />
              </div>
              <div className="password-repeat">
                <label htmlFor="password"></label>
                <input
                  type="password-repeat"
                  name="password-repeat"
                  id=""
                  placeholder="repeat password"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            onClick={() => setChangePassowordStatus(!changePassowordStatus)}
          >
            {changePassowordStatus ? 'Save' : 'Change account settings'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileDashboard

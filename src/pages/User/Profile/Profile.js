import React, { useState } from 'react'
import { ProfileDashboard } from '../../../components'

import './Profile.css'

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <section className="container profile">
      <div className="profile__title">Account Settings</div>
      <div className="profile__dashboard">
        <nav className="profile__navigation">
          <span
            className={activeTab === 1 ? 'profile active' : 'profile'}
            onClick={() => setActiveTab(1)}
          >
            Profile
          </span>
          <span
            className={activeTab === 2 ? 'reminders active' : 'reminders'}
            onClick={() => setActiveTab(2)}
          >
            Reminders
          </span>
          <span
            className={activeTab === 3 ? 'friends active' : 'friends'}
            onClick={() => setActiveTab(3)}
          >
            Friends
          </span>
        </nav>
        <ProfileDashboard />
      </div>
    </section>
  )
}

export default Profile

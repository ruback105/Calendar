export const setLoginEmail = (email, dispatch) => {
  dispatch({
    type: 'SET_LOGIN_EMAIL',
    email: email,
  })
}

export const setNewsletterEmail = (newsletterEmail, dispatch) => {
  dispatch({
    type: 'SET_NEWSLETTER_EMAIL',
    newsletterEmail: newsletterEmail,
  })
}

export const setUserToken = (userToken, dispatch) => {
  dispatch({
    type: 'SET_USER_TOKEN',
    userToken: userToken,
  })
}

export const setLoginActive = (loginActive, dispatch) => {
  dispatch({
    type: 'SET_LOGIN_ACTIVE',
    loginActive: loginActive,
  })
}

export const setCurrent = (current, dispatch) => {
  dispatch({
    type: 'SET_CURRENT',
    current: current,
  })
}

export const setActive = (active, dispatch) => {
  dispatch({
    type: 'SET_ACTIVE',
    active: active,
  })
}

export const setReminderDate = (reminderDate, dispatch) => {
  dispatch({
    type: 'SET_REMINDER_DATE',
    reminderDate: reminderDate,
  })
}

export const setReminderState = (reminderState, dispatch) => {
  dispatch({
    type: 'SET_REMINDER_STATE',
    reminderState: reminderState,
  })
}

export const setReminderTime = (reminderTime, dispatch) => {
  dispatch({
    type: 'SET_REMINDER_TIME',
    reminderTime: reminderTime,
  })
}

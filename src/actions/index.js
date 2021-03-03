export const setLoginEmail = (email, dispatch) => {
  dispatch({
    type: 'SET_LOGIN_EMAIL',
    email: email,
  })
}

export const setLoginPassword = (password, dispatch) => {
  dispatch({
    type: 'SET_LOGIN_PASSWORD',
    password: password,
  })
}

export const setRegisterEmail = (email, dispatch) => {
  dispatch({
    type: 'SET_REGISTER_EMAIL',
    email: email,
  })
}

export const setRegisterPassword = (password, dispatch) => {
  dispatch({
    type: 'SET_REGISTER_PASSWORD',
    password: password,
  })
}

export const setConfirmRegisterPassword = (password, dispatch) => {
  dispatch({
    type: 'SET_CONFIRM_REGISTER_PASSWORD',
    password: password,
  })
}

export const setNewsletterEmail = (newsletterEmail, dispatch) => {
  dispatch({
    type: 'SET_NEWSLETTER_EMAIL',
    newsletterEmail: newsletterEmail,
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

export const setCurrentTime = (currentTime, dispatch) => {
  dispatch({
    type: 'SET_CURRENT_TIME',
    currentTime: currentTime,
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

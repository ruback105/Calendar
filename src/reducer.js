import moment from 'moment'

export const initialState = {
  loginEmail: '',
  loginPassword: '',
  registerEmail: '',
  registerPassword: '',
  confirmRegisterPassword: '',
  newsletterEmail: '',
  loginActive: true,
  current: moment(),
  currentTime: moment().format('HH:mm'),
  active: moment(),
  reminderDate: '',
  reminderTime: '',
}

const reducer = (state, action) => {
  if (action.type != 'SET_CURRENT_TIME') console.log(action)

  switch (action.type) {
    case 'SET_LOGIN_EMAIL': {
      return {
        ...state,
        loginEmail: action.email,
      }
    }
    case 'SET_LOGIN_PASSWORD': {
      return {
        ...state,
        loginPassword: action.password,
      }
    }
    case 'SET_REGISTER_EMAIL': {
      return {
        ...state,
        registerEmail: action.email,
      }
    }
    case 'SET_REGISTER_PASSWORD': {
      return {
        ...state,
        registerPassword: action.password,
      }
    }
    case 'SET_CONFIRM_REGISTER_PASSWORD': {
      return {
        ...state,
        confirmRegisterPassword: action.password,
      }
    }
    case 'SET_NEWSLETTER_EMAIL': {
      return {
        ...state,
        newsletterEmail: action.newsletterEmail,
      }
    }
    case 'SET_LOGIN_ACTIVE': {
      return {
        ...state,
        loginActive: action.loginActive,
      }
    }
    case 'SET_CURRENT': {
      return {
        ...state,
        current: action.current,
      }
    }
    case 'SET_CURRENT_TIME': {
      return {
        ...state,
        currentTime: action.currentTime,
      }
    }
    case 'SET_ACTIVE': {
      return {
        ...state,
        active: action.active,
      }
    }
    case 'SET_REMINDER_DATE': {
      return {
        ...state,
        reminderDate: action.reminderDate,
      }
    }
    case 'SET_REMINDER_STATE': {
      return {
        ...state,
        reminderState: action.reminderState,
      }
    }
    case 'SET_REMINDER_TIME': {
      return {
        ...state,
        reminderTime: action.reminderTime,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer

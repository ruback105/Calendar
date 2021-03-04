import moment from 'moment'

export const initialState = {
  loginEmail: '',
  loginActive: true,
  userToken: '',
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
    case 'SET_LOGIN_ACTIVE': {
      return {
        ...state,
        loginActive: action.loginActive,
      }
    }
    case 'SET_USER_TOKEN': {
      return {
        ...state,
        userToken: action.userToken,
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

import moment from 'moment'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const initialState = {
  loginEmail: cookies.get('loginEmail'),
  loginActive: true,
  userToken: cookies.get('userToken'),
  current: moment(),
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

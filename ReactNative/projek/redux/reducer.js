import { types, screen } from './actiontypes'
const initialState = {
    login: {
    username: '',
    password: '',
    isError:false
  },
  home: {
    data: [],
    isLoading: true,
    isError: false
  },
  detail: {
    data: [],
    isLoading: true,
    isError: false
  },
};

export default function reducer(state = initialState, action) {
  if (action.screen == screen.HOME) {
    if (action.type == types.UPDATE_DATA) {
      return {
        ...state,
        home: {
          ...state.home,
          data: action.data,
          isLoading: false,
          isError: false
        }
      };
    } else if (action.type === types.LOADING) {
      return {
        ...state,
        home: {
          ...state.home,
          isLoading: action.isLoading
        }
      };
    } else if (action.type === types.ERROR) {
      return {
        ...state,
        home: {
          ...state.home,
          isError: action.isError,
        }
      };
    }
  }
  else if (action.screen === screen.DETAIL) {
    if (action.type == types.UPDATE_DATA) {
      return {
        ...state,
        detail: {
          ...state.detail,
          data: action.data,
          isLoading: false,
          isError: false
        }
      };
    } else if (action.type === types.LOADING) {
      return {
        ...state,
        detail: {
          ...state.detail,
          isLoading: action.isLoading
        }
      };
    } else if (action.type === types.ERROR) {
      return {
        ...state,
        detail: {
          ...state.detail,
          isError: action.isError,
        }
      };
    }
  }
  else{
    if (action.type === types.INPUT_USERNAME) {
      return {
        ...state,
        login: {
          ...state.login,
          username: action.username
        }
      }
    }
    else if (action.type === types.INPUT_PASSWORD) {
      return {
        ...state,
        login: {
          ...state.login,
          password: action.password
        }
      }
    }
    else if(action.type===types.ERROR){
      return {
        ...state,
        login: {
          ...state.login,
          isError:action.isError
        }
      }
    }
  }
  return state
};

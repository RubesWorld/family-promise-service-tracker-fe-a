import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_RESOLVE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_RESOLVE,
} from '../actions/userActions';

// Initial User State

export const initialUserState = {
  user: {
    avatarUrl: '',
    created_at: '',
    email: '',
    id: '',
    name: '',
    role: '',
    updated_at: '',
  },
  status: 'Sleeping...',
  error: '',
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          created_at: action.payload.created_at,
          email: action.payload.email,
          id: action.payload.id,
          name: action.payload.name,
          role: action.payload.role,
          updated_at: action.payload.updated_at,
        },
        status: 'Success!',
        error: '',
      };
    case GET_USER_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case GET_USER_RESOLVE:
      return {
        ...state,
        status: 'Sleeping...',
        error: action.payload,
      };
    case EDIT_USER_START:
      return {
        ...state,
        status: 'Pending...',
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          created_at: action.payload.created_at,
          email: action.payload.email,
          id: action.payload.id,
          name: action.payload.name,
          role: action.payload.role,
          updated_at: action.payload.updated_at,
        },
        status: 'Success!',
        error: '',
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        status: 'Failed',
        error: action.payload,
      };
    case EDIT_USER_RESOLVE:
      return {
        ...state,
        status: 'Sleeping...',
        error: action.payload,
      };
    default:
      return state;
  }
};
import {ADD_USER, DELETE_USER, FILTER_LIST} from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    name: 'Root Admin'
  }
];

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        {
          id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
          name: action.name,
        },
        ...state
      ];
    case DELETE_USER:
      return state.filter(user => user.id !== action.id);
    case FILTER_LIST:
      return action.name;
    default:
      return state;
  }
}

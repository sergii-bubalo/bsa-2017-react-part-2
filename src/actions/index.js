import * as types from '../constants/ActionTypes';

export const pushUser = (name) => ({
  type: types.ADD_USER,
  name
});

export const deleteUser = (id) => ({
  type: types.DELETE_USER,
  id
});

export const filterList = (name) => ({
    type: types.FILTER_LIST,
    name
});
